"use strict";

const version = 5;
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
self.addEventListener("fetch", onFetch);

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

function onFetch(e) {
  e.respondWith(router(e.request));
}

async function router(req) {
  var url = new URL(req.url);
  var reqURL = url.pathname;
  var cache = await caches.open(cacheName);

  // request for site's own URL?
  if (url.origin == location.origin) {
    // are we making an API request?
    if (/^\/api\/.+$/.test(reqURL)) {
      let fetchOptions = {
        credentials: "same-origin",
        cache: "no-store",
      };
      let res = await safeRequest(
        reqURL,
        req,
        fetchOptions,
        /*cacheResponse=*/ false,
        /*checkCacheFirst=*/ false,
        /*checkCacheLast=*/ true,
        /*useRequestDirectly=*/ true
      );
      if (res) {
        if (req.method == "GET") {
          await cache.put(reqURL, res.clone());
        }
        return res;
      }

      return notFoundResponse();
    }
    // are we requesting a page?
    else if (req.headers.get("Accept").includes("text/html")) {
      // login-aware requests?
      if (/^\/(?:login|logout|add-post)$/.test(reqURL)) {
        let res;

        if (reqURL == "/login") {
          if (isOnline) {
            let fetchOptions = {
              method: req.method,
              headers: req.headers,
              credentials: "same-origin",
              cache: "no-store",
              redirect: "manual",
            };
            res = await safeRequest(reqURL, req, fetchOptions);
            if (res) {
              if (res.type == "opaqueredirect") {
                return Response.redirect("/add-post", 307);
              }
              return res;
            }
            if (isLoggedIn) {
              return Response.redirect("/add-post", 307);
            }
            res = await cache.match("/login");
            if (res) {
              return res;
            }
            return Response.redirect("/", 307);
          } else if (isLoggedIn) {
            return Response.redirect("/add-post", 307);
          } else {
            res = await cache.match("/login");
            if (res) {
              return res;
            }
            return cache.match("/offline");
          }
        } else if (reqURL == "/logout") {
          if (isOnline) {
            let fetchOptions = {
              method: req.method,
              headers: req.headers,
              credentials: "same-origin",
              cache: "no-store",
              redirect: "manual",
            };
            res = await safeRequest(reqURL, req, fetchOptions);
            if (res) {
              if (res.type == "opaqueredirect") {
                return Response.redirect("/", 307);
              }
              return res;
            }
            if (isLoggedIn) {
              isLoggedIn = false;
              await sendMessage("force-logout");
              await delay(100);
            }
            return Response.redirect("/", 307);
          } else if (isLoggedIn) {
            isLoggedIn = false;
            await sendMessage("force-logout");
            await delay(100);
            return Response.redirect("/", 307);
          } else {
            return Response.redirect("/", 307);
          }
        } else if (reqURL == "/add-post") {
          if (isOnline) {
            let fetchOptions = {
              method: req.method,
              headers: req.headers,
              credentials: "same-origin",
              cache: "no-store",
            };
            res = await safeRequest(
              reqURL,
              req,
              fetchOptions,
              /*cacheResponse=*/ true
            );
            if (res) {
              return res;
            }
            res = await cache.match(isLoggedIn ? "/add-post" : "/login");
            if (res) {
              return res;
            }
            return Response.redirect("/", 307);
          } else if (isLoggedIn) {
            res = await cache.match("/add-post");
            if (res) {
              return res;
            }
            return cache.match("/offline");
          } else {
            res = await cache.match("/login");
            if (res) {
              return res;
            }
            return cache.match("/offline");
          }
        }
      }
      // otherwise, just use "network-and-cache"
      else {
        let fetchOptions = {
          method: req.method,
          headers: req.headers,
          cache: "no-store",
        };
        let res = await safeRequest(
          reqURL,
          req,
          fetchOptions,
          /*cacheResponse=*/ false,
          /*checkCacheFirst=*/ false,
          /*checkCacheLast=*/ true
        );
        if (res) {
          if (!res.headers.get("X-Not-Found")) {
            await cache.put(reqURL, res.clone());
          }
          return res;
        }

        // otherwise, return an offline-friendly page
        return cache.match("/offline");
      }
    }
    // all other files use "cache-first"
    else {
      let fetchOptions = {
        method: req.method,
        headers: req.headers,
        cache: "no-store",
      };
      let res = await safeRequest(
        reqURL,
        req,
        fetchOptions,
        /*cacheResponse=*/ true,
        /*checkCacheFirst=*/ true
      );
      if (res) {
        return res;
      }

      // otherwise, force a network-level 404 response
      return notFoundResponse();
    }
  }
}

async function safeRequest(
  reqURL,
  req,
  options,
  cacheResponse = false,
  checkCacheFirst = false,
  checkCacheLast = false,
  useRequestDirectly = false
) {
  var cache = await caches.open(cacheName);
  var res;

  if (checkCacheFirst) {
    res = await cache.match(reqURL);
    if (res) {
      return res;
    }
  }

  if (isOnline) {
    try {
      if (useRequestDirectly) {
        res = await fetch(req, options);
      } else {
        res = await fetch(req.url, options);
      }

      if (res && (res.ok || res.type == "opaqueredirect")) {
        if (cacheResponse) {
          await cache.put(reqURL, res.clone());
        }
        return res;
      }
    } catch (err) {}
  }

  if (checkCacheLast) {
    res = await cache.match(reqURL);
    if (res) {
      return res;
    }
  }
}

function notFoundResponse() {
  return new Response("", {
    status: 404,
    statusText: "Not Found",
  });
}

function delay(ms) {
  return new Promise(function c(res) {
    setTimeout(res, ms);
  });
}
