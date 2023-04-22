import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Details from './components/Details.jsx';

function ProductDetail() {

	const { id } = useParams();

	const [detail, setDetail] = useState({});

	useEffect(() => {

		fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setDetail(data));

	}, [detail]);

	return (

		<section>
			<Details detail={detail}/>
		</section>

	);
};

export default ProductDetail;