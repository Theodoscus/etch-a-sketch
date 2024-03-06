const sizediv = document.getElementById('size');
const container = document.getElementsByClassName('container')[0];
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
let size = 16;
setGame(size);



increase.onclick = () => increaseSize();
decrease.onclick = () => decreaseSize();
reset.onclick = () => resetGrid();

function setGame(size){
for (let i=0; i < size; i++){
    let row = document.createElement('div');
    row.setAttribute("class","row");
    container.appendChild(row);
    for(let j=0; j<size; j++){
        const box = document.createElement('div')
        box.setAttribute('class','box');
        box.onclick = () => box.style.backgroundColor='black';
        row.appendChild(box);
    }
    
}
    sizediv.textContent= size+"x"+size;

}

function reloadGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function increaseSize(){
    if (size<100){
    size++;
    reloadGrid();
    setGame(size);
    }

}

function decreaseSize(){
    if (size>1){
        size--;
        reloadGrid();
        setGame(size);
    }
}

function resetGrid(){
    size=16;
    reloadGrid();
    setGame(size);
}



