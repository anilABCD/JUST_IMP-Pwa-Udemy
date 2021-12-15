self.addEventListener("message", e => {

    console.log(e.data)
    console.log("s11")

    if (e.data == "update_self") {
        console.log("Service Worker Updating...");
        self.skipWaiting();
    }

})