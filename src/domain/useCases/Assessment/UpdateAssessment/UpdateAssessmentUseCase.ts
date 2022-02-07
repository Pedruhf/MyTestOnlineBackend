import { IAssessmentRepository } from "../../../../data/repositories/contracts/IAssessmentsRepository";
import { IUpdateAssessmentRequestDTO } from "./UpdateAssessmentRequestDTO";

class UpdateAssessmentUseCase {
  private assessmentsRepository: IAssessmentRepository;

  constructor(assessmentsRepository: IAssessmentRepository) {
    this.assessmentsRepository = assessmentsRepository;
  }

  async execute(id: string, data: IUpdateAssessmentRequestDTO): Promise<void> {
    await this.assessmentsRepository.update(id, data);
  }
}

export { UpdateAssessmentUseCase };