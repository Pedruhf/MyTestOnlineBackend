import { IQuestionsRepository } from "../../../repositories/IQuestionsRepository";

class DeleteQuestionUseCase {
  private questionsRepository: IQuestionsRepository;

  constructor(questionsRepository: IQuestionsRepository) {
    this.questionsRepository = questionsRepository;
  }

  async execute(id: string): Promise<void> {
    await this.questionsRepository.delete(id);
  }
}

export { DeleteQuestionUseCase };