import { Assessment } from "../../../entities/AssessmentModel";
import { IAssessmentRepository } from "../../../../data/repositories/contracts/IAssessmentsRepository";
import { ICreateAssessmentRequestDTO } from "./CreateAssessmentRequestDTO";
class CreateAssessmentUseCase {
  private assessmentsRepository: IAssessmentRepository;

  constructor(assessmentsRepository: IAssessmentRepository) {
    this.assessmentsRepository = assessmentsRepository;
  }

  async execute(userId: string, data: ICreateAssessmentRequestDTO): Promise<void> {
    if (!data.title.trim()) {
      throw new Error("É necessário informar um título válido");
    }

    if (!userId) {
      throw new Error("A avaliação deve estar vinculada a algum usuário");
    }

    const assessment = new Assessment({
      title: data.title,
      description: data.description,
      user: userId,
      questions: [],
    });

    await this.assessmentsRepository.save(assessment);
  }
}

export { CreateAssessmentUseCase };