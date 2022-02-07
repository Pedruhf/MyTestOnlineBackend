import { Classroom } from "../../../entities/ClassroomModel";
import { IClassroomRepository } from "../../../../data/repositories/contracts/IClassroomsRepository";

class GetClassroomUseCase {
  private classroomsRepository: IClassroomRepository;

  constructor(classroomsRepository: IClassroomRepository) {
    this.classroomsRepository = classroomsRepository;
  }

  async execute(userId: string, id?: string): Promise<Classroom | Classroom[]> {
    if (id) {
      const classroom = await this.classroomsRepository.findById(id);
      if (!classroom) {
        throw new Error("Sala não encontrada");
      }
  
      return classroom;
    }

    const classrooms = await this.classroomsRepository.findAll();
    if (!classrooms) {
      throw new Error("Avaliações não encontradas");
    }

    return classrooms.filter(classroom => classroom.user === userId);
  }
}

export { GetClassroomUseCase };