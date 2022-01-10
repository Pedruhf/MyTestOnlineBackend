import mongoose from "mongoose";
import { Answer } from "../../../models/AnswerModel";
import { IAnswersRepository } from "../../../repositories/IAnswersRepository";

class GetAnswerProfessorUseCase {
  private answersRepository: IAnswersRepository;

  constructor(answersRepository: IAnswersRepository) {
    this.answersRepository = answersRepository;
  }

  async execute(userId: string): Promise<Answer[]> {
    const answers = await this.answersRepository.findAll();

    const userAnswers = answers.filter(answer => {
      if ((answer.assessment as any).user.valueOf() === userId as unknown as mongoose.Schema.Types.ObjectId) {
        return answer;
      }
    });
    return userAnswers;
  }
}

export { GetAnswerProfessorUseCase };