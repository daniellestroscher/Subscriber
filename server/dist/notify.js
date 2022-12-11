import { messaging } from './firebase.js';
export var sendReminderToClient = function (token, data) {
    // Send a message to the devices corresponding to the provided token
    messaging
        .send({ token: token, data: data })
        .then(function (response) {
        console.log(response);
        // console.log('[notify.js] Notifications response:',`${response.responses}`);
    })
        .catch(function (error) {
        console.log('Error sending message:', error);
    });
};
