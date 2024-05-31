const logo = document.querySelector('.logo');
const dates = document.querySelector('.dates');
const wrapper = document.querySelector('.wrapper');

window.addEventListener('resize', updateCurrentSize);

function updateCurrentSize() {
  if (document.documentElement.clientWidth < 1000) {
    logo.style.maxWidth = '250px';
    dates.style.maxWidth = '200px';
    wrapper.style.height = '70vh'; 
  } else {
    logo.style.maxWidth = '';
    dates.style.maxWidth = '';
    wrapper.style.height = '100vh';  
  }
}

updateCurrentSize();
