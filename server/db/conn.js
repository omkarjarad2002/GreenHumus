const mongoose = require("mongoose");

const connection = async (req, res) => {
  mongoose
    .connect(DB)
    .then(() => {
      console.log("Connection successful");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = { connection };
