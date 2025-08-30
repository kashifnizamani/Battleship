
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