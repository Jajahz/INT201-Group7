import { tshirts } from './Tshirt.js';
import { cartEvents } from './cart.js';
import { CookieUtil } from './cookieUtil.js'
import "./event.js";
import "./theme.js";

document.addEventListener('DOMContentLoaded', function () {
  showTshirt(tshirts);
});

const showTshirt = (tshirts) => {
  const divTshirtsEle = document.querySelector('#tshirtList');
  divTshirtsEle.innerHTML = null;
  // กำหนด inner html ของ tshirtlist (divTshirtsEle) ให้มีค่า = null 
  // เพื่อไม่ให้มีข้อมูลสินค้าเก่าออกมาทุกครั้งที่มีการเรียก showTshirt()

  if (tshirts.length == 0) {
    const notFoundT = document.createElement("h1");
    notFoundT.setAttribute('class', 'display-6 text-white');
    notFoundT.setAttribute('style', 'text-align: center;margin-top: 80px; position:relative ');
    notFoundT.textContent = 'Item Not Found';
    divTshirtsEle.appendChild(notFoundT);

  }

  if (tshirts.length !== 0) {
    divTshirtsEle.setAttribute("class", "row row-cols-1 row-cols-md-4 g-4")
  }

  for (let tshirtele of tshirts) {
    //loop ภายใน array tshirt[] ที่ import มา
    const divTshirtEle = document.createElement('div');
    divTshirtEle.setAttribute('id', tshirtele.tshirtId);
    divTshirtEle.setAttribute('class', 'card-group');
    //สร้าง element div โดยให้ id เป็น tshirtId และ class เป็น card group จาก bootstrap

    const tshirtName = document.createElement('p');
    tshirtName.setAttribute('class', 'h5');
    tshirtName.textContent = tshirtele.tshirtName;
    //สร้าง element tag p สำหรับ รายชื่อสินค้าจาก tshirtName ให้ class เป็น h5(ขนาดตัวอักษรจาก bootstrap)

    const tshirtDesc = document.createElement('p');
    tshirtDesc.textContent = 'Description ' + tshirtele.tshirtDesc;
    //สร้าง element tag p สำหรับ คำบรรยายสินค้าจาก tshirtDesc

    const TshirtStock = document.createElement('p');
    TshirtStock.textContent = 'T-shirt Stock : ' + tshirtele.tshirtStock;
    //สร้าง element tag p สำหรับ เก็บจำนวนคงเหลือในคลัง หรือ tshirtStock

    const tshirtPrice = document.createElement('p');
    tshirtPrice.textContent = 'Price : ' + tshirtele.tshirtPrice + ' Baht.';
    //สร้าง element tag p สำหรับ ราคา หน่วยเป็นบาท หรือ tshirtPrice

    const addtoCartButton = document.createElement('button');
    addtoCartButton.textContent = 'Add to cart';
    addtoCartButton.setAttribute('class', 'btn btn-outline-dark btn-lg');
    addtoCartButton.setAttribute('style', 'margin: 4px;');
    addtoCartButton.addEventListener('click', () => {
      cartEvents.cartNumber();
      cartEvents.add(tshirtele);
    });
    //สร้าง element button สำหรับปุ่มเพิ่มลงตะหร้า addtocart โดยใช้ bootsttrap ในการตกแต่งเพิ่มเติม

    const tshirtImage = document.createElement('img');
    tshirtImage.setAttribute('src', tshirtele.img);
    tshirtImage.setAttribute('class', 'card-img-top');
    tshirtImage.setAttribute('alt', tshirtele.tshirtId);
    //สร้าง element tag img สำหรับรูปภาพสินค้า โดย src จะเก็บที่อยู่ path ของรูปภาพใน folder,
    //alt จะเก็บ tshirtid และ class เป็น card-img-top สำหรับ bootstrap

    const cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body');
    //สร้าง element div ที่มี class เป็น card-body สำหรับส่วนที่เป็นเนื้อหา

    const card = document.createElement('div');
    card.setAttribute('class', 'card border-dark');
    //สร้าง element div ที่มี class เป็น card border-dark สำหรับส่วนที่เป็น card ของแต่ละสินค้า

    cardBody.appendChild(tshirtName);
    cardBody.appendChild(tshirtDesc);
    cardBody.appendChild(TshirtStock);
    cardBody.appendChild(tshirtPrice);
    //ในส่วนของ card body นำ element ประเภทข้อมูลมาใส่ เช่น ชื่อสินค้า จำนวนสินค้า ราคาสินค้า และ คำบรรยาย

    card.appendChild(tshirtImage);
    card.appendChild(cardBody);
    card.appendChild(addtoCartButton);
    //ในส่วนของ element ที่เป็น card จะนำ classbody มาใส่ (appendChild) รวมถึงรูปภาพและปุ่ม

    // เป็นฟังก์ชันที่เอาไว้เรียก cartnumber เมื่อ Click          
    divTshirtEle.appendChild(card);
    divTshirtsEle.appendChild(divTshirtEle);
  }
};

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
    CookieUtil.toggleTheme();
  },
  false
)

CookieUtil.checkCookie();
// document.cookie = "username=Asamaporn; theme=colorful; expire=Sat, 20 Nov 2021 12:00:00 UTC";

