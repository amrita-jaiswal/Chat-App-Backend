const mongoose = require("mongoose");

const databaseConnect = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/messenger", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Mongodb Database Connected");
    })
    .catch((error) => {
      console.log(error);
    });
};
module.exports = databaseConnect;
