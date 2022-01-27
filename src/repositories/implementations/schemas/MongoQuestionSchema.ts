import mongoose from "mongoose";
import { IQuestion } from "../../../models/QuestionModel";

const questionSchema = new mongoose.Schema<IQuestion>({
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

const mongoQuestionModel = mongoose.model("Question", questionSchema);

export { mongoQuestionModel };
