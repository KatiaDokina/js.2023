//В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then((users) => {

// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
        let main = document.createElement('main');
        main.classList.add('mainUser');
        let divList = document.createElement('div')
        divList.classList.add('divList')
        let h1 = document.createElement('h1');
        h1.classList.add('listUser')
        h1.innerText = `List of users `

        for (const user of users) {

            let div = document.createElement('div');
            div.classList.add('usersDiv');
            div.innerText = `${user.id} - ${user.name}` ;
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
            let button = document.createElement('button');
            button.classList.add('click');
            button.innerText = `User-detail`;
            button.onclick = () => {
                location.href = 'user-details.html?value=' + JSON.stringify(user)
            }

            div.appendChild(button);
            main.appendChild(div);

        }
        divList.append(h1)
        document.body.append(divList,main)
    })
// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//
// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
// user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
// блоки з короткою іфною про post - в ряд по 5 .
// post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
// Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)