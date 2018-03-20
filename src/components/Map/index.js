import React from 'react';
import data from '../../attack_location_data.js';
class ShowMap extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			map: null,
			data:data
		};
	}
	componentDidMount() {
		const map = new window.google.maps.Map(document.getElementById('map'), {
			center: {lat: 38.6121895, lng: -121.3728871},
			zoom: 8
		});

		this.state.data.forEach(function(attack_location){
			const marker = new window.google.maps.Marker({
				position:{lat:attack_location.lat,lng:attack_location.lng},
				map:map
			});
		});
		
		this.setState({
			map: map,
			// location:location,
			//makrers:markers	
		});

	}
	updateLatLng(location){
		
	}
	// updateLocation(location){
	// 	if (location){
	// 		this.state.map.google.updateLatLng();
	// 	}
	// }

	render() {
		// this.updateLocation(this.props.location);
		return (
			<div>
				{this.props.activeYear}
				<div className="map" id="map">
				</div>
			</div>
			);                
    }
}

export default ShowMap;