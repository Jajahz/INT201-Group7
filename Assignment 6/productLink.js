import { tshirts } from './Tshirt.js';
import { productEvent } from './event.js';

document.addEventListener('DOMContentLoaded', function () {
  productEvent.showTshirt(tshirts);
  productEvent.updateAll();
});