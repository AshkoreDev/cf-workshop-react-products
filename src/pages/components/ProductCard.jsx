import { Link } from 'react-router-dom';
import { Card } from './../style.js';

function ProductCard({ product, rating, category, description }) {

	const { id, title, price, image } = product;

	return (

		<Card>
			<figure>
				<img src={image} alt={`${title} image`} width="200" height="250" loading="lazy"/>
			</figure>
			<div>
				
				{ (description) ? <h2>{title}</h2> : <Link to={`/products/${id}`}>{title}</Link> }
				{ rating && <p>{rating.rate} <span>★</span></p> }
				{ category && <p><strong>Category: </strong>{category}</p> }
				{ description && <p>{description}</p> }
				<p>{price}<strong>$</strong></p>
				
			</div>
		</Card>

	);
};

export default ProductCard;