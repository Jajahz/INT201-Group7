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

// object productEvent เก็บฟังก์ชันต่าง ๆ 
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
  let productnum = cartEvents.getAmountInCart();
  if (productnum == 0 || isNaN(productnum)){
    cartNum.textContent = 0
  }else{
    cartNum.textContent = productnum;
  }
// getPresentcart() เป็น ฟังก์ชันสำหรับเรียก จำนวนสินค้าภายในรถเข็นที่อยู่ใน localstorage มาเมื่อมีการรีเฟรชหน้า
// ใช้ค่าที่ cartEvents.getAmountInCart() return ออกมา เพื่อการตรวจสอบและแสดงผล
},
getPresentSearchBar : function(){
  let displayStatus = localStorage.getItem('searchBarDisplay');
  displayStatus = parseInt(displayStatus);
  if (displayStatus == 0){
    search.setAttribute('style', 'display : none !important; ');
  }else if (displayStatus==1){ 
    search.setAttribute('style', 'display : flex !important; ');
  }
// getPresentSearchBar() เป็นฟังก์ชันสำหรับเรียกข้อมูล searchBarDisplay ใน local storage มาแสดงผล การ displayของsearchbar เมื่อมีการรีเฟรชหน้า
// ให้แสดงผลตามเงื่อนไขที่ตั้งไว้ 0 = ไม่แสดง searchbar, 1 = แสดง search bar
}, updateAll : function() {
  productEvent.getPresentSearchBar();
  productEvent.getPresentcart();
},
// นำฟังก์ชัน getPresentSearchBar() และ getPresentcart() มาอยู่ภายใตฟังก์ชัน updateAll() ทำให้ใช้คำสั่งเรียกเพียงแค่ครั้งเดียว
hideItem:function(tshirt){
  tshirt.forEach(element => {
    let tshirtHide = document.getElementById(element.tshirtId);
    tshirtHide.setAttribute('style','display : none !important;')
  // ใส่ css display none ให้กับ divของclassสินค้า (ตั้งชื่อตาม tshirtId จึงสามารถ getElementById(element.tshirtId) ได้)
  // โดยฟังก์ชันนี้จะไปใช้กับการแสดงผล
  });
},
displayAll:function(){
  tshirts.forEach(element => {
    let showTshirt = document.getElementById(element.tshirtId);
    showTshirt.setAttribute('style', 'display : flex !important; ');
  // ใส่ css display flex ให้กับ divของclassสินค้าทั้งหมด (ตั้งชื่อตาม tshirtId จึงสามารถ getElementById(element.tshirtId) ได้)
  // โดยฟังก์ชันนี้จะไปใช้กับการแสดงผลเช่นกัน
  });
},
calculateTotalPrice:function(){
  let productInStock = cartEvents.getCart();
    let productnum = cartEvents.getAmountInCart();
    let totalprice = productInStock.reduce((prep,curp)=>prep+(curp.tshirtPrice*curp.qty),0);
    if (productInStock == 0) {
      alert("total price is 0 Baht, you haven't add anything to cart yet");
    } else {
      alert(`you have ${productnum} items in your cart, total price is ${totalprice} Baht`);
    }
    //ฟังก์ชันสำหรับคำณวนสินค้าภายใน โดยดึงฟังก์ชัน cartEvents.getCart() มาใช้เพื่อคำณวนหาราคาของสินค้าภายในตะกร้าทั้งหมด
    //โดยคำณวนจาก นำราคามาคูณกับจำนวน และสะสมไปเรื่อยๆ ด้วยคำสั่ง reduce
    //และแสดงผลตามเงื่อนไข
}
}
removecart.addEventListener('click', () => {
  cartEvents.resetCart();
  // เรียก ฟังก์ชัน resetCart() ภายใน cartEvents เทื่อ click ปุ่มreset
});

searchbtn.addEventListener(
  'click',
  () => {
    if (search.style.display === 'none') {
      search.setAttribute('style', 'display : flex !important; ');
    } else {
      search.setAttribute('style', 'display : none !important; ');
    }
    toggle.toggleSearchBar();
  },
  false
  //ตั้งค่่า event bubbling เมื่อ click ที่icon แว่นขยาย
  //ถ้าหาก style ของ div ไม่มีอยู่หรือ none กดแล้วจะให้แสดงออกมา หรือ flex
  //ถ้าหาก style ของ div มีอยู่หรือ flex กดแล้วจะให้ปิดไม่แสดง หรือ none
);

searchBtn.addEventListener(
  'click'
  , () => {
    const keyType = searchInput.value.trim();
    const keyTypeLower = keyType.toLowerCase();
    const tshirtNotMatch = tshirts.filter(tshirt => {
      let tshirtNameKey = tshirt.tshirtName.toLowerCase()
      return !tshirtNameKey.includes(keyTypeLower) 
    }
    )
    if(keyTypeLower==''){
      return productEvent.displayAll();
    } else {
       return productEvent.hideItem(tshirtNotMatch)} 
      // tshirtNotMatch จะ return tshirts ที่มี name หรือ description "ไม่เหมือน"กับค่าที่ป้อนลงไปใน input
      // โดยใช้คำส่ง filter โดยภายในจะทำการเปรียบเทียบ name และ description ที่ตรงข้ามกับข้อมูลที่ป้อนด้วยใช้คำสั่ง  ! includes
      // และให้ return tshirt ที่ไม่ตรงกับที่ป้อนไป 
      // และตรวจจับเงื่อนไข หากค่าที่ป้อนไปเป็นค่าว่าง จะเรียกใช้คำสั่ง productEvent.displayAll();
      // หากไม่เป็นค่าว่างให้เรียกใช้ hideItem(tshirtNotMatch)
  })

  searchInput.addEventListener('keyup'
  , () => {
    const keyType = searchInput.value.trim();
    const keyTypeLower = keyType.toLowerCase();
    if(keyTypeLower==''){
      return productEvent.displayAll();}})
// เมื่อลบข้อมูลที่ป้อนใน searchbutton ด้วย backspaceจนข้อมูลนั้นเป็น ""
// ให้แสดงผลสินค้าทั้งหมด ด้วยฟังก์ชัน productEvent.displayAll()

cart.addEventListener(
  'click',
  () => {
    productEvent.calculateTotalPrice();
  },false);
// เรียกใช้ function calculateTotalPrice() เมื่อมีการคลิกที่ไอค่อนรถเข็น

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
  // เปลี่ยน css เมื่อมีการ click ที่ปุ่มเปลี่ยน theme 
)

CookieUtil.checkCookie();