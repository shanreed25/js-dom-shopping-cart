const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const productQtyInput = document.getElementById("quantity");
const addProductButton = document.getElementById('add-product');
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

const MIN = Number(productQtyInput.min);
const MAX = Number(productQtyInput.max);


let totalPrice = 0;
let products = []

function addProduct(){
  const productName = productNameInput.value;
  const productPrice = productPriceInput.value;
  const productQty = productQtyInput.value;
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
    pItem.innerText = `${item.name} $${item.price} Qty:${item.quantity}`;

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("aria-label", `Delete ${item.name}`)
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


function setQty(num){
  productQtyInput.value = num;
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
