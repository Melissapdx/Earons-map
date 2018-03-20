import React from 'react';
import YearsNav from './../Years';
import ShowMap from './../Map';

const Fragment = React.Fragment;

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
			<Fragment>
				<YearsNav yearDidChange={this.yearDidChange.bind(this)} />
				<ShowMap activeYear={this.state.activeYear}/>
			</Fragment>
		);
		
	}
};
export default HomePage;