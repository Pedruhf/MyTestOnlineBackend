"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoAnswerRepository = void 0;
const AnswerModel_1 = require("../../models/AnswerModel");
class MongoAnswerRepository {
    async save(answer) {
        const newAnswer = await AnswerModel_1.mongoAnswer.create(answer);
        return newAnswer;
    }
    async findById(id) {
        const answer = await AnswerModel_1.mongoAnswer.findById(id).populate("assessment");
        return answer;
    }
    async findAll() {
        const answers = await AnswerModel_1.mongoAnswer.find().populate("assessment");
        return answers;
    }
    async update(id, answer) {
        await AnswerModel_1.mongoAnswer.findByIdAndUpdate(id, answer);
    }
    async delete(id) {
        await AnswerModel_1.mongoAnswer.findByIdAndDelete(id);
    }
}
exports.MongoAnswerRepository = MongoAnswerRepository;
