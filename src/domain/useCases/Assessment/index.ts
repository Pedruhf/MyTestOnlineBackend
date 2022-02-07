import { MongoAssessmentRepository } from "../../../infra/repositories/implementations/MongoAssessmentRepository"

import { GetAssessmentUseCase } from "./GetAssessment/GetAssessmentUseCase";
import { GetAssessmentController } from "../../../presentation/controllers/Assessment/GetAssessmentController";

import { CreateAssessmentUseCase } from "./CreateAssessment/CreateAssessmentUseCase";
import { CreateAssessmentController } from "../../../presentation/controllers/Assessment/CreateAssessmentController";

import { UpdateAssessmentUseCase } from "./UpdateAssessment/UpdateAssessmentUseCase";
import { UpdateAssessmentController } from "../../../presentation/controllers/Assessment/UpdateAssessmentController";

import { DeleteAssessmentUseCase } from "./DeleteAssessment/DeleteAssessmentUseCase";
import { DeleteAssessmentController } from "../../../presentation/controllers/Assessment/DeleteAssessmentController";


const assessmentsRepository = new MongoAssessmentRepository();

const getAssessmentUseCase = new GetAssessmentUseCase(assessmentsRepository);
const getAssessmentController = new GetAssessmentController(getAssessmentUseCase);

const createAssessmentUseCase = new CreateAssessmentUseCase(assessmentsRepository);
const createAssessmentController = new CreateAssessmentController(createAssessmentUseCase);

const updateAssessmentUseCase = new UpdateAssessmentUseCase(assessmentsRepository);
const updateAssessmentController = new UpdateAssessmentController(updateAssessmentUseCase);

const deleteAssessmentUseCase = new DeleteAssessmentUseCase(assessmentsRepository);
const deleteAssessmentController = new DeleteAssessmentController(deleteAssessmentUseCase);

export {
  assessmentsRepository,
  getAssessmentController,
  createAssessmentController,
  updateAssessmentController,
  deleteAssessmentController
};