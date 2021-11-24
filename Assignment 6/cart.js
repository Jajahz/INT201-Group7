export const cartEvents = {
    productadded: [],
    getCart: function () {
        let currentproductInStock = localStorage.getItem('cart');
        if (currentproductInStock == undefined || currentproductInStock === 0) {
            currentproductInStock = [];
        } else {
            currentproductInStock = JSON.parse(currentproductInStock);
        }
        return currentproductInStock;
        //ฟังก์ชัน getCard() เป็นฟังก์ชันที่จะตรวจสอบค่าภายใน storage ที่มี key เป็น cart
        // และ return สินค้าที่อยุ่ภายใน localStorage ออกมา
        // ที่มีฟังก์ชันนี้เพราะป้องกันการเขียนโค้ดซ้ำ
    },
    add: function (tshirt) {
        cartEvents.productadded = cartEvents.getCart();
        let tshirt_Id = tshirt.tshirtId;
        if (tshirt.tshirtStock > 0) {
            let index = cartEvents.productadded.findIndex((item) => item.tshirtId === tshirt_Id);
            if (index !== -1) {
                cartEvents.productadded[index].qty++;
            } else {
                cartEvents.productadded.push({ tshirtId: tshirt.tshirtId, tshirtName: tshirt.tshirtName, tshirtPrice: tshirt.tshirtPrice, qty: 1 });
            }
        }
        localStorage.setItem('cart', JSON.stringify(cartEvents.productadded));
        cartEvents.AmountInCart();
        // ฟังก์ชันเพิ่มสินค้าเข้ารถเข็น และ setเข้า local storage โดยใช้ชื่อ cart 
        // ฟังก์ชันนี้จะนำ tshirt id จาก parameter ที่ส่งมาในการ find index ว่ามีสินค้านี้อยู่ในรถเข็นแล้วหรือไม่ ซึ่ง productadded จะเป็น array ที่เก็บสินค้าภายในรถเข็นทั้งหมด
        // หากมีอยู่ภายในarray จะ return index ออกมาและจะเข้าถึงarray ด้วย indexนั้น เพื่อไปเพิ่ม qty หรือจำนวนที่อยู่ด้านใน
        // หากไม่มี findindex จะ return -1 และ จำทำการ push ข้อมูลสินค้าเข้าไปใน array productadded และบันทึกเข้า local storage
        // เรียกใช้ ฟังก์ชัน AmountOnCart() เพื่อเทำการคำณวนจำนวนสินค้า และ set จำนวนนั้นเข้า local storage + แสดงผลใน html
    },
    getAmountInCart: function () {
        cartEvents.productadded = cartEvents.getCart();
        let totalItemInCart =  cartEvents.productadded.reduce((prep,curp)=>(prep+curp.qty),0);
        return totalItemInCart;
    },
    // ทำการนับจำนวนสินค้าทั้งหมดภายในรถเข็น โดยนำมาจาก local storage และเข้า for loop และ return ค่าผลรวมสินค้าในตะกร้าทั้งหมดออกมา
    // จะไม่เก็บจำนวน สินค้าในตะกร้าเข้า local storage เพราะว่าเปลืองพื้นที่ในการจัดเก็บ หากภายในอนาคตมีข้อมูลที่จำเป็นในการจัดเก็บ จะสามารถใช้ได้เลย
    // การหาจำนวนสินค้าในรถเข็นทั้งหมดเก็บอยู่ใน local storage ที่มี key เป็น cart อยุ่แล้ว เพียงแค่เรียกออกมาคำณวน ซึ่งคือความรับผิดชอบของฟังก์ชันนี้
    AmountInCart: function () {
        document.querySelector('.cart span').textContent = cartEvents.getAmountInCart();
    },
    // การแสดงผล html จำนวนที่จะแสดงผลมาจากค่าที่ getAmountInCart() return ออกมา
    resetLocalStorage: function () {
        localStorage.removeItem('cart');
    },
    // remove local storage ที่มี key เป็น cartnumber และ cart
    resetCart: function () {
        cartEvents.resetLocalStorage();
        document.querySelector('.cart span').textContent = 0;
    }
    //เรียก ฟังก์ชัน resetLocalStorage และทำการ set textcontext ให้เป็น 0 สำหรับการแสดงผล
}

