import { IQuestionsRepository } from "../../../repositories/IQuestionsRepository";
import { IUpdateQuestionRequestDTO } from "./UpdateQuestionRequestDTO";

class UpdateQuestionUseCase {
  private questionsRepository: IQuestionsRepository;

  constructor(questionsRepository: IQuestionsRepository) {
    this.questionsRepository = questionsRepository;
  }

  async execute(id: string, data: IUpdateQuestionRequestDTO): Promise<void> {
    await this.questionsRepository.update(id, data);
  }
}

export { UpdateQuestionUseCase };