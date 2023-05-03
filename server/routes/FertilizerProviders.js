const express = require("express");
const router = express.Router();
const Company = require("../schemas/FertilizerCompanySchema");
const User = require("../schemas/UsersSchema");

router.post("/addCompany", async (req, res) => {
  const { cname, phone, email, country, state, location, file } = req.body;
  if (!cname || !phone || !email || !country || !state || !location || !file) {
    return res.status(406).json({ message: "Not Acceptable !" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (!userExist) {
      return res.status(404).json({ message: "User not found!" });
    } else {
      const newCompany = new Company({
        cname: cname,
        phone: phone,
        email: email,
        country: country,
        state: state,
        location: location,
        file: file,
      });

      await newCompany.save();
      return res
        .status(201)
        .json({ message: "New Company added successfully!" });
    }
  } catch (error) {
    console.log("error");
  }
});

module.exports = router;
