import styled from 'styled-components';

export const Title = styled.h2 ` 
	width: 220px;
	margin: 30px auto;
	color: #673ab7;
	text-align: center;
	letter-spacing: 1.2px;
`;
 
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
	min-height: 380px;
	padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	border-radius: 10px;
	border: 1px solid #000;

	@media (min-width: 768px) {
		width: 300px;
		min-height: 350px;
	}

	& > figure {
		width: 200px;
		height: 250px;
		margin: 0 auto;

		& img {
			width: 100%;
			height: 100%;
		}
	}

	& > div {
		color: #000;
		text-align: center;

		& h2 {
			font-size: 18px;
		}
		& a {
			color: #000;
		}
		& p {
			margin-top: 10px;
		}
		& span {
			color: #804c00;
		}
	}
`;