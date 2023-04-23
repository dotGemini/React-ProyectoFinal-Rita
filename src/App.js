import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./components/CartContainer/cartContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import { exportDataWithBatch } from "./services/firestore";


function App() {
  return (
    <>
    
    <CartProvider>
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path="/" element={ <ItemListContainer /> } />
          <Route path="/detalle/:id" element={ <ItemDetailContainer /> } />
          <Route path="/category/:categoryid" element={ <ItemListContainer/> } />
          <Route path="/cart" element = {<CartContainer/>}/>

        </Routes>

      </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
