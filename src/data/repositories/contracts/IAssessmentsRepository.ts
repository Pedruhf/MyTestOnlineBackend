import { IAssessment } from "../../../domain/entities/AssessmentModel";

interface IAssessmentRepository {
  save(assessment: IAssessment): Promise<void>;
  findById(id: string): Promise<IAssessment>;
  findAll(): Promise<IAssessment[]>;
  update(id: string, assessment: Omit<IAssessment, "user" | "_id">): Promise<IAssessment>;
  delete(id: string): Promise<void>;
}

export { IAssessmentRepository };