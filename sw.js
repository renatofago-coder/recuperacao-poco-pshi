const CACHE = 'poco-v2';

const arquivos = [
 './',
 './index.html',
 './manifest.json',
 './icon-512.png'
];

self.addEventListener('install', e => {
 e.waitUntil(
   caches.open(CACHE)
     .then(cache => cache.addAll(arquivos))
 );
});

self.addEventListener('fetch', e => {
 e.respondWith(
   caches.match(e.request)
     .then(resp => resp || fetch(e.request))
 );
});
