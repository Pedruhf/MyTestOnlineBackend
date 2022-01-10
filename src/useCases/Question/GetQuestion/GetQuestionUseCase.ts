import { Question } from "../../../models/QuestionModel";
import { IQuestionsRepository } from "../../../repositories/IQuestionsRepository";

class GetQuestionUseCase {
  private questionsRepository: IQuestionsRepository;

  constructor(questionsRepository: IQuestionsRepository) {
    this.questionsRepository = questionsRepository;
  }

  async execute(id?: string): Promise<Question | Question[]> {
    if (id) {
      return await this.questionsRepository.findById(id);
    }

    return await this.questionsRepository.findAll();
  }
}

export { GetQuestionUseCase };