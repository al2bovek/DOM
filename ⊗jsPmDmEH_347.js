"use strict";
//№1
let p_1 = document.querySelector('#p_1');
let b_1 = document.querySelector('#b_1');
b_1.addEventListener('click', () => console.log(p_1.innerHTML));
//№2
let p_2 = document.querySelector('#p_2');
let b_2 = document.querySelector('#b_2');
b_2.addEventListener('click', () => p_2.innerHTML = `<b>${p_2.textContent}</b>`);