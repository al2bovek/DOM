"use strict";
//№1
let elems = document.querySelectorAll('.d_1 p');
for(let e of elems) e.textContent += '!';
//№2
let elems_1 = document.querySelectorAll('.d_2 p');

for (let elem of elems_1) {
    elem.addEventListener('click', function() {
        this.textContent ++;
    });
}
//№3
let button_3 = document.querySelector('.b_3');
let elem   = document.querySelector('.p_3');

button_3.addEventListener('click', function() {
    elem.innerHTML = `<b>${elem.innerHTML}</b>`;
});
//№4
let button_4 = document.querySelector('.b_4');
let elems_4  = document.querySelectorAll('.d_4 p');

button_4.addEventListener('click', function() {
    let sum = 0;

    for (let elem of elems_4) {
        sum += Number(elem.textContent);
    }

    console.log(sum);
});
//№5
let elems_5 = document.querySelectorAll('.d_5 p');

for (let elem of elems_5) {
    elem.addEventListener('click', function() {
        this.textContent += '!';
    });
}
//№6
let button_6 = document.querySelector('.b_6');
let elems_6  = document.querySelectorAll('.d_6 p');
button_6.addEventListener('click', function() {
    for(let e of elems_6) e.innerHTML = '<b>' + e.innerHTML + '</b>'
}); 
//№7
let button_7 = document.querySelector('.b_7');
let elems_7  = document.querySelectorAll('.d_7 p');
let sum = 0;

for (let elem of elems_7) {
    sum += +elem.textContent;

    button_7.addEventListener('click', function() {
        console.log(sum);
    });
}
//№8
let button_8 = document.querySelector('.b_8');
let elems_8  = document.querySelectorAll('.d_8 input');
button_8.addEventListener('click', function() {
    let sum_8 = 0;
    for (let elem of elems_8) {
        sum_8 += +elem.value;
    }
    console.log(sum_8);
});
//№9
let btn  = document.querySelector('#btn');
let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');
let inp3 = document.querySelector('#inp3');
btn.addEventListener('click', function() {
    inp3.value = +inp1.value + +inp2.value;
});
//№10
let btn_10  = document.querySelector('#btn_10');
let res  = document.querySelector('#res');
let inp_1 = document.querySelector('#inp_10');
let inp_2 = document.querySelector('#inp_10_1');
btn_10.addEventListener('click', function() {
	res.textContent = +inp_10.value + +inp_10_1.value;
});
//№11
let inputs = document.querySelectorAll('.d_11 input')
let btn_11 = document.querySelector('#btn_11')

btn_11.addEventListener('click',function() {
	for (let input of inputs) {
		if (input.id === input.dataset) {
			input.classList.add('right')
		} else {
			input.classList.add('wrong')
		}
	}
});
console.log(inputs[0].value, inputs[0].dataset, inputs[0].classList)
//№12
let inputs_12 = document.querySelectorAll('#d_12 input')
let btn_12 = document.querySelector('#btn_12')

let texts = [
	'text1',
	'text2',
	'text3',
];

btn_12.addEventListener('click',function() {
	for (let input of inputs_12) {
		for (let text of texts) {
			if (input.value === text) {
				input.classList.add('right')
			} else {
				input.classList.add('wrong')
			}
		}
	}
});
console.log(inputs_12[0].value, texts[0], inputs_12[0].classList)
//№13
let inputs_13 = document.querySelectorAll('#d_13 input');
let btn_13 = document.querySelector('#btn_13');
let sum_13;
btn_13.addEventListener('click', () => sum_13 = 0);
btn_13.addEventListener('click', function() {
	for (let input of inputs_13) {
		sum_13 += Number(input.value);
	}
	console.log(sum_13);
});
//№14
let btn_14  = document.querySelector('#btn_14');
let inp1_14 = document.querySelector('#inp1_14');
let inp2_14 = document.querySelector('#inp2_14');
let inp3_14 = document.querySelector('#inp3_14');
btn_14.addEventListener('click', function() {
inp3_14.value  = +inp1_14.value + +inp2_14.value;
});
//№15
let inp_15 = document.querySelector('#inp_15');
console.log(inp_15)

inp_15.addEventListener('blur', function() {
	let digits = inp_15.value.split('');
	let sum_15 = 0;
	
	for (let digit of digits) {
		sum_15 += +digit;
	}
	
	console.log(sum_15);
});