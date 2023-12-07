"use strict";
//№1
let elem_1 = document.querySelector('#elem_1');
let btn_1 = document.querySelector('#b_1');
btn_1.addEventListener('click', () => elem_1.value = elem_1.type);
//№2
let elem_2 = document.querySelector('#elem_2');
let btn_2 = document.querySelector('#b_2');
btn_2.addEventListener('click', () => {elem_2.type = 'submit', elem_2.value = elem_2.type});
//№3
let a_1 = document.querySelector('#a_1');
let b_3 = document.querySelector('#b_3');
let p_1 = document.querySelector('#p_1');
b_3.addEventListener('click', () => p_1.textContent = a_1.href);
//№4
let a_2 = document.querySelector('#a_2');
let b_4 = document.querySelector('#b_4');
b_4.addEventListener('click', () => a_2.textContent = `${a_2.textContent} (${a_2.href})`);
//№5
let i_1 = document.querySelector('#i_1');
let b_5 = document.querySelector('#b_5');
let p_2 = document.querySelector('#p_2');
b_5.addEventListener('click', () => p_2.textContent = i_1.src);
//№6
let b_6 = document.querySelector('#b_6');
b_6.addEventListener('click', () => i_1.width = 300);
//№7
let b_7 = document.querySelector('#b_7');
b_7.addEventListener('click', () => i_1.width = 2 * i_1.width);
//№8
let i_2 = document.querySelector('#i_2');
let i_3 = document.querySelector('#i_3');
let b_8 = document.querySelector('#b_8');
let b_9 = document.querySelector('#b_9');
b_8.addEventListener('click', () => i_2.src = i_3.src);
b_9.addEventListener('click', () => i_3.src = i_2.src);