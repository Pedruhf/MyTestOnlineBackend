"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoQuestionModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const questionSchema = new mongoose_1.default.Schema({
    _id: {
        type: String,
        unique: true,
        required: true,
    },
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
        type: String,
        ref: "Assessment",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const mongoQuestionModel = mongoose_1.default.model("Question", questionSchema);
exports.mongoQuestionModel = mongoQuestionModel;
