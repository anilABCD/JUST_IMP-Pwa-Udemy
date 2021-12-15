// console.log("My Service Worker Registered");

self.addEventListener("install", (e) => {
  //   let installPromises = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       console.log("install waiting promises");
  //       return resolve();
  //     }, 3000);
  //   });

  //   e.waitUntil(installPromises);

  self.skipWaiting();

  console.log("My SW: : install event");
});

self.addEventListener("activate", (e) => {
  //   let activatePromises = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       console.log("activate waiting promises");
  //       return resolve();
  //     }, 3000);
  //   });

  //   e.waitUntil(activatePromises);

  console.log("My SW5: : activate event");
});

self.addEventListener("fetch", (e) => {
  //   if (e.request.url.endsWith("style.css")) {
  //     e.respondWith(fetch("/style2.css"));

  //     console.log("fetch event : " + e.request.url);
  //   }

  console.log("fetch event : " + e.request.url);

  // if (e.request.url.endsWith("/greet")) {
  //   // e.respondWith(fetch("index.html"));
  //   console.log("fetch event : " + e.request.url);
  //   let headers = new Headers({ "content-type": "text/html" });

  //   let customRes = new Response("<h1>greet hello world</h1>", {
  //     headers: headers,
  //   });

  //   e.respondWith(customRes);
  // }

  // if (e.request.url.endsWith("camera_feed.html")) {
  //   e.respondWith(
  //     fetch(e.request).then((res) => {
  //       if (res.ok) {
  //         return res;
  //       }

  //       return new Response("Camera feed not available... ");
  //     })
  //   );
  // }
});

///////////////////////////////////////////

// self.addEventListener("activate", (e) => {
//   console.log("SW1 Active");
// });

// self.addEventListener("fetch", (e) => {
//   console.log("fetch event : " + e.request.url);
// });
