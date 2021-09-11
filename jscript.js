let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
let pag = document.querySelector('.pag');

themeButton.onclick = function() {
    console.log('проверка')
  page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme'); 
  pag.classList.toggle('page-footer');
  pag.classList.toggle('page-foote'); 
};
