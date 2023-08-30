// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let calc = (a, b) => a * b;
console.log(calc(3, 6));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let calc1 = (r, PI) => r * r * PI;
console.log(calc1(5, 3.14));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let calc2 = (r, h, PI) => (2 * PI * r * r) + (2 * PI * r * h);
console.log(calc2(3, 11, 3.14));
// - створити функцію яка приймає масив та виводить кожен його елемент
let elements = (arr) => {
    for (let arrElement of arr) {
    }
    return arr;
}
console.log(elements([145, 457, false, true, 'asd', 'sdf', 747]));
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let text = (text) => {
    document.write(`<p>${text}</p>`);
    return text;
}
console.log(text(`Lorem ipsum dolor sit amet, consectetur adipisicing elit.`));
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let elements3 = (list) => {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        const listElement = list[i];
        document.write(`<li>${list}</li>`)
    }
    document.write(`</ul>`)
    return list;
}
console.log(elements3(`Lorem ipsum dolor sit amet, consectetur adipisicing elit.`));
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let detail = (list1, number) => {
    document.write(`<ul>`);
    for (let i = 0; i < number; i++) {
        const list1Element = list1[i];
        document.write(`<li>${list1}</li>`)
    }
    document.write(`</ul>`)
    return list1
}
console.log(detail(`Lorem ipsum dolor sit amet, consectetur adipisicing elit.`, 3))
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let roster = (primitive) => {
    document.write(`<ol>`);
    for (let item of primitive) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ol>`);
    return primitive;
}
console.log(roster([124, false, 475, true, 'ads', 'dfs', 'adf']));
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users1 = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28}
]
let writer = (Array1) => {
    for (let array of Array1) {
        document.write(`<div>${array.id} ${array.name} ${array.age}</div>`)
    }
    return Array1;
}
console.log(writer(users1));
// - створити функцію яка повертає найменьше число з масиву
let number = (arrayNumber) => {
    let minNumber = arrayNumber [0];
    for (let arrayNumberElement of arrayNumber) {
        if (minNumber > arrayNumberElement)
            minNumber = arrayNumberElement
    }
    return minNumber;
}
console.log(number([12, 47, 457, 10, -1, 77, 51]));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = (arr2) => {
    let result = 0;
    for (let arr2Element of arr2) {
        result = result + arr2Element
    }
    return result;
}
console.log(sum([1, 4, 78, 15, 4, 77, 11]));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr3, index1, index2) => {
    let firstNumber = arr3 [index1];
    let secondNumber = arr3 [index2];
    arr3 [index1] = secondNumber;
    arr3 [index2] = firstNumber;
    return arr3;
}
console.log(swap([35, 74, 11, 51, 12], 0, 1));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAN, currencyValues, exchangeCurrency) => {
    let result = 0;
    for (let currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency)
        return  result = sumUAN / currencyValue.value
    }
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))
