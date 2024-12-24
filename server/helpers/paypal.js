const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "Ae4-6545-6545-6545-6545",
  client_secret: "E4-6545-6545-6545-6545",
});

module.exports = paypal;
