import { IAssessmentRepository } from "../../../../data/repositories/contracts/IAssessmentsRepository";
import { IClassroomRepository } from "../../../../data/repositories/contracts/IClassroomsRepository";
import { IUpdateClassroomRequestDTO } from "./UpdateClassroomRequestDTO";

class UpdateClassroomUseCase {
  private classroomsRepository: IClassroomRepository;
  private assessmentsRepository: IAssessmentRepository;

  constructor(ClassroomsRepository: IClassroomRepository, assessmentsRepository: IAssessmentRepository) {
    this.classroomsRepository = ClassroomsRepository;
    this.assessmentsRepository = assessmentsRepository;
  }

  async execute(id: string, data: IUpdateClassroomRequestDTO): Promise<void> {
    const assessment = await this.assessmentsRepository.findById(data.assessment);
    if (!assessment) {
      throw new Error("Avaliação não encontrada");
    }
    
    await this.classroomsRepository.update(id, data);
  }
}

export { UpdateClassroomUseCase };