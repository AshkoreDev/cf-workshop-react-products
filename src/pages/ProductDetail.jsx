import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Details from './components/Details.jsx';
import { Title } from './style.js';

function ProductDetail() {

	const { id } = useParams();

	const [detail, setDetail] = useState({});

	useEffect(() => {

		fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setDetail(data));

	}, []);
	
	return (

		<section>
			{
				(Object.keys(detail).length === 0)
					? <Title>Cargando...</Title>
					: <Details detail={detail}/>
			}	
		</section>

	);
};

export default ProductDetail;