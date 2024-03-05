const sizediv = document.getElementById('size');
const container = document.getElementsByClassName('container')[0];
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');

let size = 16;
setGame(size);
sizediv.textContent= size+"x"+size;


function setGame(size){
for (let i=0; i < size; i++){
    let row = document.createElement('div');
    row.setAttribute("class","row");
    container.appendChild(row);
    for(let j=0; j<size; j++){
        const box = document.createElement('div')
        box.setAttribute('class','box');
        row.appendChild(box);
        console.log(j);
    }
    
}
}


