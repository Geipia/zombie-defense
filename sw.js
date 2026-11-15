/* Zombie Defense - service worker : le jeu marche hors connexion une fois chargé */
const CACHE = 'zombie-defense-v13';   // v13 : murs destructibles sur le chemin
const FICHIERS = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FICHIERS.map((url) => new Request(url, { cache: 'reload' })))));
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((key) => key.startsWith('zombie-defense-') && key !== CACHE)
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.open(CACHE)
      .then((cache) => cache.match(e.request))
      .then((r) => r || fetch(e.request))
  );
});
