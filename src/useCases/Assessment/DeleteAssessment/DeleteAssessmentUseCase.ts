import { IAssessmentRepository } from "../../../repositories/IAssessmentsRepository";

class DeleteAssessmentUseCase {
  private assessmentsRepository: IAssessmentRepository;

  constructor(assessmentsRepository: IAssessmentRepository) {
    this.assessmentsRepository = assessmentsRepository;
  }

  async execute(id: string): Promise<void> {
    if (!id.trim()) {
      throw new Error("ID de avaliação inválido");
    }

    await this.assessmentsRepository.delete(id);
  }
}

export { DeleteAssessmentUseCase };