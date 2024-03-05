const sizediv = document.getElementById('size');
let size = 16;
function reload(){
    size = 16;
    sizediv.textContent=size+"x"+size;
  
}

sizediv.textContent= size+"x"+size;
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');

reset.onclick = () => reload();

