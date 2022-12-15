import * as dotenv from "dotenv";
dotenv.config();

import mongoose, { connect } from "mongoose";

const uri: string = process.env.MONGO_URI!;
mongoose.set("strictQuery", false);
connect(uri);

export default mongoose;
