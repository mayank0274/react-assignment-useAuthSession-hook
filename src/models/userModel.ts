import mongoose, { Model } from "mongoose";
import { User } from "@/types/userTypes";

const userSchema = new mongoose.Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const userModel: Model<User> =
  mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
