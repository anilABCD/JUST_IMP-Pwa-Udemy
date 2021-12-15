if (navigator.serviceWorker) {

    navigator.serviceWorker.register("/sw4.js").then((registration) => {

        if (registration.active)
            registration.active.postMessage("respond to this")

    })

    navigator.serviceWorker.addEventListener("message", e => {
        console.log(e.data)
    })
}