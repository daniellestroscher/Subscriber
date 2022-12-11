import admin from 'firebase-admin';
admin.initializeApp({
    credential: admin.credential.cert(process.env.GOOGLE_APPLICATION_CREDENTIALS),
    databaseURL: process.env.MONGO_URI_CLOUD_ATLAS
});
export var messaging = admin.messaging();
