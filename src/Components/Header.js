import React, {Component} from "react";
import Link from "react-router-dom/Link";

import "./Header.css"

class Header extends Component {
	render () {
		return (
			<div>
				<header className="header">
					<nav>
						<ul className="nav__links">
							<li><a href="/">Home</a></li>
							<li><a href="/blog">Blog</a></li>
							<li><a href="/project">Projects</a></li>
						</ul>
					</nav>
				</header>	
			</div>
		)
	}
}

export default Header;