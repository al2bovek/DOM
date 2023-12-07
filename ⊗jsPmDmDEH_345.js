"use strict";
//№1
let buttonN1 = document.querySelector('#id_ba');
buttonN1.addEventListener('dblclick', () => document.write('button a'));
//№2
let buttonN2 = document.querySelector('#id_bb');
buttonN2.addEventListener('mouseover', () => console.log('Hi here'))
//№3
let buttonN3 = document.querySelector('#id_bc');
buttonN3.addEventListener('mouseout', () => console.log('Stay'));
//№4
let buttonN4 = document.querySelector('#id_bd');
buttonN4.addEventListener('mouseover', () => console.log('Hallo'));
buttonN4 = document.querySelector('#id_bd');
buttonN4.addEventListener('mouseout', () => console.log('Goodbye'));