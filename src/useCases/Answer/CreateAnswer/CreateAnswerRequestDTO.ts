import { IQuestion } from "../../../models/QuestionModel";

interface ICreateAnswerRequestDTO {
  assessment: string;
  questions: IQuestion[];
}

export { ICreateAnswerRequestDTO };