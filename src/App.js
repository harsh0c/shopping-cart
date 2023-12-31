import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Shop from "./pages/shop/Shop"
import Cart from "./pages/cart/Cart"
import { ShopContextProvider } from './context/ShopContext';

function App() {
  return (
      <div className="App">
        <ShopContextProvider>
          <Router>
            <Navbar/>
            <Routes>
              <Route path='/shopping-cart' element={<Shop/>}/>
              <Route path='/cart' element={<Cart/>}/>
            </Routes>
          </Router>
        </ShopContextProvider>
      </div>
  );
}

export default App;
