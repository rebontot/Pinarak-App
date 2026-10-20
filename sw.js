// Service worker PinaraK: menyimpan cangkang app agar terbuka seketika; berkas disegarkan di latar. Permintaan data tidak pernah disimpan.
var C = 'pinarak-321eab2b', F = ['./', 'index.html', 'config.js', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'logo-320.webp', 'apple-touch-icon.png'];
self.addEventListener('install', function (e) { e.waitUntil(caches.open(C).then(function (c) { return Promise.all(F.map(function (u) { return c.add(new Request(u, { cache: 'reload' })); })); })); });
self.addEventListener('message', function (e) { if (e.data === 'SKIP_WAITING') self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(caches.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k !== C; }).map(function (k) { return caches.delete(k); })); }).then(function () { return self.clients.claim(); })); });
self.addEventListener('fetch', function (e) {
  var u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  e.respondWith(caches.match(e.request).then(function (m) {
    var net = fetch(e.request).then(function (r) { if (r && r.ok) { var cp = r.clone(); caches.open(C).then(function (c) { c.put(e.request, cp); }); } return r; }).catch(function () { return m || caches.match('index.html'); });
    return m || net;
  }));
});
