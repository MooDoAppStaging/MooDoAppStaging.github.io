self.addEventListener('install', function (e)
{
    self.skipWaiting();
    e.waitUntil(
        caches.open('moodo-v1').then(function (cache)
        {
            return cache.addAll([
                '/app/',
                '/favicon.ico',
                '/js/main-min-1519978665085.js',
                '/js/preload-min-1519978665085.js',
                '/js/rollbar-min.js',
                '/css/app-min-1519978665085.css',
                '/css/fonts/fonticons-1519978665085.woff',
                '/css/fonts/fonticons-1519978665085.ttf',
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

self.addEventListener('fetch', function (event)
{
    event.respondWith(
        caches.match(event.request)
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