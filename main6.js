if (window.Notification) {

    function showNotification() {
        //console.log("A new Notification")

        let notificationOpt = {
            body: "Your energy is on. ",
            icon: "https://image.similarpng.com/very-thumbnail/2020/12/Illustration-of-Google-icon-on-transparent-background-PNG.png"
        }

        let n = new Notification("Lets play", notificationOpt)

        n.onclick = () => {
            console.log("Notification Clicked")
        }
    }

    // granted
    // denied 
    // default

    if (Notification.permission === "granted") {
        showNotification();
    } else if (Notification.permission !== "denied") {

        Notification.requestPermission((permission) => {

            if (permission === "granted") {
                showNotification();
            }
        })
    }
}