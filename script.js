const listItems = document.querySelectorAll('.navigation .list');
const indicator = document.querySelector('.indicator');

function setActiveItem() {
    listItems.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
    const index = this.getAttribute('data-index');
    indicator.style.transform = `translateX(calc(70px * ${index}))`;
}

listItems.forEach(item => item.addEventListener('click', setActiveItem));
