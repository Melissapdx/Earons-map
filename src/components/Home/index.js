import React from 'react';
import YearsNav from './../Years';
import ShowMap from './../Map';

class HomePage extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			activeYear:null
		};
	}


	render(){
		return (
			<div>
				<YearsNav />
				<ShowMap />
			</div>
		);
		
	}
};
export default HomePage;