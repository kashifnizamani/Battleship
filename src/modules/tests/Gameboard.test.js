
import { Gameboard } from "../Gameboard";
import { Ship } from "../Ship";

 const ship = new Ship(3)

describe("Gameboard tests", () =>{

    const board = new Gameboard();
    
    test("Check Grid Size", () =>{

        expect(board.grid.length).toBe(10)

        board.grid.forEach(element => {
            
            expect(element.length).toBe(10);
            
        })

    })

    test("placement of Ships", () => {

   

    expect(board.placeShip(ship, 3, 2, "horizontal")).toBe(board.grid);
     expect(board.grid[2][3]).toBe(ship);
        expect(board.grid[2][4]).toBe(ship);
          expect(board.grid[2][5]).toBe(ship);
             expect(board.grid[2][6]).toBe(null);


    })

    test("vertical ship out of bounds throws error", () => {

  
  expect(() => board.placeShip(ship, 2, 8, "vertical")).toThrow(RangeError);
});

     test("receive attack functionality", () => {

        expect(board.receiveAttack(3,2)).toBeTruthy();
        expect(board.receiveAttack(5,7)).toBeFalsy();
        expect(board.grid[2][3].hits).toBe(1);
        expect(board.grid[7][5]).toBe("miss");

        

     })


    


})



describe("Gameboard allSunk()", () => {
  let board;
  let ship1;
  let ship2;

  beforeEach(() => {
    board = new Gameboard();
    ship1 = new Ship(2); 
    ship2 = new Ship(3); 
    board.ships = [ship1, ship2]; 
  });

  test("returns false when at least one ship is not sunk", () => {
    ship1.hit(); 
    expect(board.allSunk()).toBe(false);
  });

  test("returns true when all ships are sunk", () => {
    
    ship1.hit();
    ship1.hit();

   
    ship2.hit();
    ship2.hit();
    ship2.hit();

    expect(board.allSunk()).toBe(true);
  });
});
