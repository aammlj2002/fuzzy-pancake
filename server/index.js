import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(process.env.PORT || 5000);
    })
    .catch((error) => {
        console.log(error.message);
    });
