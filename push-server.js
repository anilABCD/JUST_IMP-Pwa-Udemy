const webpush = require("web-push");

const vapid = require("./vapid.json");

webpush.setVapidDetails(
    'mailto:abc@abc.com',
    vapid.publicKey,
    vapid.privateKey
);

const pushSubscription = {
    endpoint: "https://fcm.googleapis.com/fcm/send/etEzku5dLmU:APA91bGLumH1pPQnei74KyiZYMkHIclja-ug9FvzjW9ZrABvTUjdB6nqss6oGvq0IwISJFIx7LyQSJi0ZvNajS7UAU0IpV4AREOjPSdoWOvThLbjLAp4EwaagRPyX9nV-uD0xBouTvzX",
    keys: {
        auth: "3LMJ8jh708k8FmeU6osTlQ",
        p256dh: "BP3cikG1NnByIir0Jj9_3d7vYinjexxQG_dzPYWicokMD1AJ7hLw2ArPgTxSk7a2JbbjBge7tUkdkLalQf16m6Y"
    }
}

webpush.sendNotification(pushSubscription, "A notification from th epush server");

console.log("Push sent to client");