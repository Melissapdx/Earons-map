import React from 'react';
import { BarChart,Legend,Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

class Graphs extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			graph: null	
		};
	}
	componentDidMount(){
	
	}
	render(){
		return (
			<div className="graphs">
		        <div className="graph">
					<BarChart width={730} height={250}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey="pv" fill="#8884d8" />
					<Bar dataKey="uv" fill="#82ca9d" />
					</BarChart>
		        </div>
		        <div className="graph"></div>
		        <div className="graph"></div>
    		</div>
	
			);
	}
}

export default Graphs;