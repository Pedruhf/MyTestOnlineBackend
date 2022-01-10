import { MongoAssessmentRepository } from "../../repositories/implementations/MongoAssessmentRepository"

import { GetAssessmentUseCase } from "../Assessment/GetAssessment/GetAssessmentUseCase";
import { GetAssessmentController } from "../Assessment/GetAssessment/GetAssessmentController";

import { CreateAssessmentUseCase } from "../Assessment/CreateAssessment/CreateAssessmentUseCase";
import { CreateAssessmentController } from "../Assessment/CreateAssessment/CreateAssessmentController";

import { UpdateAssessmentUseCase } from "../Assessment/UpdateAssessment/UpdateAssessmentUseCase";
import { UpdateAssessmentController } from "../Assessment/UpdateAssessment/UpdateAssessmentController";

import { DeleteAssessmentUseCase } from "../Assessment/DeleteAssessment/DeleteAssessmentUseCase";
import { DeleteAssessmentController } from "../Assessment/DeleteAssessment/DeleteAssessmentController";


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