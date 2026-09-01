const CACHE = "kosmiczne-laboratorium-191d53ffcfc807ce";
const OFFLINE_URL = "./index.html";
const PROTECT_PRIVATE_ROUTES = true;
const PRIVATE_SERVICE_WORKER_PREFIXES = ["review","__voice-review"];
const PRECACHE_URLS = [
  "./404.html",
  "./assets/GravityAssistLab-CBgapCeg.css",
  "./assets/GravityAssistLab-ZVHi-4fi.js",
  "./assets/GravityWorkbench-CXJ9tG6D.js",
  "./assets/MoonLab-99ZUdmR1.js",
  "./assets/RaceGame-Bp5VWULc.js",
  "./assets/englishTwin--KBkzD8n.js",
  "./assets/index-Bl88xciJ.js",
  "./assets/index-BmTg--Pj.js",
  "./assets/index-C-8IDqz3.js",
  "./assets/index-CNHTL47a.js",
  "./assets/index-D6hyRgSx.js",
  "./assets/index-DFoTtGuG.js",
  "./assets/index-DxIrWFKk.css",
  "./assets/web-B_uYsOou.js",
  "./assets/web-DsAOOook.js",
  "./assets/web-DyinP4Pe.js",
  "./assets/web-UF6Tptlq.js",
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
