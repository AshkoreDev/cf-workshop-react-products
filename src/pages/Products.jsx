import { useState, useEffect } from 'react';
import { Title, ProductsList } from './style.js';
import ProductCard from './components/ProductCard.jsx';

function Products() {

	const [products, setProducts] = useState([]);

	useEffect(() => {

		fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((data) => setProducts(data));

	}, []);
	
	return (

		<section>
			<Title>PRODUCTS LIST</Title>
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