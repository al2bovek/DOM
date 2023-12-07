"use strict";
//№1
let i_1 = document.querySelector('#i_1');
i_1.addEventListener('focus', () => i_1.value = 1);
i_1.addEventListener('blur', () => i_1.value = 2);
//№2
let i_2 = document.querySelector('#i_2');
i_2.addEventListener('focus', () => i_2.value = '');
i_2.addEventListener('blur', () => i_2.value = i_2.value**2);
//№3
let i_3 = document.querySelector('#i_3');
i_3.addEventListener('focus', () => i_3.value = '');
