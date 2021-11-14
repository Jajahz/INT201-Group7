const searchbtn = document.getElementById('mySearch');
// ตั้งให้ searchbtn คือ id mysearch
searchbtn.addEventListener(
  'click',
  //ตั้งค่าให้ทำ event นี้เมื่อคลิก
  () => {
    const search = document.getElementById('search');

    // ตั้งให้ search คือ id search
    if (search.style.display === 'none') {
      search.setAttribute('style', 'display : flex !important; ');
      //ถ้าหาก style ของ div ไม่มีอยู่หรือ none กดแล้วจะให้แสดงออกมา หรือ flex
    } else {
      search.setAttribute('style', 'display : none !important; ');
      //ถ้าหาก style ของ div มีอยู่หรือ flex กดแล้วจะให้ปิดไม่แสดง หรือ none
    }
  },
  false
  //ตั้งค่า event bubbling
);


const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
// ตั้งให้ searchInput คือ id searchBar
searchBtn.addEventListener(
  'click'
  , () => {
    const keyType = searchInput.value.trim();
    const keyTypeLower = keyType.toLowerCase();
    const tshirtMatch = tshirts.filter(tshirt => {
      let tshirtNameKey = tshirt.tshirtName.toLowerCase()
      let tshirtDescKey = tshirt.tshirtDesc.toLowerCase()

      return tshirtNameKey.includes(keyTypeLower) ||
        tshirtDescKey.includes(keyTypeLower)


      // tshirtMatch จะ return tshirts ที่มี name หรือ description เหมือนกับค่าที่ป้อนลงไปใน input
      // โดยใช้คำส่ง filter โดยภายในจะทำการเปรียบเทียบ name และ description ที่ตรงการข้อมูลที่ป้อนด้วยใช้คำส่าง includes  
    }
    )
    console.log(tshirtMatch)
    return showTshirt(tshirtMatch)
    // return method showTshirt เฉพาะที่เหมือนกับค่าที่ป้อนลงไป (keyTypeLower) หรือ สินค้าที่อยู่ใน tshirtMatch
  })
