
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = '#36454f'
        const topics = document.getElementById('topics');
        topics.style.color = 'white'
        const heading = document.querySelector('h1');
        heading.style.color = 'white'  
        const contentBox = document.getElementById('content');
        contentBox.style.borderColor = 'white'  
        logo.src = "images/byui-logo-white.png"
    } else {
        document.body.style.backgroundColor = 'white'
        const paragraph = document.getElementById('topics');
        paragraph.style.color = 'black'
        const heading = document.querySelector('h1');
        heading.style.color = 'black'
        const contentBox = document.getElementById('content');
        contentBox.style.borderColor = 'black'
        logo.src = "https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp"
    }
}           
                    