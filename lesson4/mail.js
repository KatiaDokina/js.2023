//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calc(a, b) {
    let result = a * b;
    return result;
}

let areaRectangle = calc(2, 4);
console.log(areaRectangle)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function calc1(r) {
    let PI = 3.14;
    let result = PI * r * r;
    return result;
}

let areaCircle = calc1(7);
console.log(areaCircle)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function calc2(r, h) {
    let PI = 3.14;
    let result = (2 * PI * r * r) + (2 * PI * r * h);
    return result;
}

let areaCulinder = calc2(5, 15);
console.log(areaCulinder)

// - створити функцію яка приймає масив та виводить кожен його елемент
function array(items) {
    for (const item of items) {
        console.log(item);
    }
}

let programs = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
array(programs);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function writer(lorem) {
    document.write(
        `<div><p>${lorem}</p></div>`
    );
}

writer(`Lorem ipsum dolor sit amet, consectetur adipisicing elit.`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list1(text) {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        const textElement = text[i];
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

list1(`Lorem ipsum dolor sit amet, consectetur adipisicing elit.`)


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function list(text, number) {
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
        const textElement = text[i];
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

list(`Lorem ipsum dolor sit amet, consectetur adipisicing elit.`, 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function arrayPrimitive(list) {
    document.write(`<ol>`)
    for (const element of list) {
        document.write(`<li>${element}</li>`)
    }
    document.write(`</ol>`)
}

let elements = ['brown', 145, true, false, 'white', 478, 965]
arrayPrimitive(elements)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28}
]

    for (const user of users) {
        for (const key in user) {
            console.log(key + '-' + user[key])
        }
        console.log('-------------')
    }
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum() {
        const arr = (Array.from(arguments));
        let result = 0;
    for (let number of arr) {
        result = result + number;
    }
    console.log(result)
}
sum(1, 4, 7, 17, 11, 5, 7, 8)
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let arrayValues = [
    {currency:'USD',value:40},
    {currency:'EUR',value:42}
]
let n = 10000;
let result = 250;
for (let i = 0; i < arrayValues.length; i++) {
    const arrayValue = arrayValues[i];
    console.log(arrayValue)
    if (n/arrayValue.value===result){
        console.log(true)
    }else console.log(false)

}