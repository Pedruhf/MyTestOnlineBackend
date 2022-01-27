import { v4 } from "uuid";

interface IAssessment {
  _id: string;
  title: string;
  description?: string;
  user: string;
  questions: string[];
  createdAt?: Date | number;
}

class Assessment {
  readonly _id: string;
  title: string;
  description?: string;
  user: string;
  questions: string[];
  createdAt?: Date | number;

  constructor(assessment: Omit<IAssessment, "_id">) {
    this._id = v4();
    this.title = assessment.title;
    this.description = assessment.description;
    this.user = assessment.user;
    this.questions = assessment.questions;
    this.createdAt = Date.now();
  }
}

export { Assessment, IAssessment };