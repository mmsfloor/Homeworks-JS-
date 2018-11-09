var color = prompt('Color? (black/red/silver)');
var price = 0;
var isCorrect = true;
var isChoosen = true;

if (color === null) {
    isCorrect = false;
    isChoosen = false;
    document.write('<h2>Вы не ввели цвет</h2>');
}
else {
    if(color == 'black') {
        price = 15;
        document.write('<img src=../img/black1.png>');
    }
    else if(color == 'red') {
        price = 10;
        document.write('<img src=../img/red-iphone.png>');
    }
    else if(color == 'silver') {
        price = 20;
        document.write('<img src=../img/silver.png>');
    }  
    else {
        isCorrect = false;
        isChoosen = false;
        document.write('<img src=../img/default.png>');
    }
}

if(isChoosen) {
    var memory = prompt('Memory?');
    if (memory === null) {
        isCorrect = false;
        isChoosen = false;
        document.write('<h2>Вы не ввели размер памяти</h2>');
    }
    else {
        if(+memory===128) {
            price = price + 300;
        }
        else if(+memory===256) {
            price = price + 400;
        }
        else if(+memory===512) {
            price = price + 500;
        }
        else {
            isCorrect = false;
            document.write ('No such memory')
        }
    }
}

if (isCorrect) {
    document.write('<h1>Price: ' + price + '$</h1>');
}





