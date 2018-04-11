var CacheName = 'moodo-cache-1523437126863',
    CacheNameCommon = 'moodo-cache-common';

function notifyClient(text)
{
    self.clients.matchAll({ includeUncontrolled: true }).then(function (all)
    {
        all.map(function (client)
        {
            client.postMessage('ServiceWorker_' + text);
        });
    });
}

self.addEventListener('install', function (e)
{
    console.log('Installing new Service Worker');

    self.skipWaiting();
    e.waitUntil(
        caches.open(CacheName).then(function (cache)
        {
            return cache.addAll([
                '/app/',
                '/app/index-1523437126863.html',
                '/js/vendor-1523437126863.js',
                '/js/delayedUI-1523437126863.js',
                '/js/dimport-1523437126863.js',
                '/js/main-min-1523437126863.js',
                '/js/preload-min-1523437126863.js',
                '/css/app-min-1523437126863.css',
                '/css/fonts/fonticons-1523437126863.woff',
                '/css/fonts/fonticons-1523437126863.ttf'
            ]);
        }).then(caches.open(CacheNameCommon).then(function (cache)
        {
            return cache.addAll([
                '/favicon.ico',
                '/js/rollbar-min.js',
                '/img/stripe.png',
                '/img/apple-touch-icon.png',
                '/img/logoForWhite600.png',
                '/img/btn_google_signin_dark_normal_web@2x.png',
                '/img/btn_google_signin_dark_focus_web@2x.png',
                '/img/btn_google_signin_dark_pressed_web@2x.png',
                '/img/plugin-gdocs.png',
                '/img/plugin-gsheets.png',
                '/img/plugin-gslides.png',
                '/img/plugin-image.png',
                '/img/plugin-gcal.png',
                '/img/plugin-mailbird.png',
                '/img/plugin-gdrive.png',
                '/img/plugin-gmail.png',
                '/img/plugin-bear.png'
            ]);
        })).then(function ()
        {
            notifyClient('Installed');

            return self.skipWaiting();
        })
    );
});

var pathname = '/app/';

self.addEventListener('fetch', function (event)
{
    const urlObj = new URL(event.request.url);
    var url = event.request.url;

    if (urlObj.origin === location.origin)
    {
        if (urlObj.pathname === pathname)
        {
            url = url.replace(pathname, pathname + 'index-1523437126863.html');
        }

        event.respondWith(
            caches.match(url).then(function (response)
            {
                return response || fetch(event.request).then(function (response2)
                {
                    var response3 = response2.clone();
                    caches.open(CacheNameCommon).then(function (cache)
                    {
                        cache.put(event.request, response3.clone());
                    })
                    return response2;
                });
            })
        );
    }

});

self.addEventListener('activate', function (event)
{
    console.log('Activating new Service Worker');

    event.waitUntil(
        caches.keys().then(function (cacheNames)
        {
            return Promise.all(
                cacheNames.filter(function (cacheName)
                {
                    return cacheName !== CacheName && cacheName !== CacheNameCommon;
                }).map(function (cacheName)
                {
                    return caches.delete(cacheName);
                })
            );
        })
    );

    notifyClient('Activated');
});