# Shooping Cart: Dynamic Content Creation
**Simulates core functionality used in modern e-commerce applications**

> A dynamic shopping cart application to practice and reinforce DOM manipulation skills. The application allow users to add, update, and remove items dynamically while keeping track of the total price.


- Dynamically creates and manipulates DOM elements to build interactive features
- Updates the DOM to reflect changes in user input, such as quantity updates and price calculations
- Event handling to implement interactivity for adding, updating, and removing items
- Efficient DOM manipulation techniques to minimize performance bottlenecks

### Functionality
- Can add products with different names and prices
- Handles attempts to add products with empty names or invalid prices
- Display Products: Each product appears in the list with the correct price and quantity
- Total of all products displays
- Remove Items: Items are remove from the products list and the total price updates accurately after removing items

## Reflection Questions
**How did you dynamically create and append new elements to the DOM?**
> I used a `displayProductlist()` function that builds a list item for every product. An `<li>` with three `<p>` elements, for name, price, quantity, and a delete`<button>`. It then adds the finished `<li>` to the cart. This function is ran eveytiime an item is added.

**What steps did you take to ensure accurate updates to the total price?**
> I set a `totalPrice` variable and every change to this variable goes through the `updateTotalPrice()` function. If a product is added the function is given its price and quantity and if a product is removed the function is given a negative price and quantity. The same `amount * qty` handles both adding and deleteing.


**How did you handle invalid input for product name or price?**if 
> The values are check before they are added if the name, price or quantity is invalid, there is an alert. The return then stops the function early so no bad product reaches the products array. The fields are cleared after adding and focus goes back to the name input.

**What challenges did you face when implementing the remove functionality?**
> Removing an item meant three things had to be updated, the total price, the products list and the list displayed in the page. The delete button listener holds the refernce to both the li element and the product object, This allow the removeItem() function to have what it needs to subtract and which element to remove. I used `findIndex()` to find the product in the array. I made sure to handle the case where `findIndex()` would return -1  because passing -1 to `splice()` would cause it to delete the lat item if no item is found. One limitation that realized was that if 2 products had the same name it deletes the first match.

