import { messaging } from './firebase.js'

export const sendReminderToClient = (token, data) => {
  // Send a message to the devices corresponding to the provided token
  messaging
    .send({ token, data })
    .then(response => {
      console.log(response)
      // console.log('[notify.js] Notifications response:',`${response.responses}`);
    })
    .catch(error => {
      console.log('Error sending message:', error);
    });
};
