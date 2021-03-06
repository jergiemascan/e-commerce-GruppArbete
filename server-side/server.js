const mongoose = require("mongoose");
const express = require("express");
const dotEnv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
dotEnv.config();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from Node server👋🏻" });
});

const products = require("./routes/productRoute");
app.use("/", products);

const deliveries = require("./routes/deliveryRoute");
app.use("/", deliveries);

const userAuth = require("./routes/userRoute");
app.use("/user", userAuth);

const order = require("./routes/orderRoute");
app.use("/user", order);

const db = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
db();

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Hello from server! We are listening on ${PORT}`);
});
