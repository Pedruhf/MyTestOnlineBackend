import { IAlternative } from "../../../models/QuestionModel";

interface ICreateQuestionRequestDTO {
  title?: string;
  description: string;
  alternatives: IAlternative[];
  assessment: string;
}

export { ICreateQuestionRequestDTO };