if (navigator.serviceWorker) {
    navigator.serviceWorker.register("/sw3.js").then(function (registration) {

        registration.onupdatefound = () => {

            let sW = registration.installing;


            if (confirm("App update is available. Do you want to update now?")) {
                sW.postMessage("update_self")

            }
        }



    })
}