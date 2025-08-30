import { DOMboard } from "./modules/DOMController";
import { Player } from "./modules/player";
import "./style.css";


  const human = new Player("human");
  const bot = new Player("bot");

DOMboard(human.board, human.type);

DOMboard(bot.board, bot.type)