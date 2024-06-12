import { MONGO_CONN_URL } from "@/utlis/envConfig";
import mongoose from "mongoose";

export const connectMongoDb = () => {
  mongoose
    .connect(MONGO_CONN_URL!)
    .then(() => {
      console.log("connection to mongodb success");
    })
    .catch((err) => {
      console.log(`connection to mongodb failed: ${JSON.stringify(err)}`);
    });
};
