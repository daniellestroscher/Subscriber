import * as dotenv from 'dotenv';
dotenv.config();

import mongoose, { connect } from 'mongoose';

const uri:string = process.env.MONGO_URI!;

connect(uri);

export default mongoose;