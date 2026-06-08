const CACHE_NAME = 'gsr-cache-v1';

self.addEventListener('install', (event) => {
  // Pre-cache essential resources
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // We keep the list minimal to not cause install failures
      return cache.addAll([
        '/',
        '/manifest.json',
        '/icon.svg'
      ]).catch(err => console.warn('PWA caching failed', err));
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Simple stale-while-revalidate strategy for a generic PWA setup
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
