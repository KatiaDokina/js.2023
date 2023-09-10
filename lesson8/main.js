//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(1, 'vasya', 'pupkin', 'asd@asd.com', 124134455),
    new User(2, 'petya', 'ivanov', 'dsd@asd.com', 128548451),
    new User(3, 'kolya', 'melnyk', 'lsd@asd.com', 478541582),
    new User(4, 'olya', 'shevchenko', 'zxc@asd.com', 129854510),
    new User(5, 'max', 'kovalenko', 'alk@asd.com', 123478147),
    new User(6, 'anya', 'boyko', 'adf@asd.com', 123457512),
    new User(7, 'oleg', 'bpndarenko', 'lkj@asd.com', 112587582),
    new User(8, 'andrey', 'tkachenko', 'mjh@asd.com', 152582582),
    new User(9, 'masha', 'shevchuk', 'olk@asd.com', 147584589),
    new User(10, 'olya', 'ivanova', 'afr@asd.com', 145528682),
]
console.log(users)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let usersFilter = users.filter(value => value.id % 2 === 0);
console.log(usersFilter)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let usersCopy = [...users];
let Sort = usersCopy.sort((a, b) => {
    return a.id - b.id
})
console.log(Sort)
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let Clients = [
    new Client(1, 'vasya', 'pupkin', 'asd@asd.com', 124134455, ['apple', 'watermelon', 'melon']),
    new Client(2, 'petya', 'ivanov', 'dsd@asd.com', 128548451, ['lemon', 'apple', 'peach']),
    new Client(3, 'kolya', 'melnyk', 'lsd@asd.com', 478541582, ['strawberry', 'kokos', 'pineapple']),
    new Client(4, 'olya', 'shevchenko', 'zxc@asd.com', 129854510, ['peach', 'melon']),
    new Client(5, 'max', 'kovalenko', 'alk@asd.com', 123478147, ['kivi', 'orange', 'apple', 'plum']),
    new Client(6, 'anya', 'boyko', 'adf@asd.com', 123457512, ['blueberry', 'raspberry', 'strawberry', 'pineapple']),
    new Client(7, 'oleg', 'bpndarenko', 'lkj@asd.com', 112587582, ['orange', 'apple', 'melon', 'lemon', 'kokos']),
    new Client(8, 'andrey', 'tkachenko', 'mjh@asd.com', 152582582, ['pineapple', 'peach']),
    new Client(9, 'masha', 'shevchuk', 'olk@asd.com', 147584589, ['plum', 'strawberry', 'melon']),
    new Client(10, 'olya', 'ivanova', 'afr@asd.com', 145528682, ['apple', 'orange', 'pineapple']),
]
console.log(Clients)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let orderSort = Clients.sort((a, b) => b.order.length - a.order.length)
console.log(orderSort)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car(model, producer, year, maxSpeed, vEngine) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.vEngine = vEngine;
    this.drive = function () {
        console.log(`we are going at speed ${maxSpeed} an hour`)
    }
    this.info = function () {
        console.log(`model - ${model}, producer - ${producer}, year - ${year}, maxSpeed - ${maxSpeed}, vEngine - ${vEngine}`)
    }
    this.increaseMaxSpeed = function (newSpeed) {
        return maxSpeed+newSpeed
    }
    this.changeYear = function (newValue) {
        return this.year=newValue;
    }
}

let car = new Car('bmw', 'germany', '2021', 210, 3)

//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку