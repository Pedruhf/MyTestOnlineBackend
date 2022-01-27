"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoAssessmentRepository = void 0;
const MongoAssessmentSchema_1 = require("./schemas/MongoAssessmentSchema");
class MongoAssessmentRepository {
    async save(assessment) {
        await MongoAssessmentSchema_1.mongoAssessmentModel.create(assessment);
    }
    async findById(id) {
        const assessment = await MongoAssessmentSchema_1.mongoAssessmentModel.findById(id).populate(["user", "questions"]);
        return assessment;
    }
    async findAll() {
        const assessments = await MongoAssessmentSchema_1.mongoAssessmentModel.find().populate(["user", "questions"]);
        return assessments;
    }
    async update(id, assessment) {
        const updateAssessment = await MongoAssessmentSchema_1.mongoAssessmentModel.findByIdAndUpdate(id, assessment);
        return updateAssessment;
    }
    async delete(id) {
        await MongoAssessmentSchema_1.mongoAssessmentModel.findByIdAndDelete(id);
    }
}
exports.MongoAssessmentRepository = MongoAssessmentRepository;
