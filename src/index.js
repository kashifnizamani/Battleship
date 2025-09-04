import { playGame } from "./modules/driver";
import { Player } from "./modules/player";
import "./style.css";

  const human = new Player("human");
  const bot = new Player("bot");



const restartBtn = document.querySelector(".restart");

restartBtn.addEventListener("click", () => {
  document.querySelector(".human-board").innerHTML = "";
  document.querySelector(".bot-board").innerHTML = "";
  document.querySelector(".gameOver").close();

  playGame(new Player("human"), new Player("bot"));
});



playGame(human, bot);

