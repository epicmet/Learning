"use strict";

const version = 2;
var isOnline = true;
var isLoggedIn = false;

self.addEventListener("install", onInstall);
self.addEventListener("activate", onActivate);
self.addEventListener("message", onMessage);

main().catch(console.error);

// ******************

async function main() {
  await sendMessage({ requestStatusUpdate: true });
}

async function onInstall() {
  console.log(`Service worker (${version}), is installing ...`);
  self.skipWaiting();
}

async function onActivate(e) {
  e.waitUntil(handleActivation());
}

async function handleActivation() {
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
