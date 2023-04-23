import "./item.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function Item(props) {

  const styleImg = { filter: props.stock === 0 ? "grayscale(0.9)" : ""}

  return (

      <div id={props.id} className="item-card">
        <div className="item-card_header">
          <h2>{props.title}</h2>
        </div>
        <div className="item-card_img">
          <img style={styleImg} src={props.img} alt="imagen"></img>
        </div>

        <div className="item-card_detail">
          <h4>$ {props.price}</h4>
          <small>{props.category}</small>
        </div>

        {props.stock === 0 && <small>Sin Stock</small>}
        {props.stock > 0 && (
        <Link to={`/detalle/${props.id}`}>
          <Button>Ver detalle</Button>
        </Link>
        )}
        
      </div>

  );
}
