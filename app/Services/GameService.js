import { ProxyState } from "../AppState.js";
import { Question } from "../Models/Question.js";
import { triviaApi } from "./AxiosService.js"

class GameService {
  answerQuestion(answer, qId) {
    const foundQuestion = ProxyState.questions.find(q => q.id == qId)
    if (foundQuestion.correctAnswer == answer) {
      return true
    }
    return false
  }
  async getQuestions() {
    const res = await triviaApi.get('')
    console.log('questions res', res);
    ProxyState.questions = res.data.results.map(q => new Question(q))
    console.log(ProxyState.questions);
  }
}

export const gameService = new GameService()