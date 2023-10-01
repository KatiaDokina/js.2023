//6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
let url = new URL(location.href);
url.searchParams.forEach(value => {
    url = JSON.parse(value)
    let h1 = document.createElement('h1');
    h1.innerText = `Post-details`;
    let main = document.createElement('main');
    main.classList.add('mainPost');
    let divUserId = document.createElement('div');
    divUserId.innerText = `userId: ${url.userId} ,`;
    let divId = document.createElement('div');
    divId.innerText = `id: ${url.id} ,`;
    let divTitle = document.createElement('div');
    divTitle.innerText = `title: ${url.title} ,`;
    let divBody = document.createElement('div');
    divBody.innerText = `body: ${url.body}`
    document.body.appendChild(main);
    main.append(h1,divUserId, divId, divTitle, divBody)
})
//На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
let userId = url.userId;

let urlDetailsPost = new URL('https://jsonplaceholder.typicode.com/comments');
urlDetailsPost.searchParams.set('postId', userId);
fetch(urlDetailsPost)
    .then(value => value.json())
    .then((postDetails) => {
        console.log(postDetails)
        let main = document.createElement('main');
        main.classList.add('mainComments');
        for (const postDetail of postDetails) {
            let section = document.createElement('section');
            section.classList.add('section');
            let divPostId = document.createElement('div');
            divPostId.innerText = `postId: ${postDetail.postId} ,`;
            let divId = document.createElement('div');
            divId.innerText = `id: ${postDetail.id} ,`;
            let divName = document.createElement('div');
            divName.innerText = `name: ${postDetail.name} , `;
            let divEmail = document.createElement('div');
            divEmail.innerText = `email: ${postDetail.email} ,`;
            let divBody1 = document.createElement('div');
            divBody1.innerText = `body: ${postDetail.body}`;


            document.body.appendChild(main);
            main.append(section)
            section.append(divPostId, divId, divName, divEmail, divBody1)

        }


    })