var boxes = [
    {
        size: 'small',
        capacity: 3
    },
    {
        size: 'medium',
        capacity: 7
    },
    {
        size: 'large',
        capacity: 20
    }
];

var cart = [];

var goods = [
    {
        name: 'water',
        weight: 20
    },
    {
        name: 'cookies',
        weight: 5 
    },
    {
        name: 'napkins',
        weight: 1
    }
];

console.log('All products:');
for (var i=0; i<goods.length; i++) {
    console.log(goods[i].name);
}

var chosenWeight = 0;

while (true) {
    var chosenProduct = prompt('Choose a products');
    if (chosenProduct === null) {
        break;
    }
    for (var i = 0; i<goods.length; i++) {
        if(chosenProduct===goods[i].name) {
            chosenWeight+=goods[i].weight;
            cart.unshift(goods[i].name);
            break;
        }
    }
}


var viewSelected = confirm('Do you want to view selected products?');
if (viewSelected==true) { 
    console.log('Your cart: ' + cart);
}

console.log('Total weight: ' + chosenWeight);

var maxCapacity = boxes[0].capacity;
for (var i = 1; i<boxes.length; i++) {
    if(boxes[i].capacity>maxCapacity) {
        maxCapacity = boxes[i].capacity;
        var maxCapacityInd = i;
    }
} 

var boxCount = 0;
while (true) {
    if(chosenWeight>=maxCapacity) {
        chosenWeight-=maxCapacity;
        boxCount++;
    }
    else {
        break;
    }
} 

for (var i=0; i<boxes.length; i++) {
    if(chosenWeight == 0) {
        break;
    }
    if(+chosenWeight<=boxes[i].capacity) {
        var min = boxes[i].capacity;
        for(var j=i; j<boxes.length; j++) {
            if(+min>=boxes[j].capacity) {
                min=boxes[j].capacity;
                var minIndex = j;
            }
        }     
    break;
    }
}

console.log('Boxes: ')
console.log('x'+ boxCount + ' - ' + boxes[maxCapacityInd].size);
if (chosenWeight == true) {
    console.log('x1 - ' + boxes[minIndex].size);
}





 

