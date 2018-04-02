import React from 'react';


class Graphs extends React.Component {
	render(){
		return (
			<div className="graphs">
		        <div className="graph"><canvas id="myChart" width="400" height="400"></canvas></div>
		        <div className="graph"></div>
		        <div className="graph"></div>
    		</div>
	
			);
	}
}

export default Graphs;