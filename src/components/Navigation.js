import React from 'react';

class Navigation extends React.Component {
	render() {
		return (
				<header className="navigation">
					<h1 className="header">Earons</h1>
					<ul className="menu">
						<li>Home</li>
						<li>About</li>
						<li>Contact</li>
					</ul>
				</header>
			);                
    }
}

export default Navigation;