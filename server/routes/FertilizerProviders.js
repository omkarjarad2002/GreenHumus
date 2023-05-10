const express = require("express");
const router = express.Router();
const Company = require("../schemas/FertilizerCompanySchema");
const User = require("../schemas/UsersSchema");

router.post("/addCompany", async (req, res) => {
  console.log(req.body);
  const { cname, phone, cemail, country, state, location, file } = req.body;
  if (!cname || !phone || !cemail || !country || !state || !location || !file) {
    return res.status(406).json({ message: "Not Acceptable !" });
  }

  try {
    const userExist = await User.findOne({ email: cemail });
    console.log(userExist._id);
    const companyExist = await Company.findOne({ email: cemail });

    if (!userExist) {
      return res.status(404).json({ message: "User not found!" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      { _id: userExist._id },
      {
        $set: {
          fname: userExist.fname,
          lname: userExist.lname,
          phone: userExist.phone,
          email: userExist.email,
          isadmin: true,
        },
      }
    );
    console.log("updatedUser", updatedUser);

    await updatedUser.save();

    if (companyExist) {
      return res.status(404).json({ message: "Company already exist!" });
    } else {
      const newCompany = new Company({
        cname: cname,
        phone: phone,
        email: cemail,
        country: country,
        state: state,
        location: location,
        file: file,
        userID: userExist._id,
        isadmin: true,
      });
      await newCompany.save();
      console.log(newCompany);
      return res.status(201).json({ message: newCompany });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/getUserCompany/:id", async (req, res) => {
  try {
    const company = await Company.findOne({ userID: req.params.id });
    return res.status(201).json({ company: company });
  } catch (error) {
    console.log(error);
  }
});

router.get("/getCompanyDetails/:id", async (req, res) => {
  try {
    const company = await Company.findOne({ _id: req.params.id });
    return res.status(201).json({ company: company });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
