const CACHE_NAME = 'gsr-cache-v2';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Simple pass-through fetch to satisfy the PWA install requirement
  // without risking install failure from caching errors.
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
