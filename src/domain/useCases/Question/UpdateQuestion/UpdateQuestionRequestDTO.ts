import { IAlternative } from "../../../entities/QuestionModel";

interface IUpdateQuestionRequestDTO {
  title?: string;
  description: string;
  alternatives: IAlternative[];
}

export { IUpdateQuestionRequestDTO };