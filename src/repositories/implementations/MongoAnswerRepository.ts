import { Answer, mongoAnswer } from "../../models/AnswerModel";
import { IAnswersRepository } from "../IAnswersRepository";

class MongoAnswerRepository implements IAnswersRepository {
  async save(answer: Answer): Promise<Answer> {
    const newAnswer = await mongoAnswer.create(answer);
    return newAnswer;
  }

  async findById(id: string): Promise<Answer> {
    const answer = await mongoAnswer.findById(id).populate("assessment");
    return answer;
  }

  async findAll(): Promise<Answer[]> {
    const answers = await mongoAnswer.find().populate("assessment");
    return answers;
  }

  async update(id: string, answer: Omit<Answer, "user" | "assessment">): Promise<void> {
    await mongoAnswer.findByIdAndUpdate(id, answer);
  }

  async delete(id: string): Promise<void> {
    await mongoAnswer.findByIdAndDelete(id);
  }
}

export { MongoAnswerRepository };