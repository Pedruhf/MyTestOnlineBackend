import { Question } from "../models/QuestionModel";

interface IQuestionsRepository {
  save(question: Question): Promise<Question>;
  findById(id: string): Promise<Question>;
  findAll(): Promise<Question[]>;
  update(id: string, question: Omit<Question, "assessment">): Promise<void>;
  delete(id: string): Promise<void>;
}

export { IQuestionsRepository };