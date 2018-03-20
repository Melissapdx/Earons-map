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
	yearDidChange(year) {
		this.setState({
			activeYear: year
		});
	}

	render(){
		return (
			<div>
				<YearsNav yearDidChange={this.yearDidChange.bind(this)} />
				<ShowMap activeYear={this.state.activeYear}/>
			</div>
		);
		
	}
};
export default HomePage;