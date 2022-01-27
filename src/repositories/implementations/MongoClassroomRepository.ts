import { IClassroom } from "../../models/ClassroomModel";
import { IClassroomRepository } from "../IClassroomsRepository";
import { mongoClassroomModel } from "./schemas/MongoClassroomSchema";

class MongoClassroomRepository implements IClassroomRepository {
  async save(classroom: IClassroom): Promise<IClassroom> {
    const newClassroom = await (await (await mongoClassroomModel.create(classroom))?.populate(["user", "assessment"]))?.populate("assessment.questions");
    return newClassroom;
  }

  async findById(id: string): Promise<IClassroom> {
    const classroom = await (await (await mongoClassroomModel.findById(id))?.populate(["user", "assessment"]))?.populate("assessment.questions");
    if (classroom) {
      (classroom.assessment as any).user = undefined;
    }
    
    return classroom;
  }

  async findAll(): Promise<IClassroom[]> {
    const classroom = await mongoClassroomModel.find();
    return classroom;
  }

  async update(id: string, classroom: Omit<IClassroom, "user">): Promise<void> {
    await mongoClassroomModel.findByIdAndUpdate(id, classroom);
  }

  async delete(id: string): Promise<void> {
    await mongoClassroomModel.findByIdAndDelete(id);
  }
}

export { MongoClassroomRepository };