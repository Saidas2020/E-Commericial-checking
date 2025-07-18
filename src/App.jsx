

import './App.css'
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from '../src/assets/banner_mens.png'
import women_banner from '../src/assets/banner_women.png'
import kid_banner from '../src/assets/banner_kids.png';

function App() {
  // const [count, setCount] = useState(0)

  return (
    
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/mens' element={<ShopCategory banner={men_banner} category="mens"/>}/>
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="womens"/>}/>
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kids"/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
          </Routes>
          <Footer />
      </BrowserRouter>
      </div>
        
  );
}

export default App
