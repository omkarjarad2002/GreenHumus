const mongoose = require("mongoose");

const fertilizerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  crops: {
    type: String,
    required: true,
  },
  availability: {
    type: String,
    required: true,
  },
  companyID: {
    type: mongoose.Schema.Types.ObjectId,
  },
  file: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Fertilizer = mongoose.model("FERTILIZERS", fertilizerSchema);
module.exports = Fertilizer;
