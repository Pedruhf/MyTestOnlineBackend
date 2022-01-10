import mongoose from "mongoose";
import { Alternative } from "../../../models/QuestionModel";

interface ICreateQuestionRequestDTO {
  title?: string;
  description: string;
  alternatives: Alternative[];
  assessment: mongoose.Schema.Types.ObjectId;
}

export { ICreateQuestionRequestDTO };