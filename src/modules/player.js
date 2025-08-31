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

    let x, y;

    do {
      x = Math.floor(Math.random() * enemyBoard.cols);
      y = Math.floor(Math.random() * enemyBoard.rows);
    } while (
      enemyBoard.grid[y][x] === "miss" ||
      enemyBoard.grid[y][x] === "hit"
    );

    const value = this.attack(enemyBoard, x, y);

    return value;
  }
}
