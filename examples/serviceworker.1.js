//PROVIDING AN OFFLINE PAGE
self.addEventListener('install', event => {
    event.waitUntil(caches.open('offline-fallbacks')
        .then(cache => cache.add('offline.html'))
    );
});
self.addEventListener('fetch', event => {
    if (event.request.mode === 'navigate') {
        event.respondWith(fetch(event.request)
            .catch(error => {
                return caches.open('offline-fallbacks')
                    .then(cache => cache.match('offline.html'));
            })
        );
    }
});

