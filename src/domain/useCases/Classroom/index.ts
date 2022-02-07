import { MongoClassroomRepository } from "../../../infra/repositories/implementations/MongoClassroomRepository";
import { assessmentsRepository } from "../Assessment";

import { GetClassroomUseCase } from "./GetClassroom/GetClassroomUseCase";
import { GetClassroomController } from "../../../presentation/controllers/Classroom/GetClassroomController";

import { CreateClassroomUseCase } from "./CreateClassroom/CreateClassroomUseCase";
import { CreateClassroomController } from "../../../presentation/controllers/Classroom/CreateClassroomController";

import { UpdateClassroomUseCase } from "./UpdateClassroom/UpdateClassroomUseCase";
import { UpdateClassroomController } from "../../../presentation/controllers/Classroom/UpdateClassroomController";

import { DeleteClassroomUseCase } from "./DeleteClassroom/DeleteClassroomUseCase";
import { DeleteClassroomController } from "../../../presentation/controllers/Classroom/DeleteClassroomController";

const classroomsRepository = new MongoClassroomRepository();

const getClassroomUseCase = new GetClassroomUseCase(classroomsRepository);
const getClassroomController = new GetClassroomController(getClassroomUseCase);

const createClassroomUseCase = new CreateClassroomUseCase(classroomsRepository, assessmentsRepository);
const createClassroomController = new CreateClassroomController(createClassroomUseCase);

const updateClassroomUseCase = new UpdateClassroomUseCase(classroomsRepository, assessmentsRepository);
const updateClassroomController = new UpdateClassroomController(updateClassroomUseCase);

const deleteClassroomUseCase = new DeleteClassroomUseCase(classroomsRepository);
const deleteClassroomController = new DeleteClassroomController(deleteClassroomUseCase);

export {
  getClassroomController,
  createClassroomController,
  updateClassroomController,
  deleteClassroomController,
};