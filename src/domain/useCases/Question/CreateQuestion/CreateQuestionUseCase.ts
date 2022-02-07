import { Question } from "../../../entities/QuestionModel";
import { IAssessmentRepository } from "../../../../data/repositories/contracts/IAssessmentsRepository";
import { IQuestionsRepository } from "../../../../data/repositories/contracts/IQuestionsRepository";
import { ICreateQuestionRequestDTO } from "./CreateQuestionRequestDTO";

class CreateQuestionUseCase {
  private questionsRepository: IQuestionsRepository;
  private assessmentsRepository: IAssessmentRepository;

  constructor(questionsRepository: IQuestionsRepository, assessmentsRepository: IAssessmentRepository) {
    this.questionsRepository = questionsRepository;
    this.assessmentsRepository = assessmentsRepository;
  }

  async execute(data: ICreateQuestionRequestDTO): Promise<void> {
    const assessment = await this.assessmentsRepository.findById(data.assessment);
    if (!assessment) {
      throw new Error("Avaliação não encontrada");
    }

    const question = new Question(data);
    await this.questionsRepository.save(question);

    await this.assessmentsRepository.update(data.assessment, {
      title: assessment.title,
      description: assessment.description,
      questions: [...assessment.questions, question._id],
    });
  }
}

export { CreateQuestionUseCase };