import Flex from "../Flex/Flex";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function ItemDetail({products}) {

  const {cart, addItem } = useContext(cartContext)
  console.log("cart:", cart);

  function onAddToCart(count) {
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
        <ItemCount onAddToCart={onAddToCart}/>

        <Link to={`/detalle/${products.id - 1}`}>
          <Button>Anterior</Button>
        </Link>
        <Link to={`/detalle/${products.id + 1}`}>
          <Button>Siguiente</Button>
        </Link>
      </div>
      </Flex>
    );
}

export default ItemDetail;