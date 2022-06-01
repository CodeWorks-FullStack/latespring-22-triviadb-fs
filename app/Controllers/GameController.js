import { ProxyState } from "../AppState.js";
import { gameService } from "../Services/GameService.js";
import { Pop } from "../Utils/Pop.js";


function _drawQuestions() {
  let template = ''
  ProxyState.questions.forEach(q => template += q.Template)
  document.getElementById('questions').innerHTML = template
}

export class GameController {
  constructor() {
    console.log('gamiiiinnnnnn');
    ProxyState.on('questions', _drawQuestions)
    this.getQuestions()
  }
  async getQuestions() {
    try {
      await gameService.getQuestions()
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, 'error')
    }
  }

  answerQuestion(answer, qId) {
    console.log('answer:', answer, "question:", qId);
    if (gameService.answerQuestion(answer, qId)) {
      Pop.toast("YOU ARE CORRECTTTTT", 'success')
    } else {
      Pop.toast('garbo answer bruh', 'error')
    }

  }
}