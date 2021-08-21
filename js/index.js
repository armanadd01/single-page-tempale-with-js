// updating product price 
function updateProductOption( number, option, price) {
    const optionInput = document.getElementById(number + option + '-button'); 
    const productPrice = document.getElementById(option + '-price');
    productPrice.innerText = price;
    calculateTotalPrice();
}
// gettting price for calculation
 function getPrice (option){
     const productPrice = document.getElementById(option + '-price');
     const priceCollected = parseInt(productPrice.innerText);
     return priceCollected;
 }
//calculate total price
 function calculateTotalPrice() {
    const bestPrice = 1299;
    const memoryPrice = getPrice('memory');
    const storagePrice = getPrice('storage');
    const deliveryPrice = getPrice('delivery');
    const subTotal = bestPrice + memoryPrice + storagePrice + deliveryPrice;
    //  update on the html
    document.getElementById('total-price').innerText = subTotal;
     document.getElementById('final-total').innerText = subTotal;
}


// handle memory option
document.getElementById('first-memory-button').addEventListener('click', function(){
    updateProductOption('first-', 'memory', 00);
});
document.getElementById('second-memory-button').addEventListener('click', function(){
    updateProductOption('second-', 'memory', 180);
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
    const promoInput = document.getElementById('promo-code');
    //use promo code and calculate total
    if(promoInput.value == "stevekaku"){
        const promoOutput = document.getElementById('final-total');
        const promoParcent = (promoOutput.innerText / 100) * 20;
        promoOutput.innerText = parseFloat(promoOutput.innerText) - promoParcent;
        console.log(promoOutput.innerText);
    }
    else {
        alert("Opss!! Sorry! you don't get the offer");
    }
    document.getElementById('promo-button').disabled=true;
    promoInput.value = "";
});