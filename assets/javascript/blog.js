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

    for(let i = 0; i < blogs.length; i++) {
        const newSection = $('<section>');
        newSection.addClass('new-container')
        dis.append(newSection);
        newSection.append(`
        <h3 class="bippity">${blogs[i].title}</h3>
        <p class="boppity">${blogs[i].content}</p>
        <h5 class="boo">${blogs[i].username}</h5>
        `);
    }
}

function init() {
    renderBlogging();
}
init();