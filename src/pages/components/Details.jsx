
function Details({ detail }) {

	const { image, title, category, rating, description, price } = detail;
	return (

		<>
			<figure>
				<img src={image} alt={`${title} image`}/>
			</figure>
      <div>
      	<h2>{title}</h2>
      	<p>{category}</p>
      	<p>{rating}</p>
      	<p>{description}</p>
      	<p>{price}</p>
      </div>
		</>

	);
};

export default Details;