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
		        <ResponsiveContainer width={500} height="100%">
					<BarChart>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="Age Range" />
						<YAxis dataKey="Number of Attacks"/>
						<Tooltip />
						<Legend />
						<Bar dataKey="Ages" fill="#E4572E" />
					</BarChart>
				</ResponsiveContainer>
		        </div>
		        <div className="graph"></div>
		        <div className="graph"></div>
    		</div>
	
			);
	}
}

export default Graphs;