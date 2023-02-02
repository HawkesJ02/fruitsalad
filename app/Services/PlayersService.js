import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";

class PlayersService{ 
  addNewPlayer(formData){
let newPlayer = new Player(formData)
// console.log(newPlayer);
appState.players.push(newPlayer)
console.log(appState.players);

  }

setActivePlayer(id){
  let foundPlayer = appState.players.find(p => p.id == id)
  appState.activePlayer = foundPlayer
  console.log(foundPlayer)

}


}

export const playersService = new PlayersService()