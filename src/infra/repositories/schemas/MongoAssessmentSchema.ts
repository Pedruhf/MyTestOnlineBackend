import mongoose from "mongoose";
import { IAssessment } from "../../../domain/entities/AssessmentModel";

const assessmentSchema = new mongoose.Schema<IAssessment>({
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

const mongoAssessmentModel = mongoose.model("Assessment", assessmentSchema);

export { mongoAssessmentModel };