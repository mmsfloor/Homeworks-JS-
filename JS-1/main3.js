var price = 0;
var isCorrect = true;
var isChoosen = true;

var color = prompt('Color? (black/red/silver)');
console.log(color, color==='red');

console.log();


// while (color === '' || color !== 'black' || color !== 'red' || color !== 'silver') {
//         color = prompt('Color? (try again)');
//     }
//     if(color == 'black') {
//         price = 15;
//         document.write('<img src=black1.png>');
//     }
//     else if(color == 'red') {
//         price = 10;
//         document.write('<img src=red.png>');
//     }
//     else if(color == 'silver') {
//         price = 20;
//         document.write('<img src=silver.png>');
//     }  
//     else {
//         isCorrect = false;
//         isChoosen = false;
//         document.write('<img src=default.png>');
//     }

if(isChoosen) {
    var memory = prompt('Memory?');
    while (+memory!==128 || +memory!==256 || +memory!==512) {
        memory = prompt('Memory? (try again)');
    }
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


if (isCorrect) {
    document.write('<h1>Price: ' + price + '$</h1>');
}





