"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAnswerController = exports.getAnswerProfessorController = void 0;
const MongoAnswerRepository_1 = require("../../repositories/implementations/MongoAnswerRepository");
const GetAnswerProfessorUseCase_1 = require("./GetAnswerProfessor/GetAnswerProfessorUseCase");
const GetAnswerProfessorController_1 = require("./GetAnswerProfessor/GetAnswerProfessorController");
const CreateAnswerUseCase_1 = require("./CreateAnswer/CreateAnswerUseCase");
const CreateAnswerController_1 = require("./CreateAnswer/CreateAnswerController");
const answersRepository = new MongoAnswerRepository_1.MongoAnswerRepository();
const getAnswerProfessorUseCase = new GetAnswerProfessorUseCase_1.GetAnswerProfessorUseCase(answersRepository);
const getAnswerProfessorController = new GetAnswerProfessorController_1.GetAnswerProfessorController(getAnswerProfessorUseCase);
exports.getAnswerProfessorController = getAnswerProfessorController;
const createAnswerUseCase = new CreateAnswerUseCase_1.CreateAnswerUseCase(answersRepository);
const createAnswerController = new CreateAnswerController_1.CreateAnswerController(createAnswerUseCase);
exports.createAnswerController = createAnswerController;