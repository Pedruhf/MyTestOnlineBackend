import { MongoQuestionRepository } from "../../../infra/repositories/implementations/MongoQuestionRepository";
import { assessmentsRepository } from "../Assessment";

import { GetQuestionUseCase } from './GetQuestion/GetQuestionUseCase';
import { GetQuestionController } from '../../../presentation/controllers/Question/GetQuestionController';

import { CreateQuestionUseCase } from './CreateQuestion/CreateQuestionUseCase';
import { CreateQuestionController } from '../../../presentation/controllers/Question/CreateQuestionController';

import { UpdateQuestionUseCase } from './UpdateQuestion/UpdateQuestionUseCase';
import { UpdateQuestionController } from '../../../presentation/controllers/Question/UpdateQuestionController';

import { DeleteQuestionUseCase } from './DeleteQuestion/DeleteQuestionUseCase';
import { DeleteQuestionController } from '../../../presentation/controllers/Question/DeleteQuestionController';


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