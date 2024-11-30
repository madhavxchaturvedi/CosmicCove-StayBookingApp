const dotenv = require("dotenv");

dotenv.config();

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/cosmiccove";
const dbUrl = process.env.ATLASDB_URL;

main()
  .then((res) => {
    console.log("Connected with DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "674b160485b8e5a65e07680b",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
