import DBConnection from "@/libs/DBConnection";
import mongoose, { Schema, Document, Model } from "mongoose";

export type IUser = {
  username: string;
  password: string;
  type: "USER" | "MANAGER" | "ADMIN";
  name: string;
  enabled: boolean;

  creator_id?: string;
  pix?: string;

  images?: string[];
  video?: string;
  city?: string;
  state?: string;
  value?: string;
  contact_email?: string;
}

const UserSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    type: { type: String, enum: ["USER", "MANAGER", "ADMIN"], required: true },
    name: { type: String, required: true },
    enabled: { type: Boolean, required: true },
    
    creator_id: { type: String, required: false },
    pix: { type: String, required: false },

    images: { type: [String], required: false },
    video: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    value: { type: String, required: false },
    contact_email: { type: String, required: false },
  },
  {
    timestamps: true,
    strict: "throw",
  }
);

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

const createUserModel = async (user: IUser) => {
    DBConnection();
    const userModel = new User(user);
    await userModel.save();
    return userModel;
}

const getUserModel = () : Model<IUser> => {
  DBConnection();
  return mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
}

export {getUserModel, createUserModel};
