import express from "express";
import dotenv from "dotenv";

import conn from "./connection.js";
import router from  "./router.js";
import cors from 'cors'
dotenv.config();

const app = express();
app.use(cors({orgin:'http://localhost:3000'}))
app.use("/", express.static("./static"));
app.use(express.json());
app.use("/api", router);

conn().then(() => {
    app.listen(process.env.PORT, error => {
        if(error) {
            console.log(error);
            return;
        }
        console.log("Server started");
    });
})
.catch(error => {
    console.log(error);
})