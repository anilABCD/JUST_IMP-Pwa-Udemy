self.addEventListener("install", (e) => {
  self.skipWaiting();

  e.waitUntil(
    new Promise((resolve, reject) => {
      setTimeout(resolve, 5000);
    })
  );
});

self.addEventListener("activate", (e) => {
  console.log("SW3 Active");
});