const V = "quiz-v1"; // changer (quiz-v2, …) à chaque mise à jour de l'application
const FILES = ["./", "index.html", "manifest.webmanifest",
  "icons/icon-192.png", "icons/icon-512.png",
  "lib/pdfjs/pdf.min.js", "lib/pdfjs/pdf.worker.min.js"];
self.addEventListener("install", e =>
  e.waitUntil(caches.open(V).then(c => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener("activate", e =>
  e.waitUntil(caches.keys().then(k =>
    Promise.all(k.filter(x => x !== V).map(x => caches.delete(x)))).then(() => self.clients.claim())));
self.addEventListener("fetch", e =>
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
