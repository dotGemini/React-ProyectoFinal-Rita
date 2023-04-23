import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import Loader from "../Loader/loader"

import { getItems, getItemsByCategory } from "../../services/firestore"


/*--------------------------------------------*/

function ItemListContainer() {

  const [products, setProducts] = useState([]);
  const { categoryid } = useParams();
  
  useEffect(() => {
      if (categoryid === undefined) {
        getItems().then((respuesta) => {
          setProducts(respuesta);
        });
      } else {
        getItemsByCategory(categoryid).then((respuesta) =>
          setProducts(respuesta)
        );
      }
    }, [categoryid]);

    if(products.length === 0) {
      return <Loader/>
    }

  return (
    < ItemList items = {products} /> 
  )
}

export default ItemListContainer;