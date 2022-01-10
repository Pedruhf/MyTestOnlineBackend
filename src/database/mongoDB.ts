import mongoose from 'mongoose';

const DB = process.env.MONGO_URL;
mongoose.connect(DB);
mongoose.connection.on("connected", () => { console.log("DB CONNECTED") });