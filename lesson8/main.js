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
    //     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive = function () {
        console.log(`we are going at speed ${this.maxSpeed} an hour`);
    }
    //     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    this.info = function () {
        console.log(`model - ${this.model}, producer - ${this.producer}, year - ${this.year}, maxSpeed - ${this.maxSpeed}, vEngine - ${this.vEngine}`);
    }
    //     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    //     -- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
    //     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let car = new Car('bmw', 'germany', '2021', 210, 3)
car.addDriver({name: 'David', age: 28})
console.log(car)

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class CarClass {
    constructor(model, producer, year, maxSpeed, vEngine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.vEngine = vEngine;
    }
    // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    drive() {
        console.log(`we drive at a speed of ${this.maxSpeed} an hour`);
    }
    //     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    info () {
        console.log(`model - ${this.model}, producer - ${this.producer}, year - ${this.year}, maxSpeed - ${this.maxSpeed}, vEngine - ${this.vEngine}`);
    }
    //     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    increaseMaxSpeed (newSpeed) {
        this.maxSpeed = this.maxSpeed+newSpeed;
    }
    //     -- changeYear (newValue) - змінює рік випуску на значення newValue
    changeYear (newValue) {
        this.year = newValue;
    }
    //     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    addDriver (driver) {
        this.driver = driver;
    }
}
let car2 = new CarClass('audi', 'germany', '2020', 210, 2)
car2.addDriver({name: 'Niki', age: 29})
console.log(car2)

////////////////////////////
class driverAdd extends CarClass {
constructor(model, producer, year, maxSpeed, vEngine,driver,driverAge) {
    super(model, producer, year, maxSpeed, vEngine);
    this.driver = driver;
    this.driverAge = driverAge
}
}
let driver2 = new driverAdd('audi', 'germany', '2020', 210, 2,'Niki', 29);
console.log(driver2)
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Princess {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let princesses = [
    new Princess('olya', 28, 36),
    new Princess('tanya', 25, 35),
    new Princess('ira', 24, 36),
    new Princess('anya', 27, 37),
    new Princess('diana', 24, 38),
    new Princess('yana', 25, 39),
    new Princess('natalya', 26, 36),
    new Princess('oksana', 27, 37),
    new Princess('lilya', 28, 38),
    new Princess('oksana', 29, 39),
]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, shoesSize) {
        this.name = name;
        this.age = age;
        this.shoesSize = shoesSize;
    }
}

let prince = new Prince('david', 29, 35)
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let findCinderella = function () {
    for (let princess of princesses) {
        if (prince.shoesSize === princess.size) {
            return princess;
        }
    }
}
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let cinderella = princesses.find(value => value.size === prince.shoesSize)
console.log(cinderella)