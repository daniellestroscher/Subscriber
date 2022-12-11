/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
// handles notifications that reach the app when its not in the foreground
// In this file because it does not have access to the WINDOW OBJECT
messaging.onBackgroundMessage(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: payload.data.body,
    icon: '../icon1058x1058.png',
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});

// self.addEventListener('notificationclick', event => {
//   console.log(event)
//   return event;
// });

//TRYING TO GET SCHEDULED PUSH TO WORK//
// self.addEventListener('push', (event) => {
//   const payload = event.data?.text() ?? 'no payload';
//   const notificationTitle = payload.title;
//   const notificationOptions = {
//     body: payload.body,
//     icon: '../icon1058x1058.png',
//   };
//   console.log('got message from listener in SW!!!', payload);
//   event.waitUntil(self.registration.showNotification(notificationTitle, notificationOptions));
// });