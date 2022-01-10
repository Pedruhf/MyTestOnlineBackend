import { Classroom } from "../models/ClassroomModel";

interface IClassroomRepository {
  save(classroom: Classroom): Promise<Classroom>;
  findById(id: string): Promise<Classroom>;
  findAll(): Promise<Classroom[]>;
  update(id: string, classroom: Omit<Classroom, 'user'>): Promise<void>;
  delete(id: string): Promise<void>;
}

export { IClassroomRepository };