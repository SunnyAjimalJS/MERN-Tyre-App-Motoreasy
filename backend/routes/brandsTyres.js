// const router = require("express").Router();
// const BrandsTyres = require("../models/brandsTyres.model");

// router.route("/").get((req, res) => {
//   BrandsTyres.find()
//     .then((brandsTyres) => res.json(brandsTyres))
//     .catch((err) => res.status(400).json("Error " + err));
// });

// router.route("/add").post((req, res) => {
//   const brand = req.body.brand;
//   const description = req.body.description;
//   const size = Number(req.body.size);

//   const newTyre = new Tyre({
//     brand,
//     description,
//     size,
//   });
//   newTyre
//     .save()
//     .then(() => res.json("Tyre Added!"))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// module.exports = router;
