import { Question, mongoQuestion } from "../../models/QuestionModel";
import { questionRoutes } from "../../routes/questionRoutes";
import { IQuestionsRepository } from "../IQuestionsRepository";

class MongoQuestionRepository implements IQuestionsRepository {
  async save(Question: Question): Promise<Question> {
    const question = await mongoQuestion.create(Question);
    return question;
  }

  async findById(id: string): Promise<Question> {
    const Question = await mongoQuestion.findById(id);
    return Question;
  }

  async findAll(): Promise<Question[]> {
    const Questions = await mongoQuestion.find();
    return Questions;
  }

  async update(id: string, Question: Question): Promise<void> {
    await mongoQuestion.findByIdAndUpdate(id, Question);
  }

  async delete(id: string): Promise<void> {
    await mongoQuestion.findByIdAndDelete(id);
  }
  
}

export { MongoQuestionRepository };