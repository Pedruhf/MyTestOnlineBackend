import { Answer } from "../../../models/AnswerModel";
import { IAssessment } from "../../../models/AssessmentModel";
import { IUser } from "../../../models/UserModel";
import { IAnswersRepository } from "../../../repositories/IAnswersRepository";

class GetAnswerProfessorUseCase {
  private answersRepository: IAnswersRepository;

  constructor(answersRepository: IAnswersRepository) {
    this.answersRepository = answersRepository;
  }

  async execute(userId: string, assessmentId: string): Promise<Answer[]> {
    const answers = await this.answersRepository.findAll();
    const filteredAnswers = answers.filter(answer =>
      (answer.user as unknown as IUser)._id === userId &&
      (answer.assessment as unknown as IAssessment)._id === assessmentId
    );
      
    return filteredAnswers;
  }
}

export { GetAnswerProfessorUseCase };