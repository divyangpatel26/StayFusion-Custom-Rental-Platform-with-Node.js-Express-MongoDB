const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;

main()
  .then(() => {
    console.log("Database connected successfully !");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.get("/", (req, res) => {
  res.send("working");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
