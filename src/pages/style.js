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

export const CardDetail = styled.article `
	width: 300px;
	margin: 10px auto;
	padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	border-radius: 10px;
	border: 1px solid #000;

	& > figure {
		width: 250px;
		// height: 358px;
		margin: 0 auto;

		& > img {
			width: 100%;
		}
	}

	& > div {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;

		& h2 {
			text-align: center;
		}
		
		& span {
			color: #804c00;
		}
	}
`;