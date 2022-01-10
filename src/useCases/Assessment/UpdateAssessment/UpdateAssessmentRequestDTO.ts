import mongoose from "mongoose";

interface IUpdateAssessmentRequestDTO {
  title: string;
  description?: string;
  questions: mongoose.Schema.Types.ObjectId[];
}

export { IUpdateAssessmentRequestDTO };