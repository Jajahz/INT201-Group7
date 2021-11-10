import { tshirts } from './Tshirt.js';

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
//querySelector ใช้เรียก css ที่ match กับ id tshirtList เพื่อให้ divTshirtsEle นั้นไปอยู่ตำแหน่งเดียวกับ id นั้น


const searchInput = document.getElementById("searchBar");

searchInput.addEventListener('keyup', () => {
  const keyType = searchInput.value.trim();
  const keyTypeLower = keyType.toLowerCase();
  const tshirtMatch = tshirts.filter(tshirt =>
    {
      let tshirtNameKey = tshirt.tshirtName.toLowerCase()
      let tshirtDescKey = tshirt.tshirtDesc.toLowerCase()

      return tshirtNameKey.includes(keyTypeLower) ||
      tshirtDescKey.includes(keyTypeLower)
    }
  )
  return showTshirt(tshirtMatch)
})

const showTshirt = (tshirts) => {
  const divTshirtsEle = document.querySelector('#tshirtList');

  divTshirtsEle.innerHTML = null;

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
    })
    
    function cartnumber() {
    let prodnum = sessionStorage.getItem('cartnumber')
    
    prodnum = parseInt(prodnum);
    
    if(prodnum){
    sessionStorage.setItem('cartnumber', prodnum + 1);
    document.querySelector('.cart span').textContent = prodnum + 1;
    }else{
    sessionStorage.setItem('cartnumber', 1);
    document.querySelector('.cart span').textContent = 1;
    }
    }

    divTshirtEle.appendChild(card);
    divTshirtsEle.appendChild(divTshirtEle);
  }
};
