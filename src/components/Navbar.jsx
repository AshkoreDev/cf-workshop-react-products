import { Link } from 'react-router-dom';
import { NavBar } from './style.js';

function Navbar() {

	return (

		<header>
			<NavBar>
				<ul>
					<li>
						<h2>Workshop React</h2>
					</li>
					<li>
						<Link to="/products">Products</Link>
					</li>
				</ul>
			</NavBar>
		</header>
	);
};

export default Navbar;