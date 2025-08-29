import { Ship } from "../Ship";



describe("Ship testing", () =>{
    
    let ship = new Ship(2);

    test("length", () => {
        expect(ship.length).toBe(2);
    })

    test("test isSunk", () =>{
        ship.hit();
        
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    })

    test("hit test", () =>{
    
        expect(ship.hits).toBe(2);
    })
    
})