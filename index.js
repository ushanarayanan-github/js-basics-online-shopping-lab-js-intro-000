var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(name) {
 var price = Math.random() * 99 + 1
 var item = {itemName: name, itemPrice:price}
 cart.push(item)
 return `${name} has been added to your cart.`
 // write your code here
}

function viewCart() {
  var returnString = "In your cart,"
  if (cart.length == 0) {
    return "Your shopping cart is empty."
  }
  else {
    for (let i = 0; i<cart.length;i++){
      returnString = `${returnString} you have ${cart[i].itemName} at $${cart[i].itemPrice}`
      if (i==cart.length-1){
        returnString=`${returnString} , and`
      }
      else {
        returnStrinf=`${returnString} ,`
      }
    }
  }
  return returnString
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
