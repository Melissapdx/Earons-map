import React from 'react';
import { BarChart,Legend,Bar, Label, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import helper, * as helpers from '../helpers.js';


class Graphs extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			graph: null,
			data: helpers.formatDataByAge()
		};
	}
	componentDidMount(){
	
	}
	render(){
		// Age Range Number of Attacks
		// <Bar dataKey="Ages" fill="#E4572E" />
		return (
			<div className="graphs">
		        <div className="graph">
		        <ResponsiveContainer width={500} height="100%">
					<BarChart
						data={this.state.data}
						margin={{ top: 10, bottom: 25 }}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="data">
							<Label value="Age Of Victim" offset={-10} position="insideBottom" />
						</XAxis>
						<YAxis dataKey="value"/>
						<Tooltip />
						<Bar dataKey="10-15" fill="#E4572E" />
						<Bar dataKey="16-20" fill="#E4572E" />
						<Bar dataKey="21+" fill="#E4572E" />
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