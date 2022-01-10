"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoClassroom = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const classroomSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    assessment: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Assessment",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const mongoClassroom = mongoose_1.default.model("Classroom", classroomSchema);
exports.mongoClassroom = mongoClassroom;
