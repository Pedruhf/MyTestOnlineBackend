"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoAnswer = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const answerSchema = new mongoose_1.default.Schema({
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
const mongoAnswer = mongoose_1.default.model("Answer", answerSchema);
exports.mongoAnswer = mongoAnswer;
