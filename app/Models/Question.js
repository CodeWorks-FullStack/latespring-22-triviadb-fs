import { generateId } from "../Utils/generateId.js"

export class Question {
  constructor(data) {
    this.id = generateId()
    this.type = data.type
    this.question = data.question
    this.category = data.category
    this.correctAnswer = data.correct_answer
    this.difficulty = data.difficulty
    this.answers = this.shuffleAnswers([...data.incorrect_answers, data.correct_answer])
  }

  shuffleAnswers(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  }

  get Template() {
    return /*html*/ `
    <div class="col-10 mt-3">
      <div class="bg-light shadow rounded text-center p-2">
        <h2>${this.question}</h2>
        <div class="row justify-content-center mt-3">
          <div class="col-md-6 d-flex flex-column">
            ${this.Buttons}
          </div>
        </div>
      </div>
   </div>
    `
  }

  get Buttons() {
    let template = ''
    this.answers.forEach((a, i) => template += /*html*/ `<button class="btn btn-success mt-2" onclick="app.gameController.answerQuestion('${a}', '${this.id}')">${i + 1}- ${a}</button>`)
    return template
  }


}