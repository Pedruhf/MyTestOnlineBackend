import { IAssessment } from "../../../models/AssessmentModel";
import { IUser } from "../../../models/UserModel";
import { IAssessmentRepository } from "../../../repositories/IAssessmentsRepository";

class GetAssessmentUseCase {
  private assessmentsRepository: IAssessmentRepository;

  constructor(assessmentsRepository: IAssessmentRepository) {
    this.assessmentsRepository = assessmentsRepository;
  }

  async execute(userId: string, id?: string): Promise<IAssessment | IAssessment[]> {
    if (id) {
      const assessment = await this.assessmentsRepository.findById(id);
      if (!assessment) {
        throw new Error("Avaliação não encontrada");
      }
      
      if ((assessment.user as unknown as IUser)._id !== userId) {
        throw new Error("Esta avaliação não pertence a este usuário");
      }
      
      return assessment;
    }
    
    const assessments = await this.assessmentsRepository.findAll();
    if (!assessments) {
      throw new Error("Avaliações não encontradas");
    }
    
    const a = assessments.filter(assessment => (assessment.user as unknown as IUser)._id === userId);
    return a
  }
}

export { GetAssessmentUseCase };