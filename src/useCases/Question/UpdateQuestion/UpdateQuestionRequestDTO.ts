import { Alternative } from "../../../models/QuestionModel";

interface IUpdateQuestionRequestDTO {
  title?: string;
  description: string;
  alternatives: Alternative[];
}

export { IUpdateQuestionRequestDTO };