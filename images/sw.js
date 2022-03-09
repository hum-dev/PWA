self.addEventListener( "install", e => {
    e.waitUntil(
        caches.open("static").then(cache =>{
            return cache.addAll(["./", "./style.css", "./images/star-192.png"])
        })
    );
});

// self.addEventListener('install', function (event) {
//   console.log('WORKER: install event in progress.');
// });

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            returnresponse || fetch(e.request);
        })
    );
});
