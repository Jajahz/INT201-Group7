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
            if (index !== -1) {
                cartEvents.productadded[index].qty++;
            } else {
                cartEvents.productadded.push({ tshirtId: tshirt.tshirtId, tshirtName: tshirt.tshirtName, tshirtPrice: tshirt.tshirtPrice, qty: 1 });
            }
        }
        localStorage.setItem('cart', JSON.stringify(cartEvents.productadded));
    },
    getTotalAmount: function () {
        let totalItemInCart = 0
        cartEvents.productadded.forEach(items => {
            totalItemInCart = totalItemInCart + items.qty;
        })
        return totalItemInCart;
    },
    AmountOnCart: function () {
        localStorage.setItem('cartnumber', cartEvents.getTotalAmount());
        document.querySelector('.cart span').textContent = cartEvents.getTotalAmount();
    },
    resetLocalStorage: function () {
        localStorage.removeItem('cartnumber');
        localStorage.removeItem('cart');
    },
    resetCart: function () {
        cartEvents.resetLocalStorage();
        document.querySelector('.cart span').textContent = 0;
    }
}

