"use strict";

//№1
let t_1 = document.querySelector('#t_1');
let b_1 = document.querySelector('#b_1');
b_1.addEventListener('click', () => t_1.value = 'write: ');
//№2
let t_2 = document.querySelector('#t_2');
let b_2 = document.querySelector('#b_2');
let p_1 = document.querySelector('#p_1');
b_2.addEventListener('click', () => p_1.textContent = t_2.value);
//№3

let t_3 = document.querySelector('#t_3');
let t_4 = document.querySelector('#t_4');
let b_3 = document.querySelector('#b_3');
b_3.addEventListener('click', () => t_4.value = t_3.value ** 2);
//№4
let i_arr = document.querySelectorAll('.rev');
let b_4 = document.querySelector('#b_4');
let arr = [];
for(let e of i_arr) {
    arr.unshift(e.value);
}
function getRev(a) {
  for(let i = 0; i < arr.length; i++) {
        a[i].value = arr[i];
    }
}
b_4.addEventListener('click', () => getRev(i_arr));
//№5
let i_arr_1 = document.querySelectorAll('.avg');
function getAvg(a, s = 0, i = a.length) {
    for(let e of a) {
        if(!e.value) i--;
        s += +e.value;
    }
    if(s / i) return s / i;
    return s;
}
let p_2 = document.querySelector('#p_2');
let b_5 = document.querySelector('#b_5');
b_5.addEventListener('click', () => p_2.textContent = getAvg(i_arr_1));
