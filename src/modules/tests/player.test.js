import { Player } from "../player"
import { Ship } from "../Ship";


describe("player class testing", () => {

    beforeAll( () =>{
        human = new Player("human");
        bot   = new Player("bot");
    })


    test("attack method test", () => {


    bot.board.placeShip(new Ship(3), 2,3, "horizontal");

    human.board.placeShip(new Ship(5), 3, 4, "vertical")

    expect(human.attack(bot.board, 2, 3)).toBeTruthy();
    expect(bot.board.grid[3][2].hits).toBe(1);
    expect(human.attack(bot.board, 5, 6)).toBeFalsy();
    expect(bot.board.grid[6][5]).toBe("miss");

    })



})