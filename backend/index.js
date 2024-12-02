require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 5000;
app.use(express.json());

const userRoutes = require("./Routes/userRoutes");

app.use("/api/users", userRoutes);

async function main() {
  await mongoose.connect(
    process.env.MONGO ||
      "mongodb+srv://nandiankan242:ankan1234@ankan.esoce.mongodb.net/foodmern"
  );
  app.listen(port, () => {
    console.log("server connected");
  });
}
main();
