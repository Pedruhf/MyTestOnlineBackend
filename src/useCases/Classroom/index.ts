import { MongoClassroomRepository } from "../../repositories/implementations/MongoClassroomRepository";

import { GetClassroomUseCase } from "./GetClassroom/GetClassroomUseCase";
import { GetClassroomController } from "./GetClassroom/GetClassroomController";

import { CreateClassroomUseCase } from "./CreateClassroom/CreateClassroomUseCase";
import { CreateClassroomController } from "./CreateClassroom/CreateClassroomController";

import { UpdateClassroomUseCase } from "./UpdateClassroom/UpdateClassroomUseCase";
import { UpdateClassroomController } from "./UpdateClassroom/UpdateClassroomController";

import { DeleteClassroomUseCase } from "./DeleteClassroom/DeleteClassroomUseCase";
import { DeleteClassroomController } from "./DeleteClassroom/DeleteClassroomController";

const classroomsRepository = new MongoClassroomRepository();

const getClassroomUseCase = new GetClassroomUseCase(classroomsRepository);
const getClassroomController = new GetClassroomController(getClassroomUseCase);

const createClassroomUseCase = new CreateClassroomUseCase(classroomsRepository);
const createClassroomController = new CreateClassroomController(createClassroomUseCase);

const updateClassroomUseCase = new UpdateClassroomUseCase(classroomsRepository);
const updateClassroomController = new UpdateClassroomController(updateClassroomUseCase);

const deleteClassroomUseCase = new DeleteClassroomUseCase(classroomsRepository);
const deleteClassroomController = new DeleteClassroomController(deleteClassroomUseCase);

export {
  getClassroomController,
  createClassroomController,
  updateClassroomController,
  deleteClassroomController,
};