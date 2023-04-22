import { useState, useEffect } from 'react';
import { ProductsList } from './style.js';
import ProductCard from './components/ProductCard.jsx';

function Products() {

	const [products, setProducts] = useState([]);

	useEffect(() => {

		fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((data) =>setProducts(data));

	}, []);
	
	return (

		<section>
			<h2>Lista de productos</h2>
			<ProductsList>
				{
					(!products)
						? <h3>Cargando...</h3>
						: products.map((product) => <ProductCard key={product.id} product={product}/>)
				}
			</ProductsList>
		</section>

	);
};

export default Products;