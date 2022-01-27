"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoQuestionRepository = void 0;
const MongoQuestionSchema_1 = require("./schemas/MongoQuestionSchema");
class MongoQuestionRepository {
    async save(Question) {
        const question = await MongoQuestionSchema_1.mongoQuestionModel.create(Question);
        return question;
    }
    async findById(id) {
        const Question = await MongoQuestionSchema_1.mongoQuestionModel.findById(id);
        return Question;
    }
    async findAll() {
        const Questions = await MongoQuestionSchema_1.mongoQuestionModel.find();
        return Questions;
    }
    async update(id, Question) {
        await MongoQuestionSchema_1.mongoQuestionModel.findByIdAndUpdate(id, Question);
    }
    async delete(id) {
        await MongoQuestionSchema_1.mongoQuestionModel.findByIdAndDelete(id);
    }
}
exports.MongoQuestionRepository = MongoQuestionRepository;
