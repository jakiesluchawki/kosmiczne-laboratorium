const CACHE = "kosmiczne-laboratorium-3c2ecde4ad26662a";
const OFFLINE_URL = "./index.html";
const PROTECT_PRIVATE_ROUTES = true;
const PRIVATE_SERVICE_WORKER_PREFIXES = ["review","__voice-review"];
const PRECACHE_URLS = [
  "./404.html",
  "./art/gouache-discovery-treasure-book-mobile.png",
  "./art/gouache-discovery-treasure-book.png",
  "./art/gouache-galileo-veega-single-earth.png",
  "./art/gouache-galileo-veega-space-v2.png",
  "./art/gouache-galileo-veega.png",
  "./art/gouache-magnet-workbench.jpg",
  "./art/gouache-mission-observatory-mobile.png",
  "./art/gouache-mission-observatory.png",
  "./art/gouache-moon-observatory.png",
  "./art/gouache-observatory-night.png",
  "./art/gouache-orbit-rescue.png",
  "./art/gouache-seasons-observatory-heliocentric.png",
  "./art/gouache-seasons-observatory.png",
  "./art/gouache-transition-final-mobile.png",
  "./art/gouache-transition-magnet-mobile.jpg",
  "./art/gouache-transition-mass-mobile.png",
  "./art/gouache-transition-mass.jpg",
  "./art/gouache-transition-missions-mobile.png",
  "./art/gouache-transition-missions.jpg",
  "./art/gouache-transition-moon-mobile.png",
  "./art/gouache-transition-moon.jpg",
  "./art/gouache-transition-orbit-mobile.png",
  "./art/gouache-transition-orbit.jpg",
  "./art/gouache-transition-playground-mobile.png",
  "./art/gouache-transition-playground.jpg",
  "./art/gouache-transition-race-mobile.jpg",
  "./art/gouache-transition-race.jpg",
  "./art/gouache-transition-seasons-mobile-v2.jpg",
  "./art/gouache-transition-seasons-v2.jpg",
  "./art/gouache-transition-throw-mobile.png",
  "./art/gouache-transition-throw.jpg",
  "./art/gouache-voyager-grand-tour.png",
  "./art/magnet-objects/banan.png",
  "./art/magnet-objects/dinozaur.png",
  "./art/magnet-objects/kaczka.png",
  "./art/magnet-objects/klocek.png",
  "./art/magnet-objects/kulka.png",
  "./art/magnet-objects/meteoryt.png",
  "./art/magnet-objects/spinacz.png",
  "./art/magnet-objects/srubka.png",
  "./art/painted-apollo-13-docked.png",
  "./art/painted-apollo-13.png",
  "./art/painted-apollo13.png",
  "./art/painted-earth-cutout.png",
  "./art/painted-earth.png",
  "./art/painted-galileo.png",
  "./art/painted-jupiter-cutout.png",
  "./art/painted-magnet.png",
  "./art/painted-moon.png",
  "./art/painted-orbit-car-coral.png",
  "./art/painted-orbit-car-mint.png",
  "./art/painted-projectile.png",
  "./art/painted-saturn-cutout-v2.png",
  "./art/painted-sun.png",
  "./art/painted-uranus-cutout-v2.png",
  "./art/painted-voyager.png",
  "./art/painted-voyager2.png",
  "./art/planets/jupiter.png",
  "./art/planets/neptune.png",
  "./art/planets/saturn.png",
  "./art/planets/uranus.png",
  "./art/planets/venus.png",
  "./assets/index-B4vBpFU4.css",
  "./assets/index-ctngjHv2.js",
  "./assets/web-BM1e2KGH.js",
  "./assets/web-c987YHHZ.js",
  "./assets/web-xpZitEFo.js",
  "./audio/music/bright-future.mp3",
  "./audio/music/fragile-nature.mp3",
  "./audio/music/glittering-grandeur.mp3",
  "./audio/music/momentous-arrival.mp3",
  "./audio/music/mother-earth.mp3",
  "./audio/music/peaceful-reflection.mp3",
  "./audio/music/spring-is-coming.mp3",
  "./audio/music/winds-of-change.mp3",
  "./audio/openai-marin-06f41b48011838.mp3",
  "./audio/openai-marin-113d3d1e8499d6.mp3",
  "./audio/openai-marin-139de79d04c36e.mp3",
  "./audio/openai-marin-173bec8f1be9dc.mp3",
  "./audio/openai-marin-187f9197ba9839.mp3",
  "./audio/openai-marin-1b7f1e4ca2a7db.mp3",
  "./audio/openai-marin-1f771aa48ca38d.mp3",
  "./audio/openai-marin-200a0ab7685a3f.mp3",
  "./audio/openai-marin-226cb4f17bf438.mp3",
  "./audio/openai-marin-28cf5878f32174.mp3",
  "./audio/openai-marin-2b052ff2efe179.mp3",
  "./audio/openai-marin-2cff9cd6fae5f8.mp3",
  "./audio/openai-marin-2f00b4cde9bc46.mp3",
  "./audio/openai-marin-4223402db7b56f.mp3",
  "./audio/openai-marin-42bcd05e014c59.mp3",
  "./audio/openai-marin-48a373951a4d59.mp3",
  "./audio/openai-marin-4d2f36e0d25cdf.mp3",
  "./audio/openai-marin-4fecdf33937e3f.mp3",
  "./audio/openai-marin-51b660639f919a.mp3",
  "./audio/openai-marin-51c484a3ebb3bb.mp3",
  "./audio/openai-marin-539410834a93af.mp3",
  "./audio/openai-marin-5a4463167d0eaf.mp3",
  "./audio/openai-marin-610bb074667127.mp3",
  "./audio/openai-marin-65e498feb3e095.mp3",
  "./audio/openai-marin-68b8f4456c556a.mp3",
  "./audio/openai-marin-6b5e709ead2093.mp3",
  "./audio/openai-marin-6c11ef4771b7ad.mp3",
  "./audio/openai-marin-6d50e051830693.mp3",
  "./audio/openai-marin-70b45a3941bb0d.mp3",
  "./audio/openai-marin-70c8eb77c96d71.mp3",
  "./audio/openai-marin-7b73db026def59.mp3",
  "./audio/openai-marin-84683a72d82ad2.mp3",
  "./audio/openai-marin-8491893e23957f.mp3",
  "./audio/openai-marin-84bcf1c962761f.mp3",
  "./audio/openai-marin-8593406dd6e1ef.mp3",
  "./audio/openai-marin-859ce998bd0474.mp3",
  "./audio/openai-marin-887dd93c7af41b.mp3",
  "./audio/openai-marin-973b0ad15150d4.mp3",
  "./audio/openai-marin-978e5dcb4886c3.mp3",
  "./audio/openai-marin-9b1e89fcf08a7c.mp3",
  "./audio/openai-marin-9cf073105bbb6e.mp3",
  "./audio/openai-marin-a88daa71288a98.mp3",
  "./audio/openai-marin-aca77d16ebbe65.mp3",
  "./audio/openai-marin-aefd35f7fa14d8.mp3",
  "./audio/openai-marin-b6b384c05ec971.mp3",
  "./audio/openai-marin-b80b139d4fec47.mp3",
  "./audio/openai-marin-c1de86457eb3b2.mp3",
  "./audio/openai-marin-c382ab60d9e741.mp3",
  "./audio/openai-marin-c3968936e22f87.mp3",
  "./audio/openai-marin-c92615c63fb706.mp3",
  "./audio/openai-marin-c9680fa86a78fc.mp3",
  "./audio/openai-marin-cc86e419bd0e15.mp3",
  "./audio/openai-marin-d6e8c10869b2a2.mp3",
  "./audio/openai-marin-dcdede6067b74f.mp3",
  "./audio/openai-marin-e47d1dbecfeee5.mp3",
  "./audio/openai-marin-ea01761682a05f.mp3",
  "./audio/openai-marin-ef36af5f8afa07.mp3",
  "./audio/openai-marin-effb2819c3da00.mp3",
  "./audio/openai-marin-f3b6bc147f3803.mp3",
  "./audio/openai-marin-f58b5ff4a509d5.mp3",
  "./audio/openai-marin-f8312ef0dda6f2.mp3",
  "./audio/openai-marin-f884886a236f04.mp3",
  "./audio/system-zosia-1cebbc599c430c.wav",
  "./audio/system-zosia-3b69113e9da98c.wav",
  "./audio/system-zosia-5f0219ab92bc1a.wav",
  "./audio/system-zosia-68ef99d95d2977.wav",
  "./audio/system-zosia-be881401935454.wav",
  "./audio/voice-manifest.json",
  "./build-info.json",
  "./en/index.html",
  "./fonts/nunito-latin-ext-variable.woff2",
  "./fonts/nunito-latin-variable.woff2",
  "./icons/app-icon-192.png",
  "./icons/app-icon-512.png",
  "./icons/app-icon-macos-master.png",
  "./icons/app-icon-master.png",
  "./icons/apple-touch-icon.png",
  "./index.html",
  "./manifest-en.webmanifest",
  "./manifest.webmanifest",
  "./privacy/index.html",
  "./project/index.html",
  "./project/project-index.json",
  "./project/status/index.html",
  "./project/status/public-status.json",
  "./social/kosmiczne-laboratorium-og.jpg",
  "./support/index.html"
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
          if (response.ok) {
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
        if (!response.ok || response.type === "opaque") return response;
        const copy = response.clone();
        event.waitUntil(
          caches.open(CACHE).then((cache) => cache.put(request, copy)),
        );
        return response;
      });
    }),
  );
});
