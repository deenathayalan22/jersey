import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Customization from './pages/Customization';
import About from './pages/About';
import Bar from './components/Bar/Bar';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import ProductDetails from './pages/ProductDetails';
import PlaceOrder from './pages/PlaceOrder';
import Checkout from './pages/Checkout';
import OrderSucces from './pages/OrderSucces';
import Error from './pages/Error';

function App() {
  return (
<>
<Router >
<Bar/>
<NavBar/>

<div className='container'>
<Routes>
                    {/* <Route element={<ProtectedRoute/>}> */}
                        <Route exact path='/' element={< Home />}></Route>
                        <Route exact path='/products' element={< Products />}></Route>
                        <Route exact path='/contact' element={< Contact />}></Route>
                        <Route exact path='/gallery' element={< Gallery />}></Route>
                        <Route exact path='/customization' element={< Customization />}></Route>
                        <Route exact path='/about' element={< About />}></Route>
                        <Route exact path='/products-details' element={< ProductDetails />}></Route>
                        <Route exact path='/place-order' element={< PlaceOrder />}></Route>
                        <Route exact path='/checkout' element={< Checkout />}></Route>
                        <Route exact path='/success' element={< OrderSucces />}></Route>
                        <Route exact path='*' element={< Error />}></Route>

                    {/* </Route> */}
                 {/* <Route exact path='/login' element={< Login />}></Route> */}
          </Routes>
</div>



<Footer/>
       </Router>

</>
  );
}

export default App;
