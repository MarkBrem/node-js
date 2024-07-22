import colors from "./js/countries.json"
import colorsTmpl from './temples/gallery-item.handlebars'
const list = document.querySelector('.js-palette')
list.insertAdjacentHTML("beforeend", colorsTmpl(colors))