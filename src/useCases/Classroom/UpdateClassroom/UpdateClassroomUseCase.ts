import { IClassroomRepository } from "../../../repositories/IClassroomsRepository";
import { IUpdateClassroomRequestDTO } from "./UpdateClassroomRequestDTO";

class UpdateClassroomUseCase {
  private classroomsRepository: IClassroomRepository;

  constructor(ClassroomsRepository: IClassroomRepository) {
    this.classroomsRepository = ClassroomsRepository;
  }

  async execute(id: string, data: IUpdateClassroomRequestDTO): Promise<void> {
    await this.classroomsRepository.update(id, data);
  }
}

export { UpdateClassroomUseCase };