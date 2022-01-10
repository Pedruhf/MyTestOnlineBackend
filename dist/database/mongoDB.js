"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const DB = process.env.MONGO_URL;
mongoose_1.default.connect(DB);
mongoose_1.default.connection.on("connected", () => { console.log("DB CONNECTED"); });
