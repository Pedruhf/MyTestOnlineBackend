import { IAssessmentRepository } from "../../../repositories/IAssessmentsRepository";
import { IQuestionsRepository } from "../../../repositories/IQuestionsRepository";
import { ICreateQuestionRequestDTO } from "./CreateQuestionRequestDTO";

class CreateQuestionUseCase {
  private questionsRepository: IQuestionsRepository;
  private assessmentsRepository: IAssessmentRepository;

  constructor(questionsRepository: IQuestionsRepository, assessmentsRepository: IAssessmentRepository) {
    this.questionsRepository = questionsRepository;
    this.assessmentsRepository = assessmentsRepository;
  }

  async execute(data: ICreateQuestionRequestDTO): Promise<void> {
    const assessment = await this.assessmentsRepository.findById(data.assessment as unknown as string);
    if (!assessment) {
      throw new Error("Avaliação não encontrada");
    }

    const question = await this.questionsRepository.save(data);

    await this.assessmentsRepository.update(data.assessment as unknown as string, {
      title: assessment.title,
      description: assessment.description,
      questions: [...assessment.questions, question._id],
    });
  }
}

export { CreateQuestionUseCase };