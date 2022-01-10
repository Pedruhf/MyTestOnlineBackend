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

interface ICreateAnswerRequestDTO {
  assessment: mongoose.Schema.Types.ObjectId;
  questions: Question[];
}

export { ICreateAnswerRequestDTO };