import { PlayersController } from "./Controllers/PlayersController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
playersController = new PlayersController()
}

window["app"] = new App();
