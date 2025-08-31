import { Ship } from "./Ship";

export class Gameboard {
  cols = 10;
  rows = 10;
  grid = [];
  ships = [];

  constructor() {
    for (let i = 0; i < this.rows; i++) {
      this.grid[i] = [];
      for (let j = 0; j < this.cols; j++) {
        this.grid[i][j] = null;
      }
    }
  }

  placeShip(ship, startX, startY, orientation) {

    if(this.#boardValidate(ship, startX, startY, orientation)){
        if(orientation === "horizontal"){

            for (let i = 0; i < ship.length; i++) {
             this.grid[startY][startX + i] = ship;
            }
            this.ships.push(ship)
            return this.grid;
        }
        else if(orientation === "vertical"){

            for (let i = 0; i < ship.length; i++) {
              this.grid[startY + i][startX] = ship;
         }
           this.ships.push(ship)
           return this.grid
        }
    }
    else{
        throw new RangeError("cannot place ship")
    }

  }

  #boardValidate(ship, startX, startY, orientation) {
    if (orientation === "horizontal") {
      if (startX + ship.length - 1 < this.grid.length) {
        for (let i = 0; i < ship.length; i++) {
          if (this.grid[startY][startX + i] !== null) return false;
        }
        return true;
      }
    } else if (orientation === "vertical") {
      if (startY + ship.length - 1 < this.grid.length) {
        for (let i = 0; i < ship.length; i++) {
          if (this.grid[startY + i][startX] !== null) return false;
        }
        return true;
      }
    } else {
      return false;
    }
  }

  receiveAttack(x, y){

     const target = this.grid[y][x];
     if(target === "miss"){
      return;
     }
  else if (typeof target === 'object' && target !== null) {
    target.hit(); 
    this.grid[y][x] = "hit"; 
    return true;   
  } else if(target === null){
    this.grid[y][x] = "miss"; 
    return false;
  }

  }

allSunk() {
  for (const ship of this.ships) {
    if (!ship.isSunk()) {
      return false;
    }
  }
  return true;
}

}
