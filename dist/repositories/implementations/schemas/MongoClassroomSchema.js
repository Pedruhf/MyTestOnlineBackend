"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoClassroomModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const classroomSchema = new mongoose_1.default.Schema({
    _id: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        ref: "User",
        required: true,
    },
    assessment: {
        type: String,
        ref: "Assessment",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const mongoClassroomModel = mongoose_1.default.model("Classroom", classroomSchema);
exports.mongoClassroomModel = mongoClassroomModel;
