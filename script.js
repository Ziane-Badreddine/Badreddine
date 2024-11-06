

let clicked = false;
const menu = document.getElementById('menu')
const menu_div = document.getElementById('menu-div')
const links = document.querySelectorAll('.link');

menu.addEventListener('click', () => {
    if (clicked) {
        menu_div.style.display = 'none'
        clicked = false;
    }
    else {
        clicked = true;
        menu_div.style.display = 'flex'
    }
    console.log(clicked);
})

links.forEach((link) => {
    link.addEventListener('click',() => {
        menu_div.style.display = 'none'
        clicked = false;
    })
})



