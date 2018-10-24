navigator.serviceWorker.register('service-worker.js', './');

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(function (registration) {
            console.log('Service worker registered!');
        })
        .catch(function (err) {
            console.log('Registration failed!');
        })
}
