export const cartEvents = {
    productadded: [],
    getCart: function () {
        return this.productadded;
      },
      add: function (tshirt) {
            
        cartEvents.productadded = localStorage.getItem('cart');
        if (cartEvents.productadded == undefined || cartEvents.productadded.length === 0) {
            cartEvents.productadded = [];
        } else {
            cartEvents.productadded = JSON.parse(cartEvents.productadded);
        }

        let tshirt_Id = tshirt.tshirtId;

        if (tshirt.tshirtStock > 0) {
            let index = cartEvents.productadded.findIndex((item) => item.tshirtId === tshirt_Id);
            // let index =  cartEvents.productadded.findIndex((item) => item.tshirtId === tshirt_Id); 
            if (index !== -1) {
                cartEvents.productadded[index].qty++;
            } else {
            //   let cartAdd = {
            //     tshirtId: tshirt.tshirtId,
            //     qty: 1,
            //   };
              cartEvents.productadded.push({tshirtId: tshirt.tshirtId,qty: 1});
            }
        }
    localStorage.setItem('cart', JSON.stringify(cartEvents.productadded));
},  removeAll : function () {
    return productadded = [];
},
    cartNumber: function () {
        let productnum = localStorage.getItem('cartnumber')
        //เรียกใช้ข้อมูล cartnumber
        productnum = parseInt(productnum);
        //แปลง productnum ให้เป็นตัวเลขจำนวนเต็มเพื่อนำไปนับ

        if (productnum) {
            localStorage.setItem('cartnumber', productnum + 1);
            document.querySelector('.cart span').textContent = productnum + 1;
            // เพิ่มตัวเลขของ Cart ตั้งแต่ 1 เป็นต้นไป ถ้าเป็น 0 จะต้องไปที่ else
        } else {
            localStorage.setItem('cartnumber', 1);
            document.querySelector('.cart span').textContent = 1;
            // ถ้า Cart มีค่าเป็น 0 จะมาทำ else เพื่อที่จะนับค่าเป็น 1
        }
    }
}
    