// ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*

let discount = prompt('Какая скидка?');

let totalSale = 0

let total = 0

let max = {}

let min = {}

let average = 0

let arr = [

{

name: 'Milk',

price: 3.25

},

{

name: 'Coffee',

price: 1.5

},

{

name: 'Ice Cream',

price: 7.85

},

{

name: 'Tomatoes',

price: 4.14

},

{

name: 'Onion',

price: 2.25

}

]

let arr_sale = []

// 1. Сохранить самый дорогой товар в переменную`max`*

// 2. Сохранить самый дешевый товар в переменную`min`*

// 3. Сохранить общую цену без скидок в переменную`total`*

// 4. Сохранить общую цену со скидкой в переменную`totalSale`*

// 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную `arr_sale`*

// 6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок*

// * Писать весь код в функции `setup()`*

// ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*

const setup = () => {
    //task 1 the most expensive product

    let max = arr.reduce((a, b) => a.price > b.price ? a : b);
    console.log(`самый дорогой товар: ${max.name}`+ ` ${max.price}`);

    //task 2 the cheapest product

let min = arr.reduce((a, b) => a.price < b.price ? a : b);
console.log(`самый дешевый товар: ${min.name}` + ` ${min.price}`);

//task 3 total price without discount

total = arr.reduce((a, b) => a + b.price, 0);
console.log(`Общая цена без скидок: ${total}`);

//task 4 total price with discount included

totalSale = arr.reduce((a, b) => a + (b.price - b.price * discount / 100), 0);
console.log(`Общая цена со скидками: ${totalSale.toFixed(2)}`);

//task 5 elements with updated price (price with discount) saved in arr_sale

arr_sale = arr.map(item => item.price - item.price * discount / 100);
 arr.forEach((item, index) => { item.price = arr_sale[index]});
 console.log(arr);
console.log(` Цены после объявления о скидках: ${arr_sale}`);


//task 6 average price of all products without discounts
average = arr.reduce((a, b) => a + b.price, 0) / arr.length;
console.log(`Средняя цена всех продуктов без скидок: ${average.toFixed(2)}`);

}

setup()