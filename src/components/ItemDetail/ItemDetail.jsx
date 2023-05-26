import Flex from "../Flex/Flex";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { cartContext } from "../../context/cartContext";

import { Link } from "react-router-dom";

function ItemDetail({products}) {

  const {cart, addItem } = useContext(cartContext)
  console.log("cart:", cart);

  const [addedToCart, setAddedToCart] = useState(false);

  function onAddToCart(count) {
    setAddedToCart(count);
    addItem(products, count);
    console.log("Agregado");
  }

    return(
      <Flex>
      <div className="detail">
        <img src={products.img} alt="imagen"></img>
        <h1>{products.title}</h1>
        <h3>{products.category}</h3>
        <p>${products.price}</p>
        
        {addedToCart ? 
          <Link to="/cart"> <button> Ir al carrito </button> </Link> 
        : <ItemCount onAddToCart={onAddToCart} stock={products.stock}/>}
      </div>
      </Flex>
    );
}

export default ItemDetail;