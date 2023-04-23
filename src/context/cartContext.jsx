import { createContext, useState } from "react";

const cartContext = createContext ({default: "default"});

function CartProvider (props) {
    const [cart, setCart] = useState([]);
    const newCart = [...cart];

function addItem (product, countFromCounter) {
    if (isItemInCart(product.id)) {
        const itemIndex = cart.findIndex(
          (itemInCart) => itemInCart.id === product.id
        );
        newCart[itemIndex].count += countFromCounter;
      } else {
        newCart.push({ ...product, count: countFromCounter });
      }
      console.log(newCart)
      setCart(newCart);
}

function removeItem(id){
  const newCart = cart.filter((product)=> product.id !==id);
  setCart(newCart)
}

function clearCart() {
  setCart([]);
}

function isItemInCart(id) {
    return cart.some((itemInCart) => itemInCart.id === id);
}

function getCountInCart(id) {

    const item = cart.find((itemInCart) => itemInCart.id === id);
    return item !== undefined ? item.count : 0;
}

function getTotalPrice(){
    let total = 0;
    cart.forEach((product) => (total = total + (product.price * product.count)));
    return total;
}

function totalItems(){
  let totalItems = 0;
  cart.forEach(item=> totalItems +=item.count);
  return totalItems;
}

return (
    <cartContext.Provider
      value={{ cart: cart, addItem, isItemInCart, getCountInCart, removeItem, getTotalPrice, clearCart, totalItems }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export {cartContext, CartProvider};