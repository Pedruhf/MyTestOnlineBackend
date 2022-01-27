import { IAlternative } from "../../../models/QuestionModel";

interface IUpdateQuestionRequestDTO {
  title?: string;
  description: string;
  alternatives: IAlternative[];
}

export { IUpdateQuestionRequestDTO };