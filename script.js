const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const qtyInput = document.getElementById("quantity");
const addProductButton = document.getElementById('add-product');
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

const MIN = Number(qtyInput.min);
const MAX = Number(qtyInput.max);


let totalPrice = 0;
let products = []

function addProduct(){
  let productName = productNameInput.value;
  let productPrice = productPriceInput.value;
  let newProduct = {name: productName, price: productPrice}
  products.push(newProduct);

  for (let i = 0; i < products.length; i++) {
    const pName = products[i].name;
    const pPrice = products[i].price
    console.log(`Added a ${pName} for $${pPrice}`);
  }

  productNameInput.value = "";
  productPriceInput.value = "";

  productNameInput.focus()//retruns the keyboard users back to the first field after adding
  return newProduct;
}

function displayProductList(product){
  cart.innerHTML = "";//remove li items from last render
  products.forEach(item =>{
    const pItem = document.createElement("li");
    pItem.classList.add("cart-item")
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("aria-label", `Delete ${item.name}`)
    pItem.innerText = `${item.name} $${item.price}`;
    deleteButton.innerText = "DELETE";
    pItem.appendChild(deleteButton);
    cart.appendChild(pItem);
    deleteButton.addEventListener("click", function(e){
      console.log(e.target);
      removeItem(item, pItem);
    })
  })
  updateTotalPrice(parseFloat(product.price))
}
 
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}
 
// Function to remove an item
function removeItem(item, itemElement) {
  console.log(item);
  const price = item.price;
  updateTotalPrice(-price);
  itemElement.remove();
}

addProductButton.addEventListener("click", function(e){
  if(productNameInput.value === ""  || productPriceInput.value === ""){
        alert("Please Enter a product name and price")
        return;
    } else if (productNameInput.value.length <= 2){
      alert("There is No Product with that product name")
      return;
    }

  const addedProduct = addProduct();
  displayProductList(addedProduct);
  console.log(e);
  
})


increaseBtn.addEventListener("click", function() {
    console.log("increase");
});

decreaseBtn.addEventListener("click", function() {
  console.log("decrease");
});
