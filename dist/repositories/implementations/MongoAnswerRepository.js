"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoAnswerRepository = void 0;
const MongoAnswerSchema_1 = require("./schemas/MongoAnswerSchema");
class MongoAnswerRepository {
    async save(answer) {
        const newAnswer = await MongoAnswerSchema_1.mongoAnswerModel.create(answer);
        return newAnswer;
    }
    async findById(id) {
        const answer = await MongoAnswerSchema_1.mongoAnswerModel.findById(id).populate(["user", "assessment"]);
        return answer;
    }
    async findAll() {
        const answers = await MongoAnswerSchema_1.mongoAnswerModel.find().populate(["user", "assessment"]);
        return answers;
    }
    async update(id, answer) {
        await MongoAnswerSchema_1.mongoAnswerModel.findByIdAndUpdate(id, answer);
    }
    async delete(id) {
        await MongoAnswerSchema_1.mongoAnswerModel.findByIdAndDelete(id);
    }
}
exports.MongoAnswerRepository = MongoAnswerRepository;
