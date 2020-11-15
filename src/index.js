import dishCardTmpl from './templates/dish-card.hbs'
import cards from './menu.json'
import './styles.css';


const menuEl = document.querySelector('.js-menu');
const cardItems = dishCardTmpl(cards);
menuEl.insertAdjacentHTML("beforeend", cardItems)


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body')
const switchTheme = document.querySelector('#theme-switch-toggle')

const checkTheme = localStorage.getItem('theme')

switchTheme.addEventListener('change', onSliderChange)
document.addEventListener('DOMContentLoaded', getThemeFromLocalStorage);


function onSliderChange() {
    if (switchTheme.checked) {
        localStorage.setItem('theme', Theme.DARK)
        body.classList.add(Theme.DARK)
        body.classList.remove(Theme.LIGHT)
    } else {
        localStorage.setItem('theme', Theme.LIGHT)
        body.classList.remove(Theme.DARK)
        body.classList.add(Theme.LIGHT)
    }
}

function getThemeFromLocalStorage() {
  if (checkTheme === Theme.DARK) {
    body.classList.add(Theme.DARK);
    switchTheme.checked = true;
  }
}

