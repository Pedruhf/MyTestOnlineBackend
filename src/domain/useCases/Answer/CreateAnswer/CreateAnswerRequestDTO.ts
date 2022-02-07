import { IQuestion } from "../../../entities/QuestionModel";

interface ICreateAnswerRequestDTO {
  assessment: string;
  questions: IQuestion[];
}

export { ICreateAnswerRequestDTO };