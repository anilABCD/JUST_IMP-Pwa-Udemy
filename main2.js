if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("/sw2.js").then(function (registration) {


      registration.onupdatefound = () => {
        console.log("New SW Found");
        let newSW = registration.installing;

        newSW.onstatechange = () => {
          console.log(newSW.state);
        }

      };
      console.log(registration);
      console.log("new ");
    })
    .catch(console.log);

}