"use strict";
//№1
let a, b, c;
a = 'a';
b = 'b';
c = a + b;
let button_1, button_2, button_3;
button_1 = document.querySelector('#button1');
button_1.addEventListener('click', () => document.write(a));
button_2 = document.querySelector('#button2');
button_2.addEventListener('click', () => document.write(b));
button_3 = document.querySelector('#button3');
button_3.addEventListener('click', () => document.write(c + b + a));