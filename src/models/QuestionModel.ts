import mongoose from "mongoose";

type Alternative = {
  correct: boolean;
  description: string;
}

interface Question {
  _id?: mongoose.Schema.Types.ObjectId;
  title?: string;
  description: string;
  alternatives: Alternative[];
  assessment: mongoose.Schema.Types.ObjectId;
  createdAt?: Date | number;
}

const questionSchema = new mongoose.Schema<Question>({
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
    type: mongoose.Schema.Types.ObjectId,
    ref: "Assessment",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const mongoQuestion = mongoose.model("Question", questionSchema);

export { mongoQuestion, Question, Alternative };