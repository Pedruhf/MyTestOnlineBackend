import { MongoQuestionRepository } from "../../repositories/implementations/MongoQuestionRepository";
import { assessmentsRepository } from "../Assessment";

import { GetQuestionUseCase } from './GetQuestion/GetQuestionUseCase';
import { GetQuestionController } from './GetQuestion/GetQuestionController';

import { CreateQuestionUseCase } from '../Question/CreateQuestion/CreateQuestionUseCase';
import { CreateQuestionController } from '../Question/CreateQuestion/CreateQuestionController';

import { UpdateQuestionUseCase } from '../Question/UpdateQuestion/UpdateQuestionUseCase';
import { UpdateQuestionController } from '../Question/UpdateQuestion/UpdateQuestionController';

import { DeleteQuestionUseCase } from '../Question/DeleteQuestion/DeleteQuestionUseCase';
import { DeleteQuestionController } from '../Question/DeleteQuestion/DeleteQuestionController';


const questionsRepository = new MongoQuestionRepository();

const getQuestionUseCase = new GetQuestionUseCase(questionsRepository);
const getQuestionController = new GetQuestionController(getQuestionUseCase);

const createQuestionUseCase = new CreateQuestionUseCase(questionsRepository, assessmentsRepository);
const createQuestionController = new CreateQuestionController(createQuestionUseCase);

const updateQuestionUseCase = new UpdateQuestionUseCase(questionsRepository);
const updateQuestionController = new UpdateQuestionController(updateQuestionUseCase);

const deleteQuestionUseCase = new DeleteQuestionUseCase(questionsRepository);
const deleteQuestionController = new DeleteQuestionController(deleteQuestionUseCase);

export {
  getQuestionController,
  createQuestionController,
  updateQuestionController,
  deleteQuestionController,
};