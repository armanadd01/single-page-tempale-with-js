//
function updateProductOption( number, option, price) {
    const optionInput = document.getElementById(number + option + '-button'); 
    const productPrice = document.getElementById(option + '-price');
    productPrice.innerText = price;
    calculateTotalPrice();
}

 function getPrice (option){
     const productPrice = document.getElementById(option + '-price');
     const priceCollected = parseInt(productPrice.innerText);
     return priceCollected;
 }

 function calculateTotalPrice() {
    const bestPrice = 1299;
    const memoryPrice = getPrice('memory');
    const storagePrice = getPrice('storage');
    const deliveryPrice = getPrice('delivery');
    // const memoryPrice = getPrice();
    const subTotal = bestPrice + memoryPrice + storagePrice + deliveryPrice;
    // const tax = subTotal / 20;
    // const totalPrice = subTotal - tax;
    // update on the html
    document.getElementById('total-price').innerText = subTotal;
    // document.getElementById('tax-amount').innerText = tax;
    // document.getElementById('total-price').innerText = totalPrice;
}


// handle memory option
document.getElementById('first-memory-button').addEventListener('click', function(){
    updateProductOption('first-', 'memory', 00);
});
document.getElementById('second-memory-button').addEventListener('click', function(){
    updateProductOption('second-', 'memory', 180);
    // getPrice ('memory', 180);
});

//handle storage option
document.getElementById('first-storage-button').addEventListener('click', function(){
    updateProductOption('first-', 'storage', 00);
});
document.getElementById('second-storage-button').addEventListener('click', function(){
    updateProductOption('second-', 'storage', 100);
});
document.getElementById('third-storage-button').addEventListener('click', function(){
    updateProductOption('third-', 'storage', 180);
});

//handle delivery option 
document.getElementById('first-delivery-button').addEventListener('click', function(){
    updateProductOption('first-', 'delivery', 00);
});
document.getElementById('second-delivery-button').addEventListener('click', function(){
    updateProductOption('second-', 'delivery', 20);
});

//handle promo code
document.getElementById('promo-button').addEventListener('click', function(){
    
});