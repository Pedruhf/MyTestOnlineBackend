"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoQuestion = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const questionSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
        required: true
    },
    alternatives: [{
            correct: {
                type: Boolean,
                default: false,
            },
            description: {
                type: String,
                required: true,
            },
        }],
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
const mongoQuestion = mongoose_1.default.model("Question", questionSchema);
exports.mongoQuestion = mongoQuestion;
