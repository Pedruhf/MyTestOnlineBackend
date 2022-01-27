import mongoose from "mongoose";
import { Classroom } from "../../../models/ClassroomModel";
import { IAssessmentRepository } from "../../../repositories/IAssessmentsRepository";
import { IClassroomRepository } from "../../../repositories/IClassroomsRepository";
import { ICreateClassroomRequestDTO } from "./CreateClassroomRequestDTO";

class CreateClassroomUseCase {
  private classroomsRepository: IClassroomRepository;
  private assessmentsRepository: IAssessmentRepository;

  constructor(ClassroomsRepository: IClassroomRepository, assessmentsRepository: IAssessmentRepository) {
    this.classroomsRepository = ClassroomsRepository;
    this.assessmentsRepository = assessmentsRepository;
  }

  async execute(userId: string, data: ICreateClassroomRequestDTO): Promise<Classroom> {
    const assessment = await this.assessmentsRepository.findById(data.assessment);
    if (!assessment) {
      throw new Error("Avaliação não encontrada");
    }

    const classroom = new Classroom({
      name: data.name,
      assessment: data.assessment,
      user: userId,
    });
    
    return await this.classroomsRepository.save(classroom);
  }
}

export { CreateClassroomUseCase };