import { tshirts } from './Tshirt.js';
import { showTshirt, getPresentcart, getPresentSearchBar } from './event.js';

document.addEventListener('DOMContentLoaded', function () {
  showTshirt(tshirts);
  getPresentcart();
  getPresentSearchBar();
});