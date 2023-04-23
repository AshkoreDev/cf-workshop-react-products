import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Title, ProductsList } from './style.js';
import ProductCard from './components/ProductCard.jsx';

function ProductDetail() {

	const { id } = useParams();

	const [product, setProduct] = useState({});

	useEffect(() => {

		fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));

	}, []);
	
	return (

		<ProductsList>
			{
				(Object.keys(product).length === 0)
					? <Title>Cargando...</Title>
					: <ProductCard 
							product={product} 
							rating={product.rating} 
							category={product.category} 
							description={product.description}
					  />
			}	
		</ProductsList>

	);
};

export default ProductDetail;