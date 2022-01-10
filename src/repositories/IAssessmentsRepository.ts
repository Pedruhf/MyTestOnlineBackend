import { Assessment } from "../models/AssessmentModel";

interface IAssessmentRepository {
  save(assessment: Assessment): Promise<void>;
  findById(id: string): Promise<Assessment>;
  findAll(): Promise<Assessment[]>;
  update(id: string, assessment: Omit<Assessment, 'user'>): Promise<Assessment>;
  delete(id: string): Promise<void>;
}

export { IAssessmentRepository };