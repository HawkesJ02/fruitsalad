import { appState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import { getFormData } from "../Utils/FormHandler.js";
import { playersService } from "../Services/PlayersService.js";
import { setHTML } from "../Utils/Writer.js";
import { Player } from "../Models/Player.js";
// import { Player } from "../Models/Player.js";

function _drawPlayer(){
  let activePlayer = appState.activePlayer
    
  setHTML('active-player', activePlayer.activePlayerTemplate)
  };


function _drawPlayers(){
  let players = appState.players
  let template = ''
  players.forEach(p => template += p.allPlayersTemplate)
  setHTML('allPlayers', template)
}

export class PlayersController{
constructor(){
  console.log('test player-c constructor');
  _drawPlayers()
  
}

setActivePlayer(id){
try {
  playersService.setActivePlayer(id)
  _drawPlayer()
} catch (error) {
  Pop.error(error)
  console.error(error)
}
}

addNewPlayer(){
  try {
    // @ts-ignore
    window.event.preventDefault()
    // @ts-ignore
    const form = window.event.target
    const formData = getFormData(form)
    console.log(formData);
    playersService.addNewPlayer(formData)
    _drawPlayers()
  } catch (error) {
    Pop.error(error)
  }
}
}