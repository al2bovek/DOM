"use strict";
//№1
let p_1 = document.querySelector('#p_1');
let btn_1 = document.querySelector('#bp_1');
btn_1.addEventListener('click', () => console.log(p_1.textContent));
//№2
let p_2 = document.querySelector('#p_2');
let btn_2 = document.querySelector('#bp_2');
btn_2.addEventListener('click', () => p_2.textContent = 'абзац2');
//№3
let p_3 = document.querySelector('#p_3');
let p_4 = document.querySelector('#p_4');
let btn_3 = document.querySelector('#bp_3');
btn_3.addEventListener('click', () => console.log(+p_3.textContent + +p_4.textContent));
//№4
let p_5 = document.querySelector('#p_5');
let p_6 = document.querySelector('#p_6');
let p_7 = document.querySelector('#p_7');
let d_1 = document.querySelector('#d_1');
let btn_4 = document.querySelector('#bp_4');
btn_4.addEventListener('click', () => d_1.textContent = 'result = ' + (+p_4.textContent + +p_6.textContent + +p_7.textContent) + ';');
//№5
let p_8 = document.querySelector('#p_8');
let btn_5 = document.querySelector('#bp_5');
btn_5.addEventListener('click', () => p_8.textContent = +p_8.textContent + 1);
//№6
let p_9 = document.querySelector('#p_9');
let btn_6 = document.querySelector('#bp_6');
btn_6.addEventListener('click', () => p_9.textContent = p_9.textContent + '!');
