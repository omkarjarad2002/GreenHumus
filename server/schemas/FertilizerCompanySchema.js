const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const companySchema = new mongoose.Schema({
  cname: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  file: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

companySchema.methods.generateAuthToken = async function () {
  try {
    let generateToken = jwt.sign({ _id: this._id }, SECRETKEY);
    this.tokens = this.tokens.concat({ token: generateToken });
    await this.save();
    return generateToken;
  } catch (error) {
    console.log(error);
  }
};

const Company = mongoose.model("FERTILIZERCOMPANIES", companySchema);
module.exports = Company;
