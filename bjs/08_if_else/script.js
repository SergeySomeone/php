let minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber}?`;

minValue = (minValue < -999) ? minValue = -999 : (minValue > 999) ? minValue = 999 : minValue;
maxValue = (maxValue > 999) ? maxValue = 999 : (maxValue < -999) ? maxValue = -999 : maxValue;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = -999;
    maxValue = 999;
    orderNumber = 0;
    orderNumberField.innerText='1';
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    answerField.innerText = `Вы загадали число ${answerNumber}?`;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const askPhrases = [`Спорим это ${answerNumber }?\n\u{1F61C}`, `И не говори, что это не ${answerNumber }!\n\u{1F621}`, `А может ${answerNumber }?\n\u{1F62B}`];
            const listAskPhrases = askPhrases[Math.floor( Math.random() * 3)];
            answerField.innerText = listAskPhrases;
                 }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const askPhrases = [`Спорим это ${answerNumber }?\n\u{1F61C}`, `И не говори, что это не ${answerNumber }!\n\u{1F621}`, `А может ${answerNumber }?\n\u{1F62B}`];
            const listAskPhrases = askPhrases[Math.floor( Math.random() * 3)];
            answerField.innerText = listAskPhrases;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const luckPhrases = [`Я угадал!\n\u{1F602}`, `Проще простого!\n\u{1F60B}`, `Еще разок?\n\u{1F60F}`];
        const luckAnswerPhrase = luckPhrases[Math.floor( Math.random() * 3)];
        answerField.innerText = luckAnswerPhrase;
        gameRun = true;
    }
})
