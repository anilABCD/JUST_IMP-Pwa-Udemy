if (navigator.serviceWorker) {

    function urlBase64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
            .replace(/-/g, '+')
            .replace(/_/g, '/');

        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);

        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    }



    navigator.serviceWorker.register("/sw8.js").then((registeration) => {

        let pubKey = "BI2yAKekFHgxyzZYigatfyQ6HvwDDV1GTCnsx02I3gs9VqcFOJQ4B8uWRQ1Jeh64rVOPCVhnQ_IIWKukuplHxog";

        registeration.pushManager.getSubscription()
            .then(sub => {
                if (sub)
                    return sub;

                let key = urlBase64ToUint8Array(pubKey);

                return registeration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: key
                })

            }).then(sub => {
                return sub.toJSON()
            }).then(console.log)
            .catch(console.log)
    }).catch(console.log)

}