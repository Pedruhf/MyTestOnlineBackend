import { v4 } from "uuid";
import { IQuestion } from "./QuestionModel";

interface IAnswer {
  _id: string;
  user: string;
  assessment: string;
  questions: IQuestion[];
  createdAt?: Date | number;
}

class Answer implements IAnswer {
  _id: string;
  user: string;
  assessment: string;
  questions: IQuestion[];
  createdAt?: number | Date;

  constructor(answer: Omit<IAnswer, "_id">) {
    this._id = v4(),
    this.user = answer.user;
    this.assessment = answer.assessment;
    this.questions = answer.questions;
    this.createdAt = Date.now();
  }
}

export { Answer, IAnswer };
