import { tshirts } from './Tshirt.js';
import CookieUtil from './cookieUtil.js';

const searchbtn = document.getElementById('mySearch');
// ตั้งให้ searchbtn คือ id mysearch

searchbtn.addEventListener(
  'click',
  //ตั้งค่าให้ทำ event นี้เมื่อคลิก
  () => {
    const search = document.getElementById('search');
    // ตั้งให้ search คือ id search
    if (search.style.display === 'none') {
      search.setAttribute('style', 'display : flex !important;');
      //ถ้าหาก style ของ div ไม่มีอยู่หรือ none กดแล้วจะให้แสดงออกมา หรือ flex
    } else {
      search.setAttribute('style', 'display : none !important;');
      //ถ้าหาก style ของ div มีอยู่หรือ flex กดแล้วจะให้ปิดไม่แสดง หรือ none
    }
  },
  false
  //ตั้งค่า event bubbling
);


document.addEventListener('DOMContentLoaded', function () {
  showTshirt(tshirts);
});
//โหลดหน้า html จาก method


const searchInput = document.getElementById("searchBar");
// ตั้งให้ searchInput คือ id searchBar

searchInput.addEventListener(
  'keyup'
  //สร้าง event เมื่อมีการ keyup หรือเมื่อมีการกดปุ่มจากแป้นพิมพ์
  , () => {
  const keyType = searchInput.value.trim();
  // สร้างตัวแปร keyType ให้มีค่าเป็นค่าจากแป้นพิมพ์ที่ได้รับมาจาก input และทำการ remove white space ออก (หากมี)
  const keyTypeLower = keyType.toLowerCase();
  // สร้างตัวแปร keyTypeLower สำหรับนำค่า keyType มาแปลงเป็นตัวพิมพ์เล็กทั้งหมด
  const tshirtMatch = tshirts.filter(tshirt =>
    {
      let tshirtNameKey = tshirt.tshirtName.toLowerCase()
      let tshirtDescKey = tshirt.tshirtDesc.toLowerCase()

      return tshirtNameKey.includes(keyTypeLower) ||
      tshirtDescKey.includes(keyTypeLower)
    // tshirtMatch จะ return tshirts ที่มี name หรือ description เหมือนกับค่าที่ป้อนลงไปใน input
    // โดยใช้คำส่ง filter โดยภายในจะทำการเปรียบเทียบ name และ description ที่ตรงการข้อมูลที่ป้อนด้วยใช้คำส่าง includes
    }
  )
  return showTshirt(tshirtMatch)
  // return method showTshirt เฉพาะที่เหมือนกับค่าที่ป้อนลงไป (keyTypeLower) หรือ สินค้าที่อยู่ใน tshirtMatch
})

const showTshirt = (tshirts) => {
  const divTshirtsEle = document.querySelector('#tshirtList');

  divTshirtsEle.innerHTML = null;
  // กำหนด inner html ของ tshirtlist (divTshirtsEle) ให้มีค่า = null 
  // เพื่อไม่ให้มีข้อมูลสินค้าเก่าออกมาทุกครั้งที่มีการเรียก showTshirt()

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

    addtoCartButton.addEventListener('click', () => {

      cartnumber(tshirtele.tshirtId);

}) // เป็นฟังก์ชันที่เอาไว้เรียก cartnumber เมื่อ Click          



function cartnumber() {
let productnum = sessionStorage.getItem('cartnumber') 
//เรียกใช้ข้อมูล cartnumber
productnum = parseInt(productnum); 
//แปลง productnum ให้เป็นตัวเลขจำนวนเต็มเพื่อนำไปนับ

if(productnum){
   sessionStorage.setItem('cartnumber', productnum + 1);
   document.querySelector('.cart span').textContent = productnum + 1; 
   // เพิ่มตัวเลขของ Cart ตั้งแต่ 1 เป็นต้นไป ถ้าเป็น 0 จะต้องไปที่ else
}else{
   sessionStorage.setItem('cartnumber', 1);
   document.querySelector('.cart span').textContent = 1; 
   // ถ้า Cart มีค่าเป็น 0 จะมาทำ else เพื่อที่จะนับค่าเป็น 1
   }
}

    divTshirtEle.appendChild(card);
    divTshirtsEle.appendChild(divTshirtEle);
  }
};


let area = document.body;
let head = document.getElementById('navbar');

// goDefault=()=>{
//   area.classList.remove('bg-warning');
//   head.classList.remove('bg-danger');
//   area.classList.add('bg-dark');
//   head.classList.add('bg-light');
//   CookieUtil.setCookie('default');
// }

// goColorful=()=>{
//   area.classList.remove('bg-dark');
//   head.classList.remove('bg-light');
//   area.classList.add('bg-warning');
//   head.classList.add('bg-danger');
//   CookieUtil.setCookie('colorful');
// }

const colbtn = document.getElementById('colbtn');

colbtn.addEventListener('click', 
() => {

  if(area.classList.contains('bg-dark')){
  area.classList.remove('bg-dark');
  head.classList.remove('bg-light');
  area.classList.add('bg-warning');
  head.classList.add('bg-danger');
  CookieUtil.setCookie('colorful');
  }else{
  area.classList.remove('bg-warning');
  head.classList.remove('bg-danger');
  area.classList.add('bg-dark');
  head.classList.add('bg-light');
  CookieUtil.setCookie('default');
  }

},
false
)

CookieUtil.checkCookie();

document.cookie = "username=Asamaporn; theme=colorful; expire=Sat, 20 Nov 2021 12:00:00 UTC";