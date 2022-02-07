import { Question } from "../../../entities/QuestionModel";
import { IQuestionsRepository } from "../../../../data/repositories/contracts/IQuestionsRepository";

class GetQuestionUseCase {
  private questionsRepository: IQuestionsRepository;

  constructor(questionsRepository: IQuestionsRepository) {
    this.questionsRepository = questionsRepository;
  }

  async execute(id?: string): Promise<Question | Question[]> {
    if (id) {
      const assessment = await this.questionsRepository.findById(id);
      if (!assessment) {
        throw new Error("Questão não encontrada");
      }
      
      return assessment;
    }

    return await this.questionsRepository.findAll();
  }
}

export { GetQuestionUseCase };