import express from "express";
import connectDB from "./db/index";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

const app = express();

connectDB();

/*

import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/{DB_NAME}`);
    app.on("error", () => {
      console.log("error: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log("Database is running at port number: ", process.env.PORT);
    });
  } catch (err) {
    console.log("err: ", err);
    throw err;
  }
})();


*/
