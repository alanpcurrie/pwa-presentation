//registering a service worker
//Browsers that support Service Worker expose seervice Worker on the global navigator object.
navigator.serviceWorker.register('service-worker.js', './');


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

// network strategy
self.addEventListener('fetch', event => {
    // For navigation requests (HTML/content fetches):
    // 1. Try fetching from the network – we want fresh content if possible
    // 1a. If successful, read-through cache a copy of the Response for later use
    // 2. If fetching rejects, try seeing if there is a match in cache
    // 3. If not in cache, respond with offline fallback page (optional)
    // For image requests
    // 1. Try finding a match in cache – prefer cached copy of images
    // 2. If not in cache, try to fetch from network
    // 2a. If fetch successful, stash image in cache for later use (readthrough)
    // 3. If fetch fails, respond with fallback image (optional)
});

function addToCache(request, response) {
    if (response.ok) {
        const copy = response.clone();
        caches.open('content')
            .then(cache => cache.put(request, copy));
    }
    return response;
}

function findInCache(request) {
    return caches.match(request).then(response => {
        if (!response) {
            throw new Error(`${request} not found in cache`);
        }

        return response;
    });
}

function fallbackImage() {
    return new Response(offlineSVG, {
        headers: {
            'Content-Type': 'image/svg+xml'
        }
    });
}
self.addEventListener('fetch', event => {
    const req = event.request;
    if (req.mode === 'navigate') {
        event.respondWith(
            fetch(req) // 1. network-first
            .then(res => addToCache(req, res)) // 2. read-through caching
            .catch(err => findInCache(req)) // 3. cache fallback
            .catch(err => findInCache('offline.html')) // 4. offline fallback
        );
    } else if (req.headers.get('Accept').indexOf('image') !== -1) {
        event.respondWith(
            findInCache(req) // 1. cache-first
            .catch(err => fetch(req)) // 2. network fallback
            .then(res => addToCache(req, res), // 3. read-through
                caching err => fallbackImage()) // 4. offline fallback
        );
    }
});