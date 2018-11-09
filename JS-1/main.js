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
        document.write('black'+'<br></br>');
    }
    else if(color == 'red') {
        document.write('red'+'<br></br>');
    }
    else if(color == 'silver') {
        document.write('silver'+'<br></br>');
    }  
    else {
        isCorrect = false;
        isChoosen = false;
        document.write('default');
    }
}

if(isChoosen) {
    var memory = prompt('Memory?');
    if (color === null) {
        isCorrect = false;
        isChoosen = false;
        document.write('<h2>Вы не ввели размер памяти</h2>');
    }
    else {
        if(+memory===128) {
            price = 300;
        }
        else if(+memory===256) {
            price = 400;
        }
        else if(+memory===512) {
            price = 500;
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





