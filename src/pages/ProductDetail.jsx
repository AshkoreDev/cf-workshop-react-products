import { useState, useEffect } from 'react';
import Details from './components/Details.jsx';

function ProductDetail() {

	const [detail, setDetail] = useState([]);

	useEffect(() => {

		fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((data) =>setDetail(data));

	}, []);

	return (

		<section>
			<Details detail={detail}/>
		</section>

	);
};

export default ProductDetail;