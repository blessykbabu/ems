import mongoose from "mongoose";

export default function conn() {
    return mongoose.connect(process.env.MONGO_URL);
}