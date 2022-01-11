import mongoose from "mongoose";
import { Answer } from "../../../models/AnswerModel";
import { IAnswersRepository } from "../../../repositories/IAnswersRepository";

class GetAnswerProfessorUseCase {
  private answersRepository: IAnswersRepository;

  constructor(answersRepository: IAnswersRepository) {
    this.answersRepository = answersRepository;
  }

  async execute(userId: string, assessmentId: string): Promise<Answer[]> {
    const answers = await this.answersRepository.findAll();
    const filteredAnswers = answers.filter(answer =>
      ((answer.assessment as any)._id.valueOf() as unknown as string) === assessmentId &&
      (answer.assessment as any).user.valueOf() === userId
      );

    return filteredAnswers;
  }
}

export { GetAnswerProfessorUseCase };