let colors = [
    'black',
    'white',
    'blue',
    'green',
    'yellow',
    'red',
    'pink',
    'purple',
    'brown',
    'orange'
];
console.log(colors);
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);
console.log(colors[4]);
console.log(colors[5]);
console.log(colors[6]);
console.log(colors[7]);
console.log(colors[8]);
console.log(colors[9]);

let book1 = {
    title: 'Atlas Shrugged.Non-contradiction.',
    pageCount: 391,
    genre: 'novel'
};
let book2 = {
    title: 'Atlas Shrugged.Or or.',
    pageCount: 472,
    genre: 'novel'
}
let book3 = {
    title: 'Atlas Shrugged.And there is A.',
    pageCount: 624,
    genre: 'novel'
}
console.log(book1);
console.log(book2);
console.log(book3);

book1.authors =[{
    name:'Ayn Rand',
    age: 77
}];
console.log(book1);
let book4 = {
    title: 'The Horse Dancer',
    pageCount: 508,
    genre: 'novel',
    authors: [{
        name:'Pauline Sara Jo "Jojo" Moyes',
        age: 54
    }]
};
book5 = {
    title: 'Samotność w sieci',
    pageCount: 420,
    genre: 'novel',
    authors: [{
        name: 'Janusz Leon Wiśniewski',
        age: 69
    }]
};
console.log(book4);
console.log(book5);

let users = [
    {name: 'diana', username: 'solod', password: 1110},
    {name: 'oleg', username: 'noruk', password: 2220},
    {name: 'bodya', username: 'pugach', password: 3330},
    {name: 'igor', username: 'nedoviz', password: 4440},
    {name: 'rostuk', username: 'hook', password: 5550},
    {name: 'tanya', username: 'dzyba', password: 6660},
    {name: 'ira', username: 'bzdyr', password: 7770},
    {name: 'ruslana', username: 'veremiy', password: 8880},
    {name: 'natalya', username: 'shatulo', password: 9990},
    {name: 'julya', username: 'kuvak', password: 1213},
];
console.log(users)
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

let x=1
if (x !==0) {
    console.log('Вірно')
}else {
    console.log('Невірно')
}

let time = prompt ('to what quarter of an hour does the number fall');
if(time >=0 && time <=15){
    console.log('I quarter');
}else if (time >15 && time <=30){
    console.log('II quarter');
}else if (time >30 && time<=45){
    console.log('III quarter');
}else if (time >45 && time<=59){
    console.log('IV quarter');
}else {
    console.log('again');
}

let day = prompt('in which decade of the month does the number fall')
if(day >=1 && day <=10){
    console.log('I decade');
}else if (day >10 && day <=20){
    console.log('II decade');
}else if (day >20 && day<=31){
    console.log('III decade');
}else {
    console.log('again')
}

let week = 1
switch (week) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('again');
}

let FirstNum = 100;
let SecondNum = 150;
if (FirstNum>SecondNum){
    console.log('FirstNum: ', FirstNum);
}else if (FirstNum<SecondNum){
    console.log('SecondNum: ', SecondNum)
}else if (FirstNum===SecondNum){
    console.log('equal')
}else {
    console.error(Error)
}


let color = prompt('color') || 'defolt';
console.log(color);

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration >5){
    console.log('super')
}
if (coursesAndDurationArray[1].monthDuration >5){
    console.log('super')
}
if (coursesAndDurationArray[2].monthDuration >5){
    console.log('super')
}
if (coursesAndDurationArray[3].monthDuration >5){
    console.log('super')
}
if (coursesAndDurationArray[4].monthDuration >5){
    console.log('super')
}
if (coursesAndDurationArray[5].monthDuration >5){
    console.log('super')
}