import { Request, Response } from "express";
import db from "../models/user-token-model.js";

export async function putToken(req: Request, res: Response) {
  try {
    const tokenObj = req.body;
    console.log(tokenObj);

    const query = { userId: tokenObj.userId };
    const userToken = await db.findOneAndUpdate(
      query,
      { token: tokenObj.token },
      { upsert: true }
    );
    res.send(userToken);
    res.status(201);
  } catch (err) {
    console.log("ERROR in USER_TOKEN controller PUT from db", err);
    res.status(500);
  }
}
