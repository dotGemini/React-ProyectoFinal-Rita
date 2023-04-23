import { useContext } from "react";
import { cartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"

function CartWidget () {

    const { totalItems } = useContext(cartContext);
    return(
        <div>
          <Link to="/cart">
          <span className="cartWidget_count">{totalItems()}</span>
          🛒
          </Link>
        </div>
    )
}

export default CartWidget;