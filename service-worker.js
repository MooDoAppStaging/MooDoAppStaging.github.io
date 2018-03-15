var CacheName = 'moodo-cache-1521087360995',
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
                '/app/index-1521087360995.html',
                '/js/main-min-1521087360995.js',
                '/js/preload-min-1521087360995.js',
                '/css/app-min-1521087360995.css',
                '/css/fonts/fonticons-1521087360995.woff',
                '/css/fonts/fonticons-1521087360995.ttf'
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
                '/img/plugin-bear.png',
                '/data/about.json',
                '/data/beta-example.json',
                '/data/blog-drive.json',
                '/data/blog-proj-man.json',
                '/data/blog-scrum.json',
                '/data/blog-travel.json',
                '/data/demo.json',
                '/data/landing-email.json',
                '/data/landing-old-intro.json',
                '/data/landing-style.json',
                '/data/landing-top.json',
                '/data/press.json'
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
            url = url.replace(pathname, pathname + 'index-1521087360995.html');
        }

        event.respondWith(
            caches.match(url)
                .then(function (response)
                {
                    // Cache hit - return response
                    if (response)
                    {
                        return response;
                    }
                    return fetch(event.request);
                }
                ).catch(function () { })
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
                    // console.log('delete', cacheName, cacheName !== CacheName && cacheName !== CacheNameCommon);
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