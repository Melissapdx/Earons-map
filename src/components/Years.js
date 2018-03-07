import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class YearsNav extends React.Component {
	render(){
		return (
			<ul className="years">
				<h2>Years</h2>
	            <li>1976</li>
	            <li>1977</li>
	            <li>1978</li>
	            <li>1979</li>
	            <li>1980</li>
	            <li>1981</li>
	            <li>1982</li>
	            <li>1983</li>
	            <li>1984</li>
	            <li>1985</li>
	            <li>1986</li>
			</ul>
		);
	}
}

export default YearsNav;