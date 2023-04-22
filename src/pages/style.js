import styled from 'styled-components';

export const ProductsList = styled.section `
	margin: 20px auto;
	padding: 10px;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 20px;
`;

export const Card = styled.article `
	width: 250px;
	height: 280px;
	padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	border-radius: 10px;
	border: 1px solid #000;

	& > img {
		width: 120px;
		height: 160px;
	}

	& > a {
		color: #000;
		text-align: center;
	}

	& > p {
		font-weight: bold;
	}
`;