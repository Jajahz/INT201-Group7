import { tshirts } from './Tshirt.js';
import { CookieUtil } from './cookieUtil.js'
import { theme } from './theme.js';
import { showTshirt } from './event.js';
import "./event.js";
import "./theme.js";



document.addEventListener('DOMContentLoaded', function () {
  showTshirt(tshirts);
});


let area = document.body;
let head = document.getElementById('navbar');


const colbtn = document.getElementById('colbtn');

colbtn.addEventListener('click',
  () => {

    if (area.classList.contains('bg-dark')) {
      area.classList.remove('bg-dark');
      head.classList.remove('bg-light');
      area.classList.add('bg-info');
      head.classList.add('bg-danger');
    } else {
      area.classList.remove('bg-info');
      head.classList.remove('bg-danger');
      area.classList.add('bg-dark');
      head.classList.add('bg-light');
    }
    theme.toggleTheme();
  },
  false
)

CookieUtil.checkCookie();
// document.cookie = "username=Asamaporn; theme=colorful; expire=Sat, 20 Nov 2021 12:00:00 UTC";

