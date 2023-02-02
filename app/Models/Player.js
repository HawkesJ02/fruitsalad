import { generateId } from "../Utils/generateId.js";

export class Player {
  constructor(data){
this.id = generateId()
this.name = data.name
this.score = 0
  }

get activePlayerTemplate(){
  return
  `<h1 class="card-body">Player Name: ${this.name}</h1>
  <h2>Score: ${this.score}</h2> 
  `
}

get allPlayersTemplate(){
    return `
    <div >
    <span>
      <h1 onclick="app.playersController.setActivePlayer('${this.id}')">${this.name}</h1>
      <h2>${this.score}</h2>
    </span>
  </div>
    `
}

}