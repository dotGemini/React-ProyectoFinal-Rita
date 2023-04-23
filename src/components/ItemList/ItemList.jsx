import Flex from '../Flex/Flex'
import Item from '../Item/Item'


function ItemList(props) {
    return(
        <Flex>
      {
        props.items.map((producto) => (
        <Item
          key={producto.id}
          id={producto.id}
          title={producto.title}
          price={producto.price}
          category={producto.category}
          img={producto.img}
          stock={producto.stock}
          />
        ))
      }
    </Flex> 
    )
}

export default ItemList;