import { MongoAnswerRepository } from "../../repositories/implementations/MongoAnswerRepository";

import { GetAnswerProfessorUseCase } from "./GetAnswerProfessor/GetAnswerProfessorUseCase";
import { GetAnswerProfessorController } from "./GetAnswerProfessor/GetAnswerProfessorController";

import { CreateAnswerUseCase } from "./CreateAnswer/CreateAnswerUseCase";
import { CreateAnswerController } from "./CreateAnswer/CreateAnswerController";

const answersRepository = new MongoAnswerRepository();

const getAnswerProfessorUseCase = new GetAnswerProfessorUseCase(answersRepository);
const getAnswerProfessorController = new GetAnswerProfessorController(getAnswerProfessorUseCase);

const createAnswerUseCase = new CreateAnswerUseCase(answersRepository);
const createAnswerController = new CreateAnswerController(createAnswerUseCase);

export {
  getAnswerProfessorController,
  createAnswerController,
};