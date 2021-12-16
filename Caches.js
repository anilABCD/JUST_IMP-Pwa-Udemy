if (window.caches) {

    // caches.open("test1");
    // caches.open("test2");

    // console.log(":: keys ::")
    // caches.keys().then(console.log)

    // console.log(":: has :: ")
    // caches.has("test2").then(console.log)


    // console.log(":: delete ::")
    // caches.delete("test1").then(console.log)


    caches.open("pwv1.1").then(cache => {

        //cache.add("/index.html");

        // cache.addAll(["/style.css", "/main.js"]);

        // cache.delete("/style.css");

        // cache.match("/index.html").then(res => {
        //     return res.text()
        // }).then(html => {
        //     console.log(html);
        // })


        // cache.put("/index.html", new Response("my own html 1"));
        // cache.match("/index.html").then(res => {
        //     return res.text()
        // }).then(html => {
        //     console.log(html);
        // })

        cache.keys().then(console.log)

        console.log("anil kumar")


    })

}