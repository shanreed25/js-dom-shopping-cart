const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
 
let totalPrice = 0;
let products = []

function addProduct(){
  let productName = productNameInput.value;
  let productPrice = productPriceInput.value;
  let newProduct = {name: productName, price: productPrice}
  products.push(newProduct);
  console.log(products);
  for (let i = 0; i < products.length; i++) {
    const pName = products[i].name;
    const pPrice = products[i].price
    console.log(`Added a ${pName} for $${pPrice}`);
  }

  productNameInput.value = "";
  productPriceInput.value = "";
  return newProduct;//return the product so I have access to it
}

 
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}
 
// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}

addProductButton.addEventListener("click", function(){
addProduct();
})