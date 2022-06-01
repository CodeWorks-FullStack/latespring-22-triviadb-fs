import { GameController } from "./Controllers/GameController.js";

class App {
  gameController = new GameController()
}

window["app"] = new App();
