const express = require("express");
const router = express.Router();
const Fertilizer = require("../schemas/FertilizerSchema");
const Company = require("../schemas/FertilizerCompanySchema");
require("../db/conn");

router.post("/addFertilizer", async (req, res) => {
  const { name, price, size, quantity, availability, companyID, file } =
    req.body;
  if (!name || !price || !quantity || !availability) {
    return res.status(404).json({ message: "Unexpcted error occured !" });
  }
  if (quantity < 1) {
    return res.status(404).json({ message: "Unexpcted error occured !" });
  }

  try {
    const companyExist = await Company.findOne({ _id: companyID });

    const FertilizerExist = await Fertilizer.findOne({
      companyID: companyID,
    });

    if (FertilizerExist) {
      return res.status(402).json({ message: "Fertilizer already exist!" });
    }

    if (companyExist && !FertilizerExist) {
      const product = new Fertilizer({
        name: name,
        price: price,
        size: size,
        quantity: quantity,
        availability: availability,
        companyID: companyID,
        file: file,
      });

      await product.save();
      return res
        .status(201)
        .json({ message: "Fertilizer added successfully !!" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/getFertilizer/:id", async (req, res) => {
  try {
    const fertilizerExist = await Fertilizer.findOne({ _id: req.params.id });

    if (fertilizerExist) {
      return res.status(201).json({ fertilizerExist });
    } else {
      return res.status(404).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/updateFertilizer/:id", async (req, res) => {
  const {
    name,
    price,
    size,
    quantity,
    availability,
    madeCompany,
    madeCountry,
    madeState,
    companyLocation,
  } = req.body;

  try {
    const updateFertilizer = await Fertilizer.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        name: name,
        price: price,
        size: size,
        quantity: quantity,
        availability: availability,
        madeCompany: madeCompany,
        madeCountry: madeCountry,
        madeState: madeState,
        companyLocation: companyLocation,
      }
    );

    return res.status(201).json({ updateFertilizer });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
