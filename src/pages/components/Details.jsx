import { CardDetail } from './../style.js';

function Details({ detail }) {

	const { image, title, category, rating, description, price } = detail;

	return (

		<CardDetail>
			<figure>
				<img src={image} alt={`${title} image`}/>
			</figure>
      <div>
      	<h2>{title}</h2>
      	{rating && <p>{rating.rate} <span>★</span></p>}
      	<p><strong>Category: </strong>{category}</p>
      	<p>{description}</p>
      	<p>{price}<strong>$</strong></p>
      </div>
		</CardDetail>

	);
};

export default Details;