const burger = document.querySelector('.burger');
const headerList = document.querySelector('.header_list');

burger.addEventListener('click', openNav);

function openNav() {
    burger.classList.toggle('active');
    headerList.classList.toggle('active');
}