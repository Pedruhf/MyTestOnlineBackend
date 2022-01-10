"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoQuestionRepository = void 0;
const QuestionModel_1 = require("../../models/QuestionModel");
class MongoQuestionRepository {
    async save(Question) {
        const question = await QuestionModel_1.mongoQuestion.create(Question);
        return question;
    }
    async findById(id) {
        const Question = await QuestionModel_1.mongoQuestion.findById(id);
        return Question;
    }
    async findAll() {
        const Questions = await QuestionModel_1.mongoQuestion.find();
        return Questions;
    }
    async update(id, Question) {
        await QuestionModel_1.mongoQuestion.findByIdAndUpdate(id, Question);
    }
    async delete(id) {
        await QuestionModel_1.mongoQuestion.findByIdAndDelete(id);
    }
}
exports.MongoQuestionRepository = MongoQuestionRepository;
