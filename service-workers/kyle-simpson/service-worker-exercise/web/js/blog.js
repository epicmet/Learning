(function Blog() {
  "use strict";

  var offlineIcon;
  var isOnline = "onLine" in navigator ? navigator.onLine : true;
  var isLoggedIn = /isLoggedIn=1/.test(document.cookie.toString() || "");
  var usingSW = "serviceWorker" in navigator;
  var swRegisteration;
  var svcWorker;

  document.addEventListener("DOMContentLoaded", ready, false);

  initServiceWorker().catch(console.error);
  // **********************************

  function ready() {
    offlineIcon = document.getElementById("connectivity-status");

    if (!isOnline) {
      offlineIcon.classList.remove("hidden");
    }

    window.addEventListener("online", function online() {
      offlineIcon.classList.add("hidden");
      isOnline = true;
      sendStatusUpdate();
    });

    window.addEventListener("offline", function offline() {
      offlineIcon.classList.remove("hidden");
      isOnline = false;
      sendStatusUpdate();
    });
  }

  async function initServiceWorker() {
    swRegisteration = navigator.serviceWorker.register("/sw.js", {
      updateViaCache: "none",
    });

    svcWorker =
      swRegisteration.installing ||
      swRegisteration.waiting ||
      swRegisteration.active;

    sendStatusUpdate(svcWorker);

    navigator.serviceWorker.addEventListener(
      "controllerchange",
      function onController() {
        svcWorker = navigator.serviceWorker.controller;
        sendStatusUpdate(svcWorker);
      }
    );

    navigator.serviceWorker.addEventListener("message", onSWMessage);
  }

  function onSWMessage(e) {
    const { data } = e;
    if (data.requestStatusUpdate) {
      console.log(
        `Received status update request from service worker. Responding ...`
      );
      sendStatusUpdate(e.ports && e.ports[0]);
    }
  }

  function sendStatusUpdate(target) {
    sendSWMessage({ statusUpdate: { isOnline, isLoggedIn } }, target);
  }

  function sendSWMessage(msg, target) {
    if (target) {
      target.postMessage(msg);
    } else if (svcWorker) {
      svcWorker.postMessage(msg);
    } else {
      navigator.serviceWorker.controller.postMessage(msg);
    }
  }
})();
