"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoAssessmentRepository = void 0;
const AssessmentModel_1 = require("../../models/AssessmentModel");
class MongoAssessmentRepository {
    async save(assessment) {
        await AssessmentModel_1.mongoAssessment.create(assessment);
    }
    async findById(id) {
        const assessment = await AssessmentModel_1.mongoAssessment.findById(id).populate(["user", "questions"]);
        return assessment;
    }
    async findAll() {
        const assessments = await AssessmentModel_1.mongoAssessment.find().populate(["user", "questions"]);
        return assessments;
    }
    async update(id, assessment) {
        const updateAssessment = await AssessmentModel_1.mongoAssessment.findByIdAndUpdate(id, assessment);
        return updateAssessment;
    }
    async delete(id) {
        await AssessmentModel_1.mongoAssessment.findByIdAndDelete(id);
    }
}
exports.MongoAssessmentRepository = MongoAssessmentRepository;
