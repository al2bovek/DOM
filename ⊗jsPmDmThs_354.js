"use strict";
//№1
let i_1 = document.querySelector('#i_1');
i_1.addEventListener('focus', function() {this.value = 1});
i_1.addEventListener('blur', function() {this.value = 2});
//№2
let b_1 = document.querySelector('#b_1');
b_1.addEventListener('click', function() {this.value++});