import mongoose from "mongoose";
import { IAssessmentRepository } from "../../../repositories/IAssessmentsRepository";
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

    await this.assessmentsRepository.save({
      ...data,
      user: userId as unknown as mongoose.Schema.Types.ObjectId,
      questions: [],
    });
  }
}

export { CreateAssessmentUseCase };