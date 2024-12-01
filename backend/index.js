const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = 5000;
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://nandiankan242:ankan1234@ankan.esoce.mongodb.net/foodmern?"
  );

  console.log("the database is connected");
};
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
