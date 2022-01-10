import { Answer } from "../models/AnswerModel";

interface IAnswersRepository {
  save(Answer: Answer): Promise<Answer>;
  findById(id: string): Promise<Answer>;
  findAll(): Promise<Answer[]>;
  update(id: string, Answer: Omit<Answer, "user" | "assessment">): Promise<void>;
  delete(id: string): Promise<void>;
}

export { IAnswersRepository };