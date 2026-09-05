const CACHE_PREFIX = "kosmiczne-laboratorium:" + self.registration.scope + ":";
const CACHE = CACHE_PREFIX + "6feeae76ae9d2f1c";
const PROTECT_PRIVATE_ROUTES = true;
const PRIVATE_SERVICE_WORKER_PREFIXES = ["review","__voice-review"];
const PRECACHE_URLS = [
  "./404.html",
  "./assets/GravityAssistLab-D_YgVpo4.js",
  "./assets/GravityAssistLab-rBv1J18J.css",
  "./assets/GravityWorkbench-C8v9D-ng.js",
  "./assets/MagnetWorkbench-D91bF7MF.js",
  "./assets/MoonLab-CM3MyGxe.js",
  "./assets/RaceGame-Bjbt17lb.js",
  "./assets/englishTwin-BQHl4OQg.js",
  "./assets/index-BC_Qwvp8.js",
  "./assets/index-BWKGD4Wv.js",
  "./assets/index-CNHTL47a.js",
  "./assets/index-CO8DARKm.css",
  "./assets/index-ChwvwszA.js",
  "./assets/index-ZJqw7-iX.js",
  "./assets/index-yfng7u8G.js",
  "./assets/web-BTtVjy98.js",
  "./assets/web-B_uYsOou.js",
  "./assets/web-DsAOOook.js",
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
const RUNTIME_URLS = new Set(["./404.html","./art/gouache-discovery-treasure-book-mobile.png","./art/gouache-discovery-treasure-book.png","./art/gouache-galileo-veega-single-earth.png","./art/gouache-galileo-veega-space-v2.png","./art/gouache-galileo-veega.png","./art/gouache-magnet-workbench.jpg","./art/gouache-mission-observatory-mobile.png","./art/gouache-mission-observatory.png","./art/gouache-moon-observatory.png","./art/gouache-observatory-night.png","./art/gouache-orbit-rescue.png","./art/gouache-seasons-observatory-heliocentric.png","./art/gouache-seasons-observatory.png","./art/gouache-transition-final-mobile.png","./art/gouache-transition-magnet-mobile.jpg","./art/gouache-transition-mass-mobile.png","./art/gouache-transition-mass.jpg","./art/gouache-transition-missions-mobile.png","./art/gouache-transition-missions.jpg","./art/gouache-transition-moon-mobile.png","./art/gouache-transition-moon.jpg","./art/gouache-transition-orbit-mobile.png","./art/gouache-transition-orbit.jpg","./art/gouache-transition-playground-mobile.png","./art/gouache-transition-playground.jpg","./art/gouache-transition-race-mobile.jpg","./art/gouache-transition-race.jpg","./art/gouache-transition-seasons-mobile-v2.jpg","./art/gouache-transition-seasons-v2.jpg","./art/gouache-transition-throw-mobile.png","./art/gouache-transition-throw.jpg","./art/gouache-voyager-grand-tour.png","./art/magnet-objects/banan.png","./art/magnet-objects/dinozaur.png","./art/magnet-objects/kaczka.png","./art/magnet-objects/klocek.png","./art/magnet-objects/kulka.png","./art/magnet-objects/meteoryt.png","./art/magnet-objects/spinacz.png","./art/magnet-objects/srubka.png","./art/painted-apollo-13-docked.png","./art/painted-apollo-13.png","./art/painted-apollo13.png","./art/painted-earth-sphere-v6.png","./art/painted-earth.png","./art/painted-galileo.png","./art/painted-jupiter-cutout.png","./art/painted-magnet.png","./art/painted-moon.png","./art/painted-orbit-car-coral.png","./art/painted-orbit-car-mint.png","./art/painted-projectile.png","./art/painted-saturn-cutout-v2.png","./art/painted-sun.png","./art/painted-uranus-cutout-v2.png","./art/painted-voyager.png","./art/painted-voyager2.png","./art/planets/jupiter.png","./art/planets/neptune.png","./art/planets/saturn.png","./art/planets/uranus.png","./art/planets/venus.png","./assets/GravityAssistLab-D_YgVpo4.js","./assets/GravityAssistLab-rBv1J18J.css","./assets/GravityWorkbench-C8v9D-ng.js","./assets/MagnetWorkbench-D91bF7MF.js","./assets/MoonLab-CM3MyGxe.js","./assets/RaceGame-Bjbt17lb.js","./assets/englishTwin-BQHl4OQg.js","./assets/index-BC_Qwvp8.js","./assets/index-BWKGD4Wv.js","./assets/index-CNHTL47a.js","./assets/index-CO8DARKm.css","./assets/index-ChwvwszA.js","./assets/index-ZJqw7-iX.js","./assets/index-yfng7u8G.js","./assets/web-BTtVjy98.js","./assets/web-B_uYsOou.js","./assets/web-DsAOOook.js","./assets/web-UF6Tptlq.js","./audio/human-assist-001.m4a","./audio/human-assist-002.m4a","./audio/human-assist-003.m4a","./audio/human-assist-004.m4a","./audio/human-assist-005.m4a","./audio/human-assist-006.m4a","./audio/human-assist-007.m4a","./audio/human-assist-008.m4a","./audio/human-assist-009.m4a","./audio/human-assist-010.m4a","./audio/human-assist-011.m4a","./audio/human-assist-012.m4a","./audio/human-assist-013.m4a","./audio/human-assist-014.m4a","./audio/human-assist-015.m4a","./audio/human-assist-016.m4a","./audio/human-assist-017.m4a","./audio/human-assist-018.m4a","./audio/human-assist-019.m4a","./audio/human-assist-020.m4a","./audio/human-assist-021.m4a","./audio/human-assist-022.m4a","./audio/human-assist-023.m4a","./audio/human-assist-024.m4a","./audio/human-assist-025.m4a","./audio/human-assist-026.m4a","./audio/human-assist-027.m4a","./audio/human-assist-028.m4a","./audio/human-assist-029.m4a","./audio/human-assist-030.m4a","./audio/human-assist-031.m4a","./audio/human-assist-032.m4a","./audio/human-assist-033.m4a","./audio/human-disc-001.m4a","./audio/human-disc-002.m4a","./audio/human-disc-003.m4a","./audio/human-disc-004.m4a","./audio/human-grav-001.m4a","./audio/human-grav-002.m4a","./audio/human-grav-003.m4a","./audio/human-grav-004.m4a","./audio/human-grav-005.m4a","./audio/human-grav-006.m4a","./audio/human-grav-007.m4a","./audio/human-grav-008.m4a","./audio/human-grav-009.m4a","./audio/human-grav-010.m4a","./audio/human-grav-011.m4a","./audio/human-host-final-001.m4a","./audio/human-host-home-001.m4a","./audio/human-host-magnet-001.m4a","./audio/human-host-mass-001.m4a","./audio/human-host-missions-001.m4a","./audio/human-host-moon-001.m4a","./audio/human-host-notebook-001.m4a","./audio/human-host-orbit-001.m4a","./audio/human-host-playground-001.m4a","./audio/human-host-race-001.m4a","./audio/human-host-seasons-001.m4a","./audio/human-host-throw-001.m4a","./audio/human-inst-001.m4a","./audio/human-inst-002.m4a","./audio/human-inst-003.m4a","./audio/human-inst-004.m4a","./audio/human-intro-001.m4a","./audio/human-intro-002.m4a","./audio/human-intro-003.m4a","./audio/human-intro-004.m4a","./audio/human-intro-005.m4a","./audio/human-mag-001.m4a","./audio/human-mag-002.m4a","./audio/human-mag-003.m4a","./audio/human-mag-004.m4a","./audio/human-mag-005.m4a","./audio/human-mag-006.m4a","./audio/human-mag-007.m4a","./audio/human-mag-008.m4a","./audio/human-mag-009.m4a","./audio/human-mag-010.m4a","./audio/human-mag-011.m4a","./audio/human-mag-012.m4a","./audio/human-mag-013.m4a","./audio/human-mag-014.m4a","./audio/human-mag-015.m4a","./audio/human-mag-016.m4a","./audio/human-mag-017.m4a","./audio/human-mass-001.m4a","./audio/human-mass-002.m4a","./audio/human-mass-003.m4a","./audio/human-moon-001.m4a","./audio/human-moon-002.m4a","./audio/human-moon-003.m4a","./audio/human-moon-004.m4a","./audio/human-moon-005.m4a","./audio/human-moon-006.m4a","./audio/human-moon-007.m4a","./audio/human-moon-008.m4a","./audio/human-moon-009.m4a","./audio/human-play-001.m4a","./audio/human-play-002.m4a","./audio/human-play-003.m4a","./audio/human-play-004.m4a","./audio/human-play-005.m4a","./audio/human-race-001.m4a","./audio/human-race-002.m4a","./audio/human-race-003.m4a","./audio/human-race-004.m4a","./audio/human-race-005.m4a","./audio/human-seas-001.m4a","./audio/human-seas-002.m4a","./audio/human-seas-003.m4a","./audio/human-seas-004.m4a","./audio/human-seas-005.m4a","./audio/human-seas-006.m4a","./audio/human-seas-007.m4a","./audio/human-seas-008.m4a","./audio/human-seas-009.m4a","./audio/human-seas-010.m4a","./audio/human-sys-001.m4a","./audio/human-tomek-assist-open.m4a","./audio/human-tomek-play-open.m4a","./audio/music/bright-future.mp3","./audio/music/fragile-nature.mp3","./audio/music/glittering-grandeur.mp3","./audio/music/momentous-arrival.mp3","./audio/music/mother-earth.mp3","./audio/music/peaceful-reflection.mp3","./audio/music/spring-is-coming.mp3","./audio/music/winds-of-change.mp3","./audio/voice-manifest.json","./build-info.json","./downloads/checkpoint-przed-nagraniem-2026-06-14/index.html","./downloads/checkpoint-przed-nagraniem-2026-06-14/kosmiczne-laboratorium-checkpoint-przed-nagraniem-manifest.json","./downloads/checkpoint-przed-nagraniem-2026-06-14/kosmiczne-laboratorium-checkpoint-przed-nagraniem.pdf","./downloads/nagranie-piotr-2026-06-15/Kosmiczne-laboratorium-karta-sesji-studyjnej.docx","./downloads/nagranie-piotr-2026-06-15/Kosmiczne-laboratorium-karta-sesji-studyjnej.md","./downloads/nagranie-piotr-2026-06-15/Kosmiczne-laboratorium-scenariusz-Piotr-Makowski.docx","./downloads/nagranie-piotr-2026-06-15/Kosmiczne-laboratorium-scenariusz-Piotr-Makowski.pdf","./downloads/nagranie-piotr-2026-06-15/Kosmiczne-laboratorium-scenariusz-Piotr-Makowski.rtf","./downloads/nagranie-piotr-2026-06-15/Zgoda-lektorska-Piotr-Makowski.docx","./downloads/nagranie-piotr-2026-06-15/Zgoda-lektorska-Piotr-Makowski.pdf","./downloads/nagranie-piotr-2026-06-15/index.html","./downloads/nagranie-piotr-2026-06-15/kosmiczne-laboratorium-pakiet-nagranie-piotr-2026-06-15-manifest.json","./downloads/nagranie-piotr-2026-06-15/kosmiczne-laboratorium-pakiet-nagranie-piotr-2026-06-15.docx","./downloads/nagranie-piotr-2026-06-15/kosmiczne-laboratorium-pakiet-nagranie-piotr-2026-06-15.pdf","./downloads/nagranie-piotr-2026-06-15/kosmiczne-laboratorium-pakiet-nagranie-piotr-2026-06-15.zip","./downloads/nagranie-tomek/Kosmiczne-laboratorium-karta-sesji-studyjnej.docx","./downloads/nagranie-tomek/Kosmiczne-laboratorium-karta-sesji-studyjnej.md","./downloads/nagranie-tomek/Kosmiczne-laboratorium-scenariusz-Tomek-Miller.docx","./downloads/nagranie-tomek/Kosmiczne-laboratorium-scenariusz-Tomek-Miller.pdf","./downloads/nagranie-tomek/Kosmiczne-laboratorium-scenariusz-Tomek-Miller.rtf","./downloads/nagranie-tomek/Zgoda-lektorska-Tomek-Miller.docx","./downloads/nagranie-tomek/Zgoda-lektorska-Tomek-Miller.pdf","./downloads/nagranie-tomek/index.html","./downloads/nagranie-tomek/kosmiczne-laboratorium-pakiet-przygotowawczy-tomek-manifest.json","./downloads/nagranie-tomek/kosmiczne-laboratorium-pakiet-przygotowawczy-tomek.docx","./downloads/nagranie-tomek/kosmiczne-laboratorium-pakiet-przygotowawczy-tomek.pdf","./downloads/nagranie-tomek/kosmiczne-laboratorium-pakiet-przygotowawczy-tomek.zip","./en/index.html","./fonts/nunito-latin-ext-variable.woff2","./fonts/nunito-latin-variable.woff2","./icons/app-icon-192.png","./icons/app-icon-512.png","./icons/app-icon-macos-master.png","./icons/app-icon-master.png","./icons/apple-touch-icon.png","./index.html","./manifest-en.webmanifest","./manifest.webmanifest","./privacy/index.html","./project/index.html","./project/project-index.json","./project/status/index.html","./project/status/public-status.json","./social/kosmiczne-laboratorium-og.jpg","./support/index.html"]
  .map((path) => new URL(path, self.registration.scope).href));

function scopedServiceWorkerPath(requestUrl, scopeUrl) {
  let requestPath;
  let scopePath;
  try {
    const request = new URL(requestUrl);
    const scope = new URL(scopeUrl);
    if (request.origin !== scope.origin) return null;
    requestPath = decodeURIComponent(request.pathname);
    scopePath = decodeURIComponent(scope.pathname);
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
    !request.headers.has("authorization") &&
    request.cache !== "no-store" &&
    response.status === 200 &&
    response.ok &&
    response.type !== "opaque" &&
    !response.redirected &&
    !/(?:^|,)\s*(?:no-store|private)\b/i.test(
      response.headers?.get("cache-control") ?? "",
    )
  );
}

function serviceWorkerOfflineDocument(path) {
  if (path === "" || path === "index.html") return "./index.html";
  if (path === "en/" || path === "en/index.html") return "./en/index.html";
  return null;
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

async function removeOldCaches() {
  for (const key of await caches.keys()) {
    if (key.startsWith(CACHE_PREFIX) && key !== CACHE) {
      await caches.delete(key);
    } else if (/^kosmiczne-laboratorium-[a-f0-9]{16}$/.test(key)) {
      // Legacy caches were origin-wide; remove only this installation's entries.
      const cache = await caches.open(key);
      for (const request of await cache.keys()) {
        if (scopedServiceWorkerPath(request.url, self.registration.scope) !== null) {
          await cache.delete(request);
        }
      }
      if ((await cache.keys()).length === 0) await caches.delete(key);
    }
  }
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    removeOldCaches()
      .then(() =>
        PROTECT_PRIVATE_ROUTES ? purgePrivateCacheEntries() : undefined,
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  const path = scopedServiceWorkerPath(request.url, self.registration.scope);
  if (path === null) return;

  if (
    PROTECT_PRIVATE_ROUTES &&
    isPrivateServiceWorkerRoute(request.url, self.registration.scope)
  ) {
    event.respondWith(Promise.resolve(privateRouteResponse()));
    return;
  }

  if (
    request.headers.has("range") ||
    request.headers.has("authorization") ||
    request.cache === "no-store"
  ) return;

  if (request.mode === "navigate") {
    const offlineUrl = serviceWorkerOfflineDocument(path);
    if (!offlineUrl) return;
    event.respondWith(
      fetch(request)
        .catch(async () => {
          // The installed shell stays version- and language-bound.
          const cache = await caches.open(CACHE);
          return (await cache.match(offlineUrl)) ?? Response.error();
        }),
    );
    return;
  }

  if (url.search || !RUNTIME_URLS.has(url.href)) return;

  event.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const cached = await cache.match(request);
      if (cached) return cached;
      return fetch(request).then((response) => {
        if (!shouldCacheServiceWorkerResponse(request, response)) {
          return response;
        }
        const copy = response.clone();
        event.waitUntil(cache.put(request, copy));
        return response;
      });
    }),
  );
});
