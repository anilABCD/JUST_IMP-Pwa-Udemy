self.addEventListener("message", e => {



    self.clients.matchAll().then((clients) => {

        clients.forEach((client) => {

            if (e.source.id == client.id) { // for self private messages ( current tab/window )
                client.postMessage("private");
            }

            if (e.source.id != client.id) { // for all other clients and not current client ( window / tab )
                client.postMessage("not self");
            }

            client.postMessage("all"); // broadcast ... to all .
        })
    })
})