import { IAlternative } from "../../../entities/QuestionModel";

interface ICreateQuestionRequestDTO {
  title?: string;
  description: string;
  alternatives: IAlternative[];
  assessment: string;
}

export { ICreateQuestionRequestDTO };