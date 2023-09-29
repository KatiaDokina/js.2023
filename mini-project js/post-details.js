//6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
let url = new URL(location.href);
url.searchParams.forEach(value => {
    url = JSON.parse(value)


})

let userId = url.userId;

let urlDetailsPost = new URL('https://jsonplaceholder.typicode.com/comments');
urlDetailsPost.searchParams.set('postId', userId);
fetch(urlDetailsPost)
    .then(value => value.json())
    .then((postDetails) => {
        console.log(postDetails)
    })