//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>Text</div>`)
}
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>Text - ${[i]}</div>`)
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let  i = 0;
while (i < 20){
    console.log(i);
    i++;
    document.write(`<h1>Title</h1>`)
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let text = 0;
while (text<20){
console.log(text);
text++;
document.write(`<h1>Title - ${[text]}</h1>`)
}
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// ШАБЛОН:
//  <ul>
//     <li>ITEM OF ARRAY</li>
//     <!--
//         і тд інші об'єкти масиву
//          ...
//          ...
//          ...
//     -->
// </ul>
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`)
for (let listOfItem of listOfItems) {
    console.log(listOfItem)
    document.write(`<li>${listOfItem}</li>`)
}
document.write(`</ul`)
//Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// ШАБЛОН
//  <div class="product-card">
//         <h3 class="product-title">TITLE. Price - PRICE</h3>
//         <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (let product of products) {
    document.write(`<div class="product-card">
<h3 class="product-title">Title - ${product.title}. Price - ${product.price}</h3>
<img src="${product.image}" alt="" class="product-image">
</div>`)
    }
//є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

//за допомоги циклу вивести:
//- користувачів зі статусом true
for (let user of users) {
    if (user.status) {
        document.write(`<div>${user.name} ${user.status}</div>`)
    }
}
//- користувачів зі статусом false
for (let user of users) {
    if (!user.status) {
        document.write(`<div>${user.name} ${user.status}</div>`)
    }
}
//- користувачів які старші за 30 років
for (let user of users) {
    if (user.age > 30) {
        console.log(user.name + '-' + user.age)
        document.write(`<div>${user.name} - ${user.age}</div>`)
    }
}
//--створити масив з:
// - з 5 числових значень
let numbers = [22,57,89,24,14];
// - з 5 стічкових значень
let colors = ['blue', 'blue','white','pink','purple'];
// - з 5 значень стрічкового, числового та булевого типу
let different =[
    ['samsung','apple','LG','nokia','siemens'],
    [true,false,true,true,false],
    [145, 457, 478,578,554]
]
// - та вивести його в консоль
console.log(numbers)
console.log(colors)
console.log(different)
//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let week = ['Monday','Tuesday','Wednesday','Thursday']
week[4] = 'Friday';
console.log(week);
week[5] = true;
console.log(week);
