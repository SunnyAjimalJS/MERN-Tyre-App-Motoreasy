const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Database connection established succesfully");
});

const brandsRouter = require("./routes/brands");
const tyresRouter = require("./routes/tyres");
// const brandsTyresRouter = require("./routes/brandsTyres");

app.use("/brands", brandsRouter);
app.use("/tyres", tyresRouter);
// app.use("/brandsTyres", brandsTyresRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
