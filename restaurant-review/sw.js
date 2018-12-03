//Indicate the service worker is registered.
console.log('Service Worker is registered.');

//Install cache and add cache files into the cache storage
self.addEventListener('install', function(e){
    e.waitUntil(
        caches.open('vw1').then(function(cache){
            return cache.addAll([
                '/',
                '/index.html',
                '/restaurant.html',
                '/data/restaurants.json',
                '/css/styles.css',
                '/js/dbhelper.js',
                '/js/main.js',
                '/js/restaurant_info.js',
                '/img/1.jpg',
                '/img/2.jpg',
                '/img/3.jpg',
                '/img/4.jpg',
                '/img/5.jpg',
                '/img/6.jpg',
                '/img/7.jpg',
                '/img/8.jpg',
                '/img/9.jpg',
                '/img/10.jpg'
            ]);
        })
    );
});

//Fetching the events
self.addEventListener('fetch', function(e){
    e.respondWith(
        // Check if the event request url already exists in the cache
        caches.match(e.request, {ignoreSearch: true}).then(function(response){
            if (response) {
                console.log('Found', e.request, ' in cache');
                return response;
            }
            else {
                console.log('Cannot find', e.request, 'in cache, Fetching...');
                return fetch(e.request).then(function(response){
                    const clonedResponse = response.clone();
                    caches.open('vw1').then(function(cache){
                        cache.put(e.request, clonedResponse);
                    })
                    return response;
                }).catch(function(err){
                    console.log(err);
                });
            }
        })
    );
});