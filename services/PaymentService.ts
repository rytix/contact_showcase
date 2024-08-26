import { createSellModel, getSellModel } from "@/models/Sell";
import { now } from "mongoose";

const createNewPayment = ({
  cpf,
  message,
  userId,
}: {
  cpf: string;
  userId: string;
  message: string;
}) => {
  const options = {
    method: "POST",
    headers: {
      accept: "*/*",
      Authorization: "Bearer <token>",
      "content-type": "application/json",
    },
  };

  fetch("https://sandbox.api.pagseguro.com/orders", options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      createSellModel({
        city: "",
        contact: "",
        cpf: cpf,
        userId: userId,
        message: message,
        name: "",
        paymentId: response.charge.id,
        sended: false,
        state: "",
        timestamp: now(),
      });
    })
    .catch((err) => console.error(err));
};

const refreshPaymentInformation = (id: string) => {
  const options = {
    method: "GET",
    headers: { accept: "*/*", Authorization: "Bearer <token>" },
  };

  fetch("https://sandbox.api.pagseguro.com/charges/charge_id", options)
    .then((response) => response.json())
    .then((response) => {
      if (response.status == "?") {
        getSellModel()
          .findOne({ paymentId: id })
          .exec()
          .then((model) => {
            if (model) {
              model.sended = true;
              model.save();
              //Send e-mail
            }
          });
      }
    })
    .catch((err) => console.error(err));
};
