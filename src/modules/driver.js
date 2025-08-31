import { DOMboard, renderHumanBoard } from "./DOMController";
import { Player } from "./player";
import { Ship } from "./Ship";

const humanBoard = document.querySelector(".human-board");
const botBoard = document.querySelector(".bot-board");

export function playGame() {
  const human = new Player("human");
  const bot = new Player("bot");

  console.log(humanBoard);

  human.board.placeShip(new Ship(5), 0, 0, "horizontal"); 
  human.board.placeShip(new Ship(4), 2, 2, "vertical"); 
  human.board.placeShip(new Ship(3), 5, 5, "horizontal"); 
  human.board.placeShip(new Ship(3), 7, 1, "vertical"); 
  human.board.placeShip(new Ship(2), 9, 7, "vertical"); 

  // Computer ships
  bot.board.placeShip(new Ship(5), 4, 9, "horizontal");
  bot.board.placeShip(new Ship(4), 0, 5, "vertical");
  bot.board.placeShip(new Ship(3), 6, 2, "vertical");
  bot.board.placeShip(new Ship(3), 3, 0, "horizontal");
  bot.board.placeShip(new Ship(2), 8, 3, "vertical");

  DOMboard(human.board, human.type);
  renderHumanBoard(human.board);

  DOMboard(bot.board, bot.type);

  botBoard.addEventListener("click", (e) => {
    if (e.target.classList.contains("cell")) {
      const row = e.target.getAttribute("row");
      const col = e.target.getAttribute("column");

      const value = human.attack(bot.board, col, row);
      if (value === true) {
        e.target.style.backgroundColor = "red";
      } else {
        e.target.style.backgroundColor = "black";
      }
      setTimeout(() => {
        bot.randomAttack(human.board);
        renderHumanBoard(human.board);
      }, 100);
    }
  });
}
