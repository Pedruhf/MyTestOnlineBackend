"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoAssessmentModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const assessmentSchema = new mongoose_1.default.Schema({
    _id: {
        type: String,
        unique: true,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    user: {
        type: String,
        ref: "User",
        required: true,
    },
    questions: [{
            type: String,
            ref: "Question",
        }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const mongoAssessmentModel = mongoose_1.default.model("Assessment", assessmentSchema);
exports.mongoAssessmentModel = mongoAssessmentModel;
