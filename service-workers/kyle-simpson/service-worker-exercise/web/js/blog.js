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
    });

    window.addEventListener("offline", function offline() {
      offlineIcon.classList.remove("hidden");
      isOnline = false;
    });
  }

  async function initServiceWorker() {
    swRegisteration = navigator.serviceWorker.register("/sw.js", {
      updateViaCache: false,
    });

    svcWorker =
      swRegisteration.installing ||
      swRegisteration.waiting ||
      swRegisteration.active;

    navigator.serviceWorker.addEventListener(
      "controllerchange",
      function onController() {
        svcWorker = navigator.serviceWorker.controller;
      }
    );
  }
})();
