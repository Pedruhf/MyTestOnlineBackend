import mongoose from 'mongoose';

const DB = "mongodb://localhost/MyTestOnline";
mongoose.connect(DB);
mongoose.connection.on("connected", () => { console.log("DB CONNECTED") });