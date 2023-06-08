const sketch_board = document.querySelector(".sketch-board");

for(let i = 0; i<256;i++){
    const  div = document.createElement("div");
    div.classList.add("grid");
    sketch_board.appendChild(div);

}