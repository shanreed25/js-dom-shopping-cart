const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
 
let totalPrice = 0;
let products = []

function addproduct(){



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
  //get value of the inputs and create and object and push to products
  // if(!productNameInput.value || !productPriceInput.value){
  //   alert("NO")

  // }
  let productName = productNameInput.value;
  let productPrice = productNameInput.value;
  let newProduct = {name: productName, price: productPrice}
  products.push(newProduct);
  console.log(products);
  for (let i = 0; i < products.length; i++) {
    const element = products[i].name;
    console.log(element);
    
  }
  // for(let product of productss){
  //   let listItem = document.createElement("li");
  //   listItem.innerText = product;
  //   cart.appendChild(listItem)
  // }
  // console.log(Boolean(productName));

  //Create li tag
  //add the input content to the li tag
  //append li to ul
  
})