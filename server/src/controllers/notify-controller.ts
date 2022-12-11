import { Request, Response } from 'express';
import tokenDb from '../models/user-token-model.js';
import { sendReminderToClient } from '../notify.js';

export async function postSubNotification(req:Request, res:Response) {
  try {
    const notifyInfo = req.body;

    const userToken = notifyInfo.token
    const messageData = {
      title: notifyInfo.title,
      body:`you are about to be billed $${notifyInfo.price} from ${notifyInfo.title}!`
    }
    const delay = notifyInfo.delay; //15; //will send the delay time from the client side!
    console.log(delay);
    console.log(userToken);

    setTimeout(async () => {
      sendReminderToClient(userToken, messageData);
    }, delay);

    res.sendStatus(201);


  } catch (err) {
    console.log('ERROR in NOTIFY controller POST from db', err);
    res.status(500);
  }
}