const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const brandsTyresSchema = new Schema(
  {
    brand: { type: String, required: true },
    desription: { type: String, required: true },
    size: { type: Number, required: true },
  },
  { timestamps: true }
);

const BrandsTyres = mongoose.model("BrandsTyres", brandSchema);

module.exports = BrandsTyres;
