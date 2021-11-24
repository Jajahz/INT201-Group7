import { tshirts } from './Tshirt.js';
import { CookieUtil } from './cookieUtil.js'
import { theme } from './theme.js';
import { showTshirt } from './event.js';

document.addEventListener('DOMContentLoaded', function () {
  showTshirt(tshirts);
});


const colbtn = document.getElementById('colbtn');

colbtn.addEventListener('click',
  () => {

    let area = document.body;
    let head = document.getElementById('navbar');
    let resetbtn = document.getElementById('reset');
    let user = document.getElementById('user');
    let search = document.getElementById('searchBtn');
    let text = document.getElementById('text');

    if (area.classList.contains('bg-dark')) {
      area.classList.remove('bg-dark');
      head.classList.remove('bg-light');
      resetbtn.classList.remove('btn-danger');
      search.classList.remove('btn-outline-secondary');

      area.classList.add('bg-info');
      head.classList.add('bg-danger');
      resetbtn.classList.add('btn-light');
      user.setAttribute('style','color: white');
      text.setAttribute('style', 'color: white');
      search.classList.add('btn-outline-warning');
    } else {
      area.classList.remove('bg-info');
      head.classList.remove('bg-danger');
      resetbtn.classList.remove('btn-light');
      search.classList.remove('btn-outline-warning');

      area.classList.add('bg-dark');
      head.classList.add('bg-light');
      resetbtn.classList.add('btn-danger');
      user.setAttribute('style','color: rgb(125, 117, 182)');
      text.setAttribute('style', 'color: black');
      search.classList.add('btn-outline-secondary');
    }
    theme.toggleTheme();
  },
  false
)

CookieUtil.checkCookie();