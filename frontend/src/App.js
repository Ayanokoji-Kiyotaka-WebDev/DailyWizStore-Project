import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import ShopCategory from "./Pages/ShopCategory";
import bund from "./Components/Assets/bund.png"
import card from "./Components/Assets/card.jpg"
import member from "./Components/Assets/member.png"


import LoginSignup from "./Pages/LoginSignup";

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop gender="all" />} />
          <Route path="/bundles" element={<ShopCategory banner={bund} category="bundles" />} />
          <Route path="/PrepaidCards" element={<ShopCategory banner={card} category="PrepaidCards" />} />
          <Route path="/membership" element={<ShopCategory banner={member} category="membership" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
