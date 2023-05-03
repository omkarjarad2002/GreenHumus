const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../schemas/UsersSchema");
require("../db/conn");

router.post("/register", async (req, res) => {
  const { fname, lname, phone, gender, email, password, cpassword } = req.body;
  if (
    !fname ||
    !lname ||
    !phone ||
    !gender ||
    !email ||
    !password ||
    !cpassword
  ) {
    return res.status(404).json({ message: "Unexpcted error occured !" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ message: "User already exists !" });
    }

    const user = new User({
      fname: fname,
      lname: lname,
      phone: phone,
      gender: gender,
      email: email,
      password: password,
      cpassword: cpassword,
    });

    await user.save();
    return res.status(201).json({ message: "User registered successfully !!" });
  } catch (error) {
    console.log(error);
  }
});

router.get("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(404).json({ message: "Unexpcted error occured !" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      const isMatch = await bcrypt.hash(password, userExist.password);

      const token = await userExist.generateAuthToken();
      res.cookie("jwttoken", token, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        httpOnly: true,
      });

      if (isMatch) {
        return res.status(201).json({ userExist });
      }
    } else {
      return res.status(404).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
