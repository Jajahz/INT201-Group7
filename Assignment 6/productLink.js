import { tshirts } from './Tshirt.js';
<<<<<<< HEAD
import { showTshirt,getPresentcart,getPresentSearchBar } from './event.js';
=======
import { showTshirt, getPresentcart, getPresentSearchBar } from './event.js';
>>>>>>> 24ae60a9af01baff7e6a37d8026e64f34db97b68

document.addEventListener('DOMContentLoaded', function () {
  showTshirt(tshirts);
  getPresentcart();
  getPresentSearchBar();
});