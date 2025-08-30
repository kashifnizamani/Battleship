import { Gameboard } from "./Gameboard";

export class Player {
  constructor(type) {
    this.type = type;              
    this.board = new Gameboard();  
  }

  attack(enemyBoard, x, y) {
    return enemyBoard.receiveAttack(x, y); 
  }

  randomAttack(enemyBoard) {
    if (this.type !== "bot") {
      
      throw new Error("Only computer players can make random moves");
    }

    const x = Math.floor(Math.random() * enemyBoard.cols);
    const y = Math.floor(Math.random() * enemyBoard.rows);

    return this.attack(enemyBoard, x, y);
  }
}
