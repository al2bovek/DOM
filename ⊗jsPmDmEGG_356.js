"use strict";
//№1
let b_1 = document.querySelector("#b_1");
b_1.addEventListener('click', fillPar);
function fillPar() {
    let parArr = document.querySelectorAll('p');
    for(let e of parArr) {
        e.textContent = 'text';
    }
}
//№2
let b_2 = document.querySelector("#b_2");
b_2.addEventListener('click', fillPar_1);
function fillPar_1() {
    let parArr_1 = document.querySelectorAll('p.par');
    for(let i = 0; i < parArr_1.length; i++) {
        parArr_1[i].textContent += i;
    }
}
//№3
let p_1 = document.querySelector('.parNum');
let b_3 = document.querySelector("#b_3");
b_3.addEventListener('click', getSum);
function getSum() {
    let numArr = document.querySelectorAll('input.num');
    let sum = 0;
    let i = numArr.length;
    for(let e of numArr) {
        sum += +e.value;
        if(!e.value) i--;
        if(!i) i = 1;
    }
    return p_1.textContent = sum / i;;
}