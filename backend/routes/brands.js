const router = require("express").Router();
const Brand = require("../models/brands.model");

router.route("/").get((req, res) => {
  Brand.find()
    .then((brands) => res.json(brands))
    .catch((err) => res.status(400).json("Error " + err));
});

router.route("/add").post((req, res) => {
  const brand = req.body.brand;
  const newBrand = new Brand({ brand });
  newBrand
    .save()
    .then(() => res.json("Brand Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
