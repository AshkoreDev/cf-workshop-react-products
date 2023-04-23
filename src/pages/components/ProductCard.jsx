import { Link } from 'react-router-dom';
import { Card } from './../style.js';

function ProductCard({ product }) {

	const { id, title, price, image } = product;

	return (

		<Card>
			<img src={image} alt={`${title} image`} width="120" height="160" loading="lazy"/>
			<Link to={`/products/${id}`}>{title}</Link>
			<p>{price}$</p>
		</Card>

	);
};

export default ProductCard;