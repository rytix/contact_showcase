import DBConnection from "@/libs/DBConnection";
import mongoose, { Schema, Document, Model } from "mongoose";

export type ISell = {
  id_user: string;
  name: string;
  city: string;
  state: string;
  contact: string;
  mensagem: string;
  timestamp: Date;
  sended: boolean;
};

const SellSchema = new Schema<ISell>(
  {
    id_user: { type: String, required: true },
    name: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    contact: { type: String, required: true },
    mensagem: { type: String, required: true },
    timestamp: { type: Date, required: true },
    sended: { type: Boolean, required: true },
  },
  {
    timestamps: true,
    strict: "throw",
  }
);

const Sell: Model<ISell> = mongoose.models.Sell || mongoose.model<ISell>("Sell", SellSchema);

const createSellModel = async (sell: ISell) => {
  DBConnection();
  const sellModel = new Sell(sell);
  await sellModel.save();
  return sellModel;
};

const getSellModel = (): Model<ISell> => {
  DBConnection();
  return mongoose.models.Sell || mongoose.model<ISell>("Sell", SellSchema);
};

export { getSellModel, createSellModel };
