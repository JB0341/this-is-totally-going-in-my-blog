const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const dis = $('#dis');
const holderEl = document.getElementById('holder');

let blogs = []

function renderBlogging() {
    let blogData = JSON.parse(localStorage.getItem('blogs')) || [];

    for(let i = 0; i < blogData.length; i++) {
        const newContent = `
        <div class="border border-5 border-dark">
            <h3 class="border-bottom border-5 border-dark">${blogData[i].title}</h3>
            <p>${blogData[i].content}</p>
            <h5>Posted by: ${blogData[i].username}</h5>
        </div>
        `;

        dis.append(newContent);
    }
}

function init() {
    renderBlogging();
}
init();