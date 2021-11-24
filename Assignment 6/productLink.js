import { tshirts } from './Tshirt.js';
import { CookieUtil } from './cookieUtil.js'
import { toggle } from './toggle.js';
import { showTshirt,getPresentcart,getPresentSearchBar } from './event.js';


document.addEventListener('DOMContentLoaded', function () {
  showTshirt(tshirts);
  getPresentcart();
  getPresentSearchBar();
});

