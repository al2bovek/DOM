"use strict";
//№1
let d_1 = document.querySelector('#elem');
let b_1 = document.querySelector('#b_1');
b_1.addEventListener('click', () => console.log(d_1.className));
//№2
let d_2 = document.querySelector('#elem2');
let b_2  = document.querySelector('#b_2');
b_2.addEventListener('click', () => d_2.className = 'className');
//<div id="elem2" class="className"></div>
//№3
let d_3 = document.querySelector('#elem3');
let b_3  = document.querySelector('#b_3');
b_3.addEventListener('click', () => console.log(d_3.className.split(' ')));