import { IQuestion} from "../../../domain/entities/QuestionModel";
import { IQuestionsRepository } from "../../../data/repositories/contracts/IQuestionsRepository";
import { mongoQuestionModel } from "../schemas/MongoQuestionSchema";

class MongoQuestionRepository implements IQuestionsRepository {
  async save(Question: IQuestion): Promise<IQuestion> {
    const question = await mongoQuestionModel.create(Question);
    return question;
  }

  async findById(id: string): Promise<IQuestion> {
    const Question = await mongoQuestionModel.findById(id);
    return Question;
  }

  async findAll(): Promise<IQuestion[]> {
    const Questions = await mongoQuestionModel.find();
    return Questions;
  }

  async update(id: string, Question: IQuestion): Promise<void> {
    await mongoQuestionModel.findByIdAndUpdate(id, Question);
  }

  async delete(id: string): Promise<void> {
    await mongoQuestionModel.findByIdAndDelete(id);
  }
}

export { MongoQuestionRepository };