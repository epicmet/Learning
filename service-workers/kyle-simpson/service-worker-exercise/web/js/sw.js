"use strict";

const version = 4;
var isOnline = true;
var isLoggedIn = false;
var cacheName = `ramblings-${version}`;

var urlToCache = {
  loggedOut: [
    "/",
    "/about",
    "/contact",
    "/404",
    "/login",
    "/offline",
    "/css/style.css",
    "/js/blog.js",
    "/js/home.js",
    "/js/login.js",
    "/js/add-post.js",
    "/images/logo.gif",
    "/images/offline.png",
  ],
};

self.addEventListener("install", onInstall);
self.addEventListener("activate", onActivate);
self.addEventListener("message", onMessage);

main().catch(console.error);

// *****************

async function main() {
  await sendMessage({ requestStatusUpdate: true });
  await cacheLoggedOutFiles();
}

async function onInstall() {
  console.log(`Service worker (${version}), is installing ...`);
  self.skipWaiting();
}

async function onActivate(e) {
  e.waitUntil(handleActivation());
}

async function handleActivation() {
  await clearCaches();
  await cacheLoggedOutFiles(true);
  await clients.claim();
  console.log(`Service worker (${version}), is activating ...`);
}

async function sendMessage(msg) {
  const allClients = await clients.matchAll({ includeUncontrolled: true });
  return Promise.all(
    allClients.map((client) => {
      const chan = new MessageChannel();
      chan.port1.onmessage = onMessage;
      return client.postMessage(msg, [chan.port2]);
    })
  );
}

function onMessage({ data }) {
  if (data.statusUpdate) {
    ({ isOnline, isLoggedIn } = data.statusUpdate);
    console.log(
      `Service worker (v${version}) status: isOnline: ${isOnline}, isLoggedIn: ${isLoggedIn}`
    );
  }
}

async function cacheLoggedOutFiles(forceReload = false) {
  const cache = await caches.open(cacheName);

  return Promise.all(
    urlToCache.loggedOut.map(async (url) => {
      let res;

      if (!forceReload) {
        res = cache.match(url);
        if (res) return res;
      }

      res = await fetch(url, {
        method: "GET",
        credentials: "omit",
        cache: "no-cache",
      });

      if (res.ok) {
        await cache.put(url, res);
      }
    })
  );
}

async function clearCaches() {
  const cacheNames = await caches.keys();
  const oldCacheNames = cacheNames.filter((cn) => {
    if (/^ramblings-\d+$/.test(cn)) {
      let [, cacheVersion] = cn.match(/^ramblings-(\d+)$/);
      cacheVersion =
        cacheVersion !== null ? Number(cacheVersion) : cacheVersion;
      return cacheVersion > 0 && cacheVersion !== version;
    }
  });

  return Promise.all(
    oldCacheNames.map((cn) => {
      return caches.delete(cn);
    })
  );
}
