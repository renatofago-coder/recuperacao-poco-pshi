const CACHE = 'poco-v1';

const arquivos = [
  './',
  './Calculadora_Recuperacao_Poco_Saneago.html',
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