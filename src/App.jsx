import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Products from './pages/Products.jsx';
import ProductDetail from './pages/ProductDetail.jsx';

function App() {

  return (

  	<BrowserRouter>
  		<Navbar/>
  		
  		<Routes>
  			<Route path="/products" element={<Products/>}/>
  			<Route path="/products/:id" element={<ProductDetail/>}/>
  			<Route path="/:rest*" element={<div> <h2>Error</h2> </div>}/>
  		</Routes>
  	</BrowserRouter>

  );
};

export default App;