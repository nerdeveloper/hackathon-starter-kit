const CACHE_NAME = "pwabuilder-adv-cache";
const {INSTALL, FETCH} = {
    INSTALL: "install",
    FETCH: "fetch",
};
const URLS_TO_CACHE = [
    "./",
    "./dist/style.css",
    "./dist/App.bundle.js",
    "./sw.js",
    "./pwabuilder.js",
    "./manifest.json",
    "https://buttons.github.io/buttons.js",
];
const preLoad = async () => {
    console.log("Installing web app");
    try {
        const cache = await caches.open(CACHE_NAME);
        const cachedUrls = cache.addAll(URLS_TO_CACHE);
        return cachedUrls;
    } catch (error) {
        console.error(error);
    }
};

self.addEventListener(INSTALL, event => {
    self.skipWaiting();
    event.waitUntil(preLoad());
    console.log("installed latest version");
});

const makeNetWorkRequest = request =>
    new Promise(async (resolve, reject) => {
        try {
            const networkFetchResponse = await fetch(request);
            if (networkFetchResponse.status !== 404) {
                resolve(networkFetchResponse);
            } else {
                throw new Error("no resource found");
            }
        } catch (error) {
            console.error(error);
            reject(error);
        }
    });
const returnFromCache = async request => {
    try {
        const cache = await caches.open(CACHE_NAME);
        const cacheItemMatchingNetworkRequest = await cache.match(request);
        if (!cacheItemMatchingNetworkRequest || cacheItemMatchingNetworkRequest.status == 404) {
            return cache.match("/");
        } else {
            return cacheItemMatchingNetworkRequest;
        }
    } catch (error) {
        console.error(error);
    }
};
self.addEventListener(FETCH, event => {
    event.respondWith(
        makeNetWorkRequest(event.request).catch(() => {
            return returnFromCache(event.request);
        }),
    );
});

// This is an event that can be fired from your page to tell the SW to update the offline page
self.addEventListener("refreshOffline", function() {
    const offlinePageRequest = new Request(offlineFallbackPage);

    return fetch(offlineFallbackPage).then(function(response) {
        return caches.open(CACHE).then(function(cache) {
            console.log("[PWA Builder] Offline page updated from refreshOffline event: " + response.url);
            return cache.put(offlinePageRequest, response);
        });
    });
});
