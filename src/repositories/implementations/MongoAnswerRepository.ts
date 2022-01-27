import { IAnswer} from "../../models/AnswerModel";
import { IAnswersRepository } from "../IAnswersRepository";
import { mongoAnswerModel } from "./schemas/MongoAnswerSchema";

class MongoAnswerRepository implements IAnswersRepository {
  async save(answer: IAnswer): Promise<IAnswer> {
    const newAnswer = await mongoAnswerModel.create(answer);
    return newAnswer;
  }

  async findById(id: string): Promise<IAnswer> {
    const answer = await mongoAnswerModel.findById(id).populate(["user", "assessment"]);
    return answer;
  }

  async findAll(): Promise<IAnswer[]> {
    const answers = await mongoAnswerModel.find().populate(["user", "assessment"]);
    return answers;
  }

  async update(id: string, answer: Omit<IAnswer, "user" | "assessment">): Promise<void> {
    await mongoAnswerModel.findByIdAndUpdate(id, answer);
  }

  async delete(id: string): Promise<void> {
    await mongoAnswerModel.findByIdAndDelete(id);
  }
}

export { MongoAnswerRepository };