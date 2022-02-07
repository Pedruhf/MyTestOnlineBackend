import { Answer } from "../../../entities/AnswerModel";
import { IAssessment } from "../../../entities/AssessmentModel";
import { IUser } from "../../../entities/UserModel";
import { IAnswersRepository } from "../../../../data/repositories/contracts/IAnswersRepository";
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
        ((answer.assessment as unknown as IAssessment)._id === data.assessment) &&
        ((answer.user as unknown as IUser)._id === userId)
      ) {
        throw new Error("Você já respondeu esta avaliação");
      }
    })

    const answer = new Answer({
      user: userId,
      assessment: data.assessment,
      questions: data.questions,
    });

    return await this.answersRepository.save(answer);
  }
}

export { CreateAnswerUseCase };