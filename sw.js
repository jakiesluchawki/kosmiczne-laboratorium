const CACHE = "kosmiczne-laboratorium-c2c4fd2feff21580";
const OFFLINE_URL = "./index.html";
const PROTECT_PRIVATE_ROUTES = true;
const PRIVATE_SERVICE_WORKER_PREFIXES = ["review","__voice-review"];
const PRECACHE_URLS = [
  "./404.html",
  "./assets/GravityAssistLab-CBgapCeg.css",
  "./assets/GravityAssistLab-gcyosLEg.js",
  "./assets/MoonLab-7CWyf2TL.js",
  "./assets/RaceGame-C4tdzoti.js",
  "./assets/englishTwin-D7_rZ2zh.js",
  "./assets/index-B2xzkyeN.css",
  "./assets/index-BcvNICPe.js",
  "./assets/index-CV4Cquht.js",
  "./assets/index-D7cqRXA7.js",
  "./assets/index-tQdxd_4R.js",
  "./assets/index-yI4z_oI3.js",
  "./assets/web-BeOpRGRz.js",
  "./assets/web-CJJ3fygS.js",
  "./assets/web-UHFIufbu.js",
  "./build-info.json",
  "./en/index.html",
  "./fonts/nunito-latin-ext-variable.woff2",
  "./fonts/nunito-latin-variable.woff2",
  "./icons/app-icon-192.png",
  "./icons/app-icon-512.png",
  "./icons/apple-touch-icon.png",
  "./index.html",
  "./manifest-en.webmanifest",
  "./manifest.webmanifest"
];

function scopedServiceWorkerPath(requestUrl, scopeUrl) {
  let requestPath;
  let scopePath;
  try {
    requestPath = decodeURIComponent(new URL(requestUrl).pathname);
    scopePath = decodeURIComponent(new URL(scopeUrl).pathname);
  } catch {
    return null;
  }

  const normalizedScope = scopePath.endsWith("/")
    ? scopePath
    : `${scopePath}/`;
  if (!requestPath.startsWith(normalizedScope)) return null;

  return requestPath
    .slice(normalizedScope.length)
    .replace(/^\/+/, "")
    .toLowerCase();
}

function isPrivateServiceWorkerRoute(
  requestUrl,
  scopeUrl,
  prefixes = PRIVATE_SERVICE_WORKER_PREFIXES,
) {
  const path = scopedServiceWorkerPath(requestUrl, scopeUrl);
  if (path === null) return false;
  return prefixes.some(
    (prefix) => path === prefix || path.startsWith(`${prefix}/`),
  );
}

function shouldCacheServiceWorkerResponse(request, response) {
  return (
    !request.headers.has("range") &&
    response.status !== 206 &&
    response.ok &&
    response.type !== "opaque"
  );
}

function privateRouteResponse() {
  return new Response("Not found", {
    status: 404,
    headers: {
      "Cache-Control": "no-store",
      "Content-Type": "text/plain; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow, noarchive",
    },
  });
}

async function purgePrivateCacheEntries() {
  const keys = await caches.keys();
  await Promise.all(
    keys.map(async (key) => {
      const cache = await caches.open(key);
      const requests = await cache.keys();
      await Promise.all(
        requests
          .filter((request) =>
            isPrivateServiceWorkerRoute(
              request.url,
              self.registration.scope,
            ),
          )
          .map((request) => cache.delete(request)),
      );
    }),
  );
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(PRECACHE_URLS)),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter(
              (key) =>
                key.startsWith("kosmiczne-laboratorium-") && key !== CACHE,
            )
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() =>
        PROTECT_PRIVATE_ROUTES ? purgePrivateCacheEntries() : undefined,
      ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (
    PROTECT_PRIVATE_ROUTES &&
    isPrivateServiceWorkerRoute(request.url, self.registration.scope)
  ) {
    event.respondWith(Promise.resolve(privateRouteResponse()));
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (shouldCacheServiceWorkerResponse(request, response)) {
            const copy = response.clone();
            event.waitUntil(
              caches.open(CACHE).then((cache) => cache.put(OFFLINE_URL, copy)),
            );
          }
          return response;
        })
        .catch(() => caches.match(OFFLINE_URL)),
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        if (!shouldCacheServiceWorkerResponse(request, response)) {
          return response;
        }
        const copy = response.clone();
        event.waitUntil(
          caches.open(CACHE).then((cache) => cache.put(request, copy)),
        );
        return response;
      });
    }),
  );
});
