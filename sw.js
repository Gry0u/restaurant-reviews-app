let cacheID = "restaurant-app-v0";
const urlToCache = [
  "./",
  "./index.html",
  "./restaurant.html",
  "./css/style_restaurant.css",
  "./css/style_index.css",
  "./data/restaurants.json",
  "./js/dbhelper.js",
  "./js/main.js",
  "./js/register.js",
  "./js/restaurant_info.js"
];

//create cache and put URLs in cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches
    .open(cacheID)
    .then(cache => {
      return cache
        .addAll(urlToCache)
        .then(function() {
          console.log('success');
        })
        .catch(err => {
          console.log("cache opening failed" + err);
        });
    })
  );
})

//intercept fetch requests:
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      //if request available from cache, fetch from cache
      if (response) return response;
      //Otherwise fetch from network
      return fetch(event.request).then(response => {
        return response;
      });
    })
  );
});
