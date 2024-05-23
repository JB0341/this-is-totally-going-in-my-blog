const divTags = document.querySelectorAll('div');
const bodyTags = document.querySelectorAll('body');
const headerTags = document.querySelectorAll('body');
const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const pTags = document.getElementById('p');
const dis = document.getElementById('dis');
const dat = document.getElementById('dat');
const dippity = document.getElementById('dippity');
const holderEl = document.getElementById('holder');

let blogs = []

function renderBlogging() {
    const data = JSON.parse(localStorage.getItem('blogs'));
    console.log(data);

    for(let i = 0; i < blogs.length; i++) {
        blogs[i].username

        const infoEl = `
        <div class="border border-5 blogging">
            <h3>${blogs[i].title}</h3>
            <p>${blogs[i].content}</p>
            <div>
                ${blogs[i].username}
            </div>
        </div>
        `;
        holderEl.innerHTML = holderEl.innerHTML + infoEl;
    }
}

function init() {
    renderBlogging();
}
init();