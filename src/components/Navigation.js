import React from 'react';

class Navigation extends React.Component {
	render() {
		return (
				<header className="navigation">
				<div class="typewriter">
					<h1 className="header">Earons</h1>
				</div>
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