import mongoose from "mongoose";
import { Answer } from "../../../models/AnswerModel";
import { IAnswersRepository } from "../../../repositories/IAnswersRepository";
import { ICreateAnswerRequestDTO } from "./CreateAnswerRequestDTO";

class CreateAnswerUseCase {
  private answersRepository: IAnswersRepository;

  constructor(answersRepository: IAnswersRepository) {
    this.answersRepository = answersRepository;
  }

  async execute(userId: string, data: ICreateAnswerRequestDTO): Promise<Answer> {
    const allAnswers = await this.answersRepository.findAll();

    allAnswers.forEach(answer => {
      if (
        (answer.assessment as any)._id.valueOf() === data.assessment &&
        answer.user.valueOf() === userId as unknown as mongoose.Schema.Types.ObjectId) {
        throw new Error("Você já respondeu esta avaliação");
      }
    })

    const aswner = await this.answersRepository.save({
      ...data,
      user: userId as unknown as mongoose.Schema.Types.ObjectId,
    });

    return aswner;
  }
}

export { CreateAnswerUseCase };