'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "410332fc9ca0da477411a3fafc1cdab0",
"version.json": "f1f2ee74649707eed8e0ec2b997932f3",
"index.html": "47bfbfd374e1862dbfef2cd2d6b72d46",
"/": "47bfbfd374e1862dbfef2cd2d6b72d46",
"main.dart.js": "6e700df61876204a245a19fb777c2bff",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fb845c8417ebecf046b6c6940f055fc0",
"assets/AssetManifest.json": "9fe87234c0e4fb6c503a67c24140120a",
"assets/NOTICES": "0b73dcd712bfff5fbf2565d3f83121c6",
"assets/FontManifest.json": "d9582456df92848811aedfa1842e6998",
"assets/AssetManifest.bin.json": "eac19cc1a1d0822527f869e89dcec750",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/quill_native_bridge_linux/assets/xclip": "d37b0dbbc8341839cde83d351f96279e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b756febf926a36841b0ff4716a0f7bcf",
"assets/fonts/MaterialIcons-Regular.otf": "eb0c6bcda21498f0c41277960f7cd86c",
"assets/assets/textLogo.png": "1662042bfd31c16555db773b462aba45",
"assets/assets/icons/socialFollowRevised.png": "719129bec1a05ee47957588907d7e372",
"assets/assets/icons/empty-image.png": "8895a2a63155c74c44e7b993512b6f65",
"assets/assets/icons/imageCard.png": "219c6b8412184848bed4350bb42a00ef",
"assets/assets/icons/imageCaption.png": "b2a44c2b7ddd739013e64112a360b445",
"assets/assets/icons/divider.png": "982a9a0c9db5785da7dbd84f658d01fc",
"assets/assets/icons/footer.png": "7fb65f9de462b8bd8736c1baa2f4ba94",
"assets/assets/icons/boxedText.png": "5273c6c379dc567e7645124f8de8e2ea",
"assets/assets/icons/imageGroup.png": "a31b923eb649ff12f211f1fed99ccd2f",
"assets/assets/icons/text.png": "9e511b40ddc4ea3090e232976a53a844",
"assets/assets/icons/image.png": "32a2ee37f16e8afe6105f9ef076c418e",
"assets/assets/icons/button.png": "398ed8f6708e51e54ba270b94109c927",
"assets/assets/iconTextDescLogo.png": "7167e0b14f2e36354aab304e769ce0e0",
"assets/assets/iconLogo.png": "31852bb4c9c603d74860139885cf1d70",
"assets/assets/iconTextLogo.png": "7f51729943cb5e32a7881b58caac5de9",
"assets/assets/fonts/georgia.ttf": "ca8446d58eb8315c7a458caf81c6ed86",
"assets/assets/fonts/helvetica-rounded-bold-5871d05ead8de.otf": "042c8121eea32106ffd2713a2e583c1b",
"assets/assets/fonts/baskerville%2520bold%2520bt.ttf": "5bce57e25fd1ea1f7423ab1e070ec23a",
"assets/assets/fonts/comicz.ttf": "8f87bcf26c27af0830c28c30a35bb211",
"assets/assets/fonts/Luminari-Regular.ttf": "9ee22f7328ebb6a0058e2312b788704a",
"assets/assets/fonts/Gill%2520Sans%2520Bold%2520Italic.otf": "a547603123a5fe1ffd8c010d9c582ca5",
"assets/assets/fonts/helvetica-light-587ebe5a59211.ttf": "9a8c18bd1dbe8508bc2525be7e07d0ff",
"assets/assets/fonts/BrushScriptStd.otf": "23b310a04ce09971a5dd194ffdaa54ef",
"assets/assets/fonts/COMIC.ttf": "69d77ab5cba970d7934a5f5bcd8fdd11",
"assets/assets/fonts/trebuc.ttf": "54e1c73dfe6eedcd3ba28ea086cdaa53",
"assets/assets/fonts/BRUSHSCI.ttf": "240a8744edc221dfd7467d2d17105fa0",
"assets/assets/fonts/Helvetica.ttf": "1b580d980532792578c54897ca387e2c",
"assets/assets/fonts/design.graffiti.comicsansms.ttf": "37250a4dc043f426e481861fb7926b92",
"assets/assets/fonts/GillSans%2520Condensed%2520Bold.otf": "4cfebdf58747d2328ecccc34202c6e15",
"assets/assets/fonts/Impacted.ttf": "a1bd4b96dfb41032e27b3876420af966",
"assets/assets/fonts/impact.ttf": "8fc622c3a2e2d992ec059cca61e3dfc0",
"assets/assets/fonts/design.graffiti.comicsansmsgras.ttf": "68411bba0cb063dfad293103b79244ee",
"assets/assets/fonts/arial.ttf": "fa3228aadde0db988e1822c2f736c131",
"assets/assets/fonts/BaskervilleBoldBT.ttf": "5bce57e25fd1ea1f7423ab1e070ec23a",
"assets/assets/fonts/Monaco.ttf": "8dbba50b8796bd02e1061ca5e4c42f90",
"assets/assets/fonts/palr45w.ttf": "6b9e4fabe8b41851b26b44e7bafd6fc5",
"assets/assets/fonts/Helvetica-Bold.ttf": "d13db1fed3945c3b8c3293bfcfadb32f",
"assets/assets/fonts/Verdanai.ttf": "69f43e2caebe20db7eac47989b2086fe",
"assets/assets/fonts/BradleyHandITCTT-Bold.ttf": "065c12df22ed6b0005cd729e7cb6a9a3",
"assets/assets/fonts/tahoma.ttf": "f2e23885f804603feafbea12f793dee3",
"assets/assets/fonts/Courier.ttf": "74ef3d95ef6374304ba29a95d14f9c85",
"assets/assets/fonts/Gill%2520Sans.otf": "2e40a82b6659fa86f1537a28f3569200",
"assets/assets/fonts/georgiab.ttf": "27836f0c46bfb03982e86c4ed5c8cc45",
"assets/assets/fonts/baskvl.ttf": "f6b4f67a53fb264bf52e04ac95e86cf2",
"assets/assets/fonts/Gill%2520Sans%2520Heavy.otf": "46b90bd0b6411f6766fb070463cf7a4f",
"assets/assets/fonts/arial_black.ttf": "ec8b4d9c0e68604dfbeda73d0213c82e",
"assets/assets/fonts/Bradleys%2520Pen.ttf": "5eae4603f252d4374c54b9f485c5e83c",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
