import mongoose from 'mongoose';

// const DB = process.env.MONGO_URL;
const DB = "mongodb://localhost/MyAuth";
mongoose.connect(DB);
mongoose.connection.on("connected", () => { console.log("DB CONNECTED") });