const sketch_board = document.querySelector(".sketch-board");

for(let i = 0; i<256;i++){
    const div = document.createElement("div");
    div.classList.add("grid");
    sketch_board.appendChild(div);

    //dragover
    div.addEventListener("mousemove",()=>
{
    div.classList.add("bg-color");
});

const clear = document.querySelector(".clear");
clear.addEventListener("click",()=>
{
    div.style.cssText = "background-color: white;"
});


const eraser = document.querySelector(".clear");
    eraser.addEventListener("click",()=>
    {
        div.style.cssText = "background-color: white;"
    });

}

