import mongoose from "mongoose";

type Alternative = {
  marked: boolean;
  description: string;
}

type Question = {
  title?: string;
  description: string;
  alternatives: Alternative[];
}

interface Answer {
  _id?: mongoose.Schema.Types.ObjectId;
  user: mongoose.Schema.Types.ObjectId;
  assessment: mongoose.Schema.Types.ObjectId;
  questions: Question[];
  createdAt?: Date | number;
}

const answerSchema = new mongoose.Schema<Answer>({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  assessment: {
    type: mongoose.Schema.Types.ObjectId,
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

const mongoAnswer = mongoose.model("Answer", answerSchema);

export { mongoAnswer, Answer };