import mongoose from "mongoose";
import { Classroom } from "../../../models/ClassroomModel";
import { IClassroomRepository } from "../../../repositories/IClassroomsRepository";
import { ICreateClassroomRequestDTO } from "./CreateClassroomRequestDTO";

class CreateClassroomUseCase {
  private classroomsRepository: IClassroomRepository;

  constructor(ClassroomsRepository: IClassroomRepository) {
    this.classroomsRepository = ClassroomsRepository;
  }

  async execute(userId: string, data: ICreateClassroomRequestDTO): Promise<Classroom> {
    const classroom = await this.classroomsRepository.save({
      name: data.name,
      assessment: data.assessment,
      user: userId as unknown as mongoose.Schema.Types.ObjectId,
    });

    return classroom;
  }
}

export { CreateClassroomUseCase };