import styled from 'styled-components';

export const NavBar = styled.nav `
	padding: 10px 20px;
	background: #673ab7;

	& ul {
		display: flex;
		align-items: center;
		justify-content: space-between;
		list-style: none;
	}

	& h2 {
		color: #fff;
		font-size: 1.3em;
		font-style: italic;
		letter-spacing: 1.2px;
	}

	& a {
		color: #fff;
		font-size: 1.2em;
	}
`;