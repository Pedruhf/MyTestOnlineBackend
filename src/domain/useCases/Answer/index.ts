import { MongoAnswerRepository } from "../../../infra/repositories/implementations/MongoAnswerRepository";

import { GetAnswerProfessorUseCase } from "./GetAnswerProfessor/GetAnswerProfessorUseCase";
import { GetAnswerProfessorController } from "../../../presentation/controllers/Answer/GetAnswerProfessorController";

import { CreateAnswerUseCase } from "./CreateAnswer/CreateAnswerUseCase";
import { CreateAnswerController } from "../../../presentation/controllers/Answer/CreateAnswerController";

const answersRepository = new MongoAnswerRepository();

const getAnswerProfessorUseCase = new GetAnswerProfessorUseCase(answersRepository);
const getAnswerProfessorController = new GetAnswerProfessorController(getAnswerProfessorUseCase);

const createAnswerUseCase = new CreateAnswerUseCase(answersRepository);
const createAnswerController = new CreateAnswerController(createAnswerUseCase);

export {
  getAnswerProfessorController,
  createAnswerController,
};