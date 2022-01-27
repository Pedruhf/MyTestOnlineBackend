import { IQuestion } from "../models/QuestionModel";

interface IQuestionsRepository {
  save(question: IQuestion): Promise<IQuestion>;
  findById(id: string): Promise<IQuestion>;
  findAll(): Promise<IQuestion[]>;
  update(id: string, question: Omit<IQuestion, "_id" | "assessment">): Promise<void>;
  delete(id: string): Promise<void>;
}

export { IQuestionsRepository };