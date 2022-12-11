import Express, { json } from 'express';
const app = Express();

import cors from 'cors';
import router from './router.js';

app.use(cors());
app.use(json());
app.use(router);

export default app