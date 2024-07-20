const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3001;

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
});

const User = mongoose.model("User", userSchema);

// Connect to MongoDB
mongoose
  .connect("mongodb://mongo-container:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

app.get("/", async (req, res) => {
  const user = new User({
    name: "huzaifa new",
    email: "huzaifa2@gmail.com",
    age: 25,
  });
  const data = await user.save();
  console.log({ data });
  res.send("Hello World!!!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
