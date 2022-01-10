import mongoose from "mongoose";

interface Assessment {
  _id?: mongoose.Schema.Types.ObjectId;
  title: string;
  description?: string;
  user: mongoose.Schema.Types.ObjectId;
  questions: mongoose.Schema.Types.ObjectId[];
  createdAt?: Date | number;
}

const assessmentSchema = new mongoose.Schema<Assessment>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const mongoAssessment = mongoose.model("Assessment", assessmentSchema);

export { mongoAssessment, Assessment };