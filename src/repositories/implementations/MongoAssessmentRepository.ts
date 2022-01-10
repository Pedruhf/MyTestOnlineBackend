import { Assessment, mongoAssessment } from "../../models/AssessmentModel";
import { IAssessmentRepository } from "../IAssessmentsRepository";

class MongoAssessmentRepository implements IAssessmentRepository {
  async save(assessment: Assessment): Promise<void> {
    await mongoAssessment.create(assessment);
  }

  async findById(id: string): Promise<Assessment> {
    const assessment = await mongoAssessment.findById(id).populate(["user", "questions"]);
    return assessment;
  }

  async findAll(): Promise<Assessment[]> {
    const assessments = await mongoAssessment.find().populate(["user", "questions"]);
    return assessments;
  }

  async update(id: string, assessment: Assessment): Promise<Assessment> {
    const updateAssessment = await mongoAssessment.findByIdAndUpdate(id, assessment);
    return updateAssessment;
  }

  async delete(id: string): Promise<void> {
    await mongoAssessment.findByIdAndDelete(id);
  }
  
}

export { MongoAssessmentRepository };