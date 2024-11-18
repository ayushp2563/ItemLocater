self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('item-locator-v1').then((cache) => {
      return cache.addAll([
        '/',
        //'/index.html',
        '/manifest.json',
        '/android-chrome-192x192.png',
        '/android-chrome-512x512.png',  
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});