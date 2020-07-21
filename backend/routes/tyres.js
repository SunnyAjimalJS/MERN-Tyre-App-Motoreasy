const router = require("express").Router();
const Tyre = require("../models/tyres.model");

router.route("/").get((req, res) => {
  Tyre.find()
    .then((tyres) => res.json(tyres))
    .catch((err) => res.status(400).json("Error " + err));
});

router.route("/add").post((req, res) => {
  const brand = req.body.brand;
  const description = req.body.description;
  const size = Number(req.body.size);
  const newTyre = new Tyre({ tyre });
  newTyre
    .save()
    .then(() => res.json("Tyre Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
