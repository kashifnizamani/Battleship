import { playGame } from "./modules/driver";
import "./style.css";
const restart = document.querySelector(".restart")

playGame();

restart.addEventListener("click", () => {

    console.log("restart clicked")
    playGame();

});

