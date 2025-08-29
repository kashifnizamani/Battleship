export class Ship{

    length;
    hits;
    sunk = false;
    

    constructor(length){
        this.length = length;
        this.hits = 0;
       
    }

    hit = () => ++this.hits;

    isSunk(){

        if(this.hits == this.length){
            return this.sunk = true;
        }
        else{
              return this.sunk = false;

        }
      
    }

}