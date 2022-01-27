import { v4 } from "uuid";

type IAlternative = {
  correct: boolean;
  description: string;
}

interface IQuestion {
  _id: string;
  title?: string;
  description: string;
  alternatives: IAlternative[];
  assessment: string;
  createdAt?: Date | number;
}

class Question implements IQuestion {
  readonly _id: string;
  title?: string;
  description: string;
  alternatives: IAlternative[];
  assessment: string;
  createdAt?: Date | number;

  constructor(question: Omit<IQuestion, "_id">) {
    this._id = v4();
    this.title = question.title;
    this.description = question.description;
    this.alternatives = question.alternatives;
    this.assessment = question.assessment;
    this.createdAt = Date.now();
  }
}

export { Question, IQuestion, IAlternative };