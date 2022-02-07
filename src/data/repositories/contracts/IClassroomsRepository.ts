import { Classroom } from "../../../domain/entities/ClassroomModel";

interface IClassroomRepository {
  save(classroom: Classroom): Promise<Classroom>;
  findById(id: string): Promise<Classroom>;
  findAll(): Promise<Classroom[]>;
  update(id: string, classroom: Omit<Classroom, "_id" | "user">): Promise<void>;
  delete(id: string): Promise<void>;
}

export { IClassroomRepository };