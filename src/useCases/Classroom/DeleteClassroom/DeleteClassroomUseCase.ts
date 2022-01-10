import { IClassroomRepository } from "../../../repositories/IClassroomsRepository";

class DeleteClassroomUseCase {
  private classroomsRepository: IClassroomRepository;

  constructor(classroomsRepository: IClassroomRepository) {
    this.classroomsRepository = classroomsRepository;
  }

  async execute(id: string): Promise<void> {
    await this.classroomsRepository.delete(id);
  }
}

export { DeleteClassroomUseCase };