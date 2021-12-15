if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("sw.js", { scope: "/posts/" })
    .then((registration) => {
      console.log("sw registered");
    })
    .catch(console.log);
}

// fetch("camera_feed.html")
//   .then((res) => {
//     return res.text();
//   })
//   .then((html) => {
//     document.getElementById("camera").innerHTML = html;
//   });
s;
