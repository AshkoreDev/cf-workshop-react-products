import { Card } from './../style.js';

function ProductCard({ product }) {

	const { title, price, image } = product;

	return (

		<Card>
			<img src={image} alt="" width="120" height="160"/>
			<a href="">{title}</a>
			<p>${price}</p>
		</Card>

	);
};

export default ProductCard;