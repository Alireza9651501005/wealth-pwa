const cashe_name = 'v1';
const filesToCashe = ['index.html', 'offline.html']

// install sw

this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cashe_name)
        .then((cache) => {
            console.log('Opened cache');
            
        return cache.addAll(filesToCashe);
        })
    )
})

//listen for requests

this.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request)
                    .catch(() => caches.match('offline.html'))
            })
    )
});

// Activate the sw

this.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(cashe_name);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
    )
})
