import { Answer } from "../../../models/AnswerModel";
import { IAssessment } from "../../../models/AssessmentModel";
import { IUser } from "../../../models/UserModel";
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