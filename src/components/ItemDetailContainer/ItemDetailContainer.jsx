import "./ItemDetailContainer.css"
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/loader";
import { getSingleItem } from "../../services/firestore";



function ItemDetailContainer() {
  const [products, setProduct] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    getSingleItem(id).then((respuesta) => {
      setProduct(respuesta);
    });
  }, [id]);

  if(products.length === 0) {
    return <Loader/>
  }

  return (
  <div>
    < ItemDetail products={products} /> 
  </div>
  );
}

export default ItemDetailContainer;