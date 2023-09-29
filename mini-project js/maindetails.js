//На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
let url = new URL(location.href);
url.searchParams.forEach((value) => {
    url = JSON.parse(value)
    let main = document.createElement('main');
    main.classList.add('main');
    let h1 = document.createElement('h1');
    h1.innerText = `Information about users`;
    let div = document.createElement('div');
    div.innerText = `id: ${url.id} ,`;
    let section = document.createElement('section');
    section.innerText = `name: ${url.name}, username: ${url.username}   , email: ${url.email} ,`
    let div1 = document.createElement('div');
    div1.innerText = `address: `;
    let aside = document.createElement('aside');
    aside.innerText = `street: ${url.address.street}, suite: ${url.address.suite}, city: ${url.address.city}, zipcode: ${url.address.zipcode} ,`;
    let div2 = document.createElement('div');
    div2.innerText = `geo: `;
    let aside1 = document.createElement('aside');
    aside1.innerText = `lat: ${url.address.geo.lat}, lng: ${url.address.geo.lng} ,`;
    let div3 = document.createElement('div');
    div3.innerText = `phone: ${url.phone} ,`;
    let div4 = document.createElement('div');
    div4.innerText = `website: ${url.website} ,`;
    let div5 = document.createElement('div');
    div5.innerText = `company: `;
    let section1 = document.createElement('section');
    section1.innerText = `name: ${url.company.name}, catchPhrase: ${url.company.catchPhrase}, bs: ${url.company.bs} ,`

    // 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// fetch('https://jsonplaceholder.typicode.com/posts')
    let buttonPost = document.createElement('button');
    buttonPost.innerText = `post of current user`;
    buttonPost.classList.add('buttonPost');
    let id = url.id
    buttonPost.onclick = function () {
        this.onclick = null;
        let urlPost = new URL('https://jsonplaceholder.typicode.com/posts')
        urlPost.searchParams.set('userId', id);
        fetch(urlPost)
            .then(value => value.json())
            .then((posts) => {
                for (const post of posts) {
                    let div = document.createElement('div');
                    div.innerText = `${post.title}`;
                    let button = document.createElement('button');
                    button.classList.add('post-details');
                    button.innerText = `post-details`;
                    button.onclick = () => {
                        location.href = 'post-details.html?value=' + JSON.stringify(post)
                    }
                    div.append(button)
                    document.body.appendChild(div)
                }

            })
    }
    main.append(div, section, div1, aside, div2, aside1, div3, div4, div5, section1, buttonPost);
    document.body.appendChild(main);
})


// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.