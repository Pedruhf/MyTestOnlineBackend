import { IAssessment } from "../../models/AssessmentModel";
import { IAssessmentRepository } from "../IAssessmentsRepository";
import { mongoAssessmentModel } from "./schemas/MongoAssessmentSchema";

class MongoAssessmentRepository implements IAssessmentRepository {
  async save(assessment: IAssessment): Promise<void> {
    await mongoAssessmentModel.create(assessment);
  }

  async findById(id: string): Promise<IAssessment> {
    const assessment = await mongoAssessmentModel.findById(id).populate(["user", "questions"]);
    return assessment;
  }

  async findAll(): Promise<IAssessment[]> {
    const assessments = await mongoAssessmentModel.find().populate(["user", "questions"]);
    return assessments;
  }

  async update(id: string, assessment: IAssessment): Promise<IAssessment> {
    const updateAssessment = await mongoAssessmentModel.findByIdAndUpdate(id, assessment);
    return updateAssessment;
  }

  async delete(id: string): Promise<void> {
    await mongoAssessmentModel.findByIdAndDelete(id);
  }
}

export { MongoAssessmentRepository };
