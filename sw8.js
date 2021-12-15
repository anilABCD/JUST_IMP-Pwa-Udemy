self.addEventListener("push", function (event) {
    console.log("[Service Worker] Push Received.", event.data.text());
    var options = {
        body: event.data.text()
    };
    event.waitUntil(self.registration.showNotification("Hello world!", options));
});