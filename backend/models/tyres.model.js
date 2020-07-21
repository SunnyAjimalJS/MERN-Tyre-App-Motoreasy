const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tyreSchema = new Schema(
  {
    brand: { type: String, required: true },
    description: { type: String, required: true },
    size: { type: Number, required: true },
  },
  { timestamps: true }
);

const Tyre = mongoose.model("Tyres", tyreSchema);

module.exports = Tyre;
