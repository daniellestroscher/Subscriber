
import Express from 'express';
const router = Express.Router();

import { getAllSubs, postOneSub, editSub, deleteSub } from './controllers/sub-controller.js';
import { putToken } from './controllers/user-token-controller.js';
import { postSubNotification } from './controllers/notify-controller.js';
//routes
router.get('/subscriptions', getAllSubs);
router.post('/subscriptions', postOneSub);
router.put('/subscriptions', editSub);
router.delete('/subscriptions', deleteSub)
router.put('/user-token', putToken);
router.post('/notify', postSubNotification)

router.get('/*', (_, res) => {
  res.status(404).send('Requested resource not found\n');
});

export default router;