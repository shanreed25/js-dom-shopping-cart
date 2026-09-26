const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const productQtyInput = document.getElementById("quantity");
const addProductButton = document.getElementById('add-product');
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');



let totalPrice = 0;
let products = []

function addProduct(){
  const productName = productNameInput.value;
  const productPrice = Number(productPriceInput.value);
  const productQty = Number(productQtyInput.value);
  const newProduct = {name: productName, price: productPrice, quantity: productQty}
  products.push(newProduct);

  for (let i = 0; i < products.length; i++) {
    const pName = products[i].name;
    const pPrice = products[i].price;
    const pQty = products[i].quantity;
    console.log(`Added ${pQty} ${pName} for $${pPrice * pQty}`);
  }

  productNameInput.value = "";
  productPriceInput.value = "";
  productQtyInput.value = "1";
  console.log(products);
  productNameInput.focus()//retruns the keyboard users back to the first field after adding
  return newProduct;
}

function displayProductList(product){
  cart.innerHTML = "";//remove li items from last render
  products.forEach(item =>{
    const pItem = document.createElement("li");
    pItem.classList.add("cart-item");

    const nameDisplay = document.createElement("p");
    nameDisplay.innerText = `${item.name}`;
    const priceDisplay = document.createElement("p");
    priceDisplay.innerText = `$${Number(item.price).toFixed(2)}`;
    const qtyDisplay = document.createElement("p");
    qtyDisplay.innerText = `${item.quantity}`;

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("aria-label", `Delete ${item.name}`)
    deleteButton.innerText = "DELETE";


    pItem.append(nameDisplay, priceDisplay, qtyDisplay, deleteButton);
    cart.appendChild(pItem);


    deleteButton.addEventListener("click", function(e){
      console.log(e.target);
      removeItem(item, pItem);
    })
  })
  updateTotalPrice(parseFloat(product.price), product.quantity);
}
 
// Function to update the total price
function updateTotalPrice(amount, qty) {
  totalPrice += amount * qty;
  console.log(totalPrice)
  totalPriceSpan.textContent = totalPrice.toFixed(2);
  console.log(totalPriceSpan.textContent)
}
 
// Function to remove an item
function removeItem(item, itemElement) {
  console.log(item);
  const price = item.price;
  const qty = item.quantity;
  updateTotalPrice(-price, qty);
  itemElement.remove();

  //If nothing matches, findIndex() returns -1
  const itemIndex = products.findIndex(product => product.name === item.name);

  // splice(-1, 1) removes the last item, this check the index first
  if (itemIndex !== -1) {
    products.splice(itemIndex, 1);
  }
  
}


function setQty(num){
  productQtyInput.value = num;
}


addProductButton.addEventListener("click", function(e){
  if(productNameInput.value === ""  || productPriceInput.value === ""){
        alert("Please Enter a product name and price")
        return;
    }
    
  if (productNameInput.value.length <= 2){
      alert("There is No Product with that product name")
      return;
    }

  if (productPriceInput.value <= 0){
    alert("Invalid Price, Enter a number greater than 0");
    return;
  }
 
  //Number input allow "E" and "e", which is and empty string in the console
  if (productQtyInput.value === "" || productQtyInput.value == 0 ) {
    alert("Invalid Quantity");
    return
  }

  const addedProduct = addProduct();
  displayProductList(addedProduct);
  console.log(e);
  
})

productQtyInput.addEventListener("change", () => {
  const numberAdded = Number( productQtyInput.value)
  console.log(numberAdded);
  //get input value

})
increaseBtn.addEventListener("click", function() {
  //increase qty input value
  const qty = Number(productQtyInput.value) + 1;
  setQty(qty);
    console.log(qty);
});

decreaseBtn.addEventListener("click", function() {
  //decrease qty input value
  const qty = Number(productQtyInput.value) - 1;
  setQty(qty);
  console.log(qty);
});
