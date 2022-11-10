import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../src/components/Footer";
import ItemListContainer from "../src/components/ItemListContainer";
import Navbars from "../src/components/Navbars";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";
import ItemDetailContainer from "./components/ItemDetailContainer";
import BodyApp from "../src/components/BodyApp";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbars />
        <BodyApp></BodyApp>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category/:idcategory" element={<ItemListContainer />} />
          <Route path="/item/:iditem" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
