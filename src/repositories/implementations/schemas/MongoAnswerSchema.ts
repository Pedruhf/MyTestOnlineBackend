import mongoose from "mongoose";
import { IAnswer } from "../../../models/AnswerModel";

const answerSchema = new mongoose.Schema<IAnswer>({
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

const mongoAnswerModel = mongoose.model("Answer", answerSchema);

export { mongoAnswerModel };