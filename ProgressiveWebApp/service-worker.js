const CACHE_NAME = 'mon-pwa-cache-v1';
const URLS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './manifest.json',
  './icons/tool_service_setting_repair_wrench_icon_256.png',
  './icons/tool_service_setting_repair_wrench_icon_512.png'
];

self.addEventListener('install', event => {
  console.log('Service worker installé');
  // Pré-caching possible ici
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', event => {
  // Tu peux gérer les requêtes ici pour le mode offline
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});