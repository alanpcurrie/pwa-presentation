// registering a service worker
// Browsers that support Service Worker expose service
// Worker on the global navigator object.

navigator.serviceWorker.register('service-worker.js', './');


// First, we check if the browser support service worker,
// if the navigator object has a serviceWorker property

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(function (registration) {
            console.log('Service worker registered!');
        })
        .catch(function (err) {
            console.log('Registration failed!');
        })
}
