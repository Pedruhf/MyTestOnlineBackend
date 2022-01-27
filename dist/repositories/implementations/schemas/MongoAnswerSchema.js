"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoAnswerModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const answerSchema = new mongoose_1.default.Schema({
    _id: {
        type: String,
        unique: true,
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
    questions: [{
            type: {
                title: String,
                description: {
                    type: String,
                    required: true,
                },
                alternatives: [{
                        marked: {
                            type: Boolean,
                            default: false,
                        },
                        description: {
                            type: String,
                            required: true,
                        },
                    }],
            },
        }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const mongoAnswerModel = mongoose_1.default.model("Answer", answerSchema);
exports.mongoAnswerModel = mongoAnswerModel;
