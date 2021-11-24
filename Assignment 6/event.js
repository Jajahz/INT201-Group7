import { tshirts } from './Tshirt.js';
import { cartEvents } from './cart.js';
import  './productLink.js';
import { toggle } from './toggle.js';
import { CookieUtil } from './cookieUtil.js'

const colbtn = document.getElementById('colbtn');
const search = document.getElementById('search');
const searchbtn = document.getElementById('mySearch');
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const cart = document.getElementById("showCart");
const removecart = document.getElementById('reset')  

export const productEvent = {  showTshirt : function (tshirts) {
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
    
    divTshirtEle.appendChild(card);
    divTshirtsEle.appendChild(divTshirtEle);
}},
getPresentcart : function(){
  let cartNum = document.getElementById('numIncart');
  let productnum = localStorage.getItem('cartnumber');
  productnum = parseInt(productnum);
  if (productnum == 0 || isNaN(productnum)){
    cartNum.textContent = 0
    localStorage.setItem('cartnumber', 0);
  }else{
    cartNum.textContent = productnum;
  }
},
getPresentSearchBar : function(){
  let displayStatus = localStorage.getItem('searchBarDisplay');
  displayStatus = parseInt(displayStatus);
  if (displayStatus == 0){
    search.setAttribute('style', 'display : none !important; ');
  }else if (displayStatus==1){ 
    search.setAttribute('style', 'display : flex !important; ');
  }
}, updateAll : function() {
  productEvent.getPresentSearchBar();
  productEvent.getPresentcart();
},
hideItem:function(tshirt){
  console.log(tshirt);
  tshirt.forEach(element => {
    let tshirtHide = document.getElementById(element.tshirtId);
    tshirtHide.setAttribute('style','display : none !important;')
  });
},
displayAll:function(){
  tshirts.forEach(element => {
    let showTshirt = document.getElementById(element.tshirtId);
    showTshirt.setAttribute('style', 'display : flex !important; ');
  });
}
}
removecart.addEventListener('click', () => {
  cartEvents.resetCart();
});

searchbtn.addEventListener(
  'click',
  //ตั้งค่าให้ทำ event นี้เมื่อคลิก
  () => {
    if (search.style.display === 'none') {
      search.setAttribute('style', 'display : flex !important; ');
      //ถ้าหาก style ของ div ไม่มีอยู่หรือ none กดแล้วจะให้แสดงออกมา หรือ flex
    } else {
      search.setAttribute('style', 'display : none !important; ');
      //ถ้าหาก style ของ div มีอยู่หรือ flex กดแล้วจะให้ปิดไม่แสดง หรือ none
    }
    toggle.toggleSearchBar();
  },
  false
  //ตั้งค่า event bubbling
);

searchBtn.addEventListener(
  'click'
  , () => {
    const keyType = searchInput.value.trim();
    const keyTypeLower = keyType.toLowerCase();
    const tshirtMatch = tshirts.filter(tshirt => {
      let tshirtNameKey = tshirt.tshirtName.toLowerCase()
      let tshirtDescKey = tshirt.tshirtDesc.toLowerCase()

      return !tshirtNameKey.includes(keyTypeLower) ||
        tshirtDescKey.includes(keyTypeLower)
      // tshirtMatch จะ return tshirts ที่มี name หรือ description เหมือนกับค่าที่ป้อนลงไปใน input
      // โดยใช้คำส่ง filter โดยภายในจะทำการเปรียบเทียบ name และ description ที่ตรงการข้อมูลที่ป้อนด้วยใช้คำส่าง includes  
    }
    )
    if(keyTypeLower==''){
      return productEvent.displayAll();
    } else {
       return productEvent.hideItem(tshirtMatch)} 
    // return method showTshirt เฉพาะที่เหมือนกับค่าที่ป้อนลงไป (keyTypeLower) หรือ สินค้าที่อยู่ใน tshirtMatch
  })

  searchInput.addEventListener('keyup'
  , () => {
    const keyType = searchInput.value.trim();
    const keyTypeLower = keyType.toLowerCase();
    if(keyTypeLower==''){
      return productEvent.displayAll();}})
  
cart.addEventListener(
  'click',
  //ตั้งค่าให้ทำ event นี้เมื่อคลิก
  () => {
    let productInStock = localStorage.getItem('cart');
    if (productInStock == undefined || productInStock === 0) {
      productInStock = [];
    } else {
      productInStock = JSON.parse(productInStock);
    }
    let productnum = localStorage.getItem('cartnumber')
    productnum = parseInt(productnum);

    // ควรใช้ reduce
    // let totalprice = tshirtIncart.reduce((prep,curp) => {
    //   return totalprice = totalprice + (tshirtIncart.tshirtPrice * tshirtIncart.qty);
    // })
    
    let totalprice = 0;
    for (let tshirtIncart of productInStock) {
      totalprice = totalprice + (tshirtIncart.tshirtPrice * tshirtIncart.qty)
    }

    if (productInStock == 0) {
      alert("total price is 0 Baht, you haven't add anything to cart yet");
    } else {
      alert(`you have ${productnum} items in your cart, total price is ${totalprice} Baht`);
    }
  }
    ,
  false
  //ตั้งค่า event bubbling
);

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
    toggle.toggleTheme();
  },
  false
)

CookieUtil.checkCookie();