import express from 'express';
var router = express.Router();
import { getAllSubs, postOneSub, editSub, deleteSub } from './controllers/sub-controller';
import { putToken } from './controllers/user-token-controller';
import { postSubNotification } from './controllers/notify-controller';
//routes
router.get('/subscriptions', getAllSubs);
router.post('/subscriptions', postOneSub);
router.put('/subscriptions', editSub);
router.delete('/subscriptions', deleteSub);
router.put('/user-token', putToken);
router.post('/notify', postSubNotification);
router.get('/*', function (_, res) {
    res.status(404).send('Requested resource not found\n');
});
export default router;