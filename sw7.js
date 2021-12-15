self.addEventListener("push", (e) => {

    let headersOpt = {
        body: "som extra information",
        icon: "https://image.similarpng.com/very-thumbnail/2020/12/Illustration-of-Google-icon-on-transparent-background-PNG.png"
    }

    let n = self.registration.showNotification("A notification from the SW.", headersOpt);

    e.waitUntil(n);

})