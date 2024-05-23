const headerTags = document.querySelectorAll('header');
const divTags = document.querySelectorAll('div');
const bodyTags = document.querySelectorAll('body');
const formTag = document.querySelectorAll('form');
const buttonTags = document.getElementById('button');
const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');

buttonTags.addEventListener('click', function (event) {
    event.preventDefault();

let blogs = []

const data = JSON.parse(localStorage.getItem('blogs'));

if (data) {
    blogs = data;
}

let blog = {
    username: username.value,
    title: title.value,
    content: content.value.trim(),
};


    blogs.push(blog);

    localStorage.setItem('blogs', JSON.stringify(blogs));
    location.assign('blog.html')
    
    
});