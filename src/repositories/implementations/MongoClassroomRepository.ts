import { Classroom, mongoClassroom } from "../../models/ClassroomModel";
import { IClassroomRepository } from "../IClassroomsRepository";

class MongoClassroomRepository implements IClassroomRepository {
  async save(classroom: Classroom): Promise<Classroom> {
    const newClassroom = await (await (await mongoClassroom.create(classroom)).populate(["user", "assessment"])).populate("assessment.questions");
    return newClassroom;
  }

  async findById(id: string): Promise<Classroom> {
    const classroom = await (await mongoClassroom.findById(id).populate(["user", "assessment"])).populate("assessment.questions");
    (classroom.assessment as any).user = undefined;
    return classroom;
  }

  async findAll(): Promise<Classroom[]> {
    const classroom = await mongoClassroom.find();
    return classroom;
  }

  async update(id: string, classroom: Omit<Classroom, "user">): Promise<void> {
    await mongoClassroom.findByIdAndUpdate(id, classroom);
  }

  async delete(id: string): Promise<void> {
    await mongoClassroom.findByIdAndDelete(id);
  }
}

export { MongoClassroomRepository };