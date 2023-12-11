let lastOperand = 0;
let operation = null;

const inputWindow = document.querySelector('#inputWindow');

document.querySelector('#btn_1').addEventListener('click', function () {
    inputWindow.value += '1';
});
document.querySelector('#btn_2').addEventListener('click', function () {
    inputWindow.value += '2';
});
document.querySelector('#btn_3').addEventListener('click', function () {
    inputWindow.value += '3';
});
document.querySelector('#btn_4').addEventListener('click', function () {
    inputWindow.value += '4';
});
document.querySelector('#btn_5').addEventListener('click', function () {
    inputWindow.value += '5';
});
document.querySelector('#btn_6').addEventListener('click', function () {
    inputWindow.value += '6';
});
document.querySelector('#btn_7').addEventListener('click', function () {
    inputWindow.value += '7';
});
document.querySelector('#btn_8').addEventListener('click', function () {
    inputWindow.value += '8';
});
document.querySelector('#btn_9').addEventListener('click', function () {
    inputWindow.value += '9';
});
document.querySelector('#btn_0').addEventListener('click', function () {
    inputWindow.value += '0';
});

document.querySelector('#btn_sum').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
});
document.querySelector('#btn_min').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'min';
    inputWindow.value = '';
});
document.querySelector('#btn_by').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'by';
    inputWindow.value = '';
});
document.querySelector('#btn_dev').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'dev';
    inputWindow.value = '';
});
document.querySelector('#btn_sqrt').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sqrt';
    inputWindow.value = '';
});


document.querySelector('#btn_eq').addEventListener('click', function () {
 if (operation === 'sum') {
    const result = parseInt(lastOperand) + parseInt(inputWindow.value);
    lastOperand = 0;
    operation = null;
    inputWindow.value = result;
 } else if (operation === 'min') {
    const result = parseInt(lastOperand) - parseInt(inputWindow.value);
    lastOperand = 0;
    operation = null;
    inputWindow.value = result;
 } else if (operation === 'by') {
    const result = parseInt(lastOperand) * parseInt(inputWindow.value);
    lastOperand = 0;
    operation = null;
    inputWindow.value = result;
 } else if (operation === 'dev') {
    const result = parseInt(lastOperand) / parseInt(inputWindow.value);
    lastOperand = 0;
    operation = null;
    inputWindow.value = result;
 }});
document.querySelector('#btn_sqrt').addEventListener('click', function () {
if (operation === 'sqrt') {
    const result = Math.sqrt(parseInt(lastOperand));
    lastOperand = 0;
    operation = null;
    inputWindow.value = result;
}});

document.querySelector('#btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
});