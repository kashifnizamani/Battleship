
const humanBoard = document.querySelector(".human-board");
const botBoard = document.querySelector(".bot-board");



export function DOMboard(board, type){

      for (let i = 0; i < board.rows; i++) {
      for (let j = 0; j < board.cols; j++) {
        const cell = document.createElement("button");
        cell.classList.add("cell");
        cell.setAttribute("row", i);
        cell.setAttribute("column", j);

        if(type === "human"){

             humanBoard.appendChild(cell);

        }
        else{
            botBoard.appendChild(cell)
        }
       
      }
    }


}

export function renderHumanBoard(board){

  for(let i = 0; i < board.rows; i++){
    for(let j = 0; j < board.cols; j++){
       const cell = humanBoard.querySelector(`[row="${i}"][column="${j}"]`);
      if(board.grid[i][j] === null){
        continue;
    }
    else if(board.grid[i][j] === "miss"){
      cell.style.backgroundColor = "black";
    }
 
    else if(board.grid[i][j] === "hit"){
       cell.style.backgroundColor = "red";

    }
       else if( typeof board.grid[i][j] === 'object'){

      cell.style.backgroundColor = "green";


    }
  }

}
}

