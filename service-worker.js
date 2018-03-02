var CacheName = 'moodo-cache-1519985432500';

self.addEventListener('install', function (e)
{
    self.skipWaiting();
    e.waitUntil(
        caches.open(CacheName).then(function (cache)
        {
            return cache.addAll([
                '/app/',
                '/app/index-1519985432500.html',
                '/favicon.ico',
                '/js/main-min-1519985432500.js',
                '/js/preload-min-1519985432500.js',
                '/js/rollbar-min.js',
                '/css/app-min-1519985432500.css',
                '/css/fonts/fonticons-1519985432500.woff',
                '/css/fonts/fonticons-1519985432500.ttf',
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
        })
    );
});

function endsWith(str, val)
{
    return str.indexOf(val, str.length - val.length) !== -1;
}

var baseUrl = 'moo.do/app/';

self.addEventListener('fetch', function (event)
{
    var url = event.request.url;

    if (url.endsWith(baseUrl) || url.indexOf(baseUrl + '#') > 0)
    {
        console.log('replacing');
        url = url.replace(baseUrl, baseUrl + 'index-1519985432500.html');
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
            )
    );
});

self.addEventListener('activate', function (event)
{
    event.waitUntil(
        caches.keys().then(function (cacheNames)
        {
            return Promise.all(
                cacheNames.filter(function (cacheName)
                {
                    console.log('delete', cacheName, cacheName !== CacheName);
                    return cacheName !== CacheName;
                    // Return true if you want to remove this cache,
                    // but remember that caches are shared across
                    // the whole origin
                }).map(function (cacheName)
                {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});