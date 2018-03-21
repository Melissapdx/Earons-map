import React from 'react';
import data from '../../attack_location_data.js';
class ShowMap extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			map: null,
			data: data
		};
	}
	componentDidMount() {
		const map = new window.google.maps.Map(document.getElementById('map'), {
			center: {lat: 38.6121895, lng: -121.3728871},
			zoom: 8
		});

		const markers = [];
		this.state.data.forEach(function(attack_location){
			const marker = new window.google.maps.Marker({
				position:{lat:attack_location.lat,lng:attack_location.lng},
				map:map
			});
			markers.push(marker);
		});
		
		this.setState({
			map: map,
			markers: markers,
		});

	}

	componentWillReceiveProps(nextProps){
		console.log(nextProps);
	}

	removeMarkers(){
		const markers = this.state.markers;
		markers.forEach(function(marker){
			marker.setMap(null);
		});

		this.setState({
			markers: [],
		});
	}

	updateLatLng(location){
		if (location){
			this.state.map.google.updateLatLng();
		}
	}
	

	render() {
		// this.updateLocation(this.props.location);
		return (
			<div className="map" id="map">
			</div>
		);                
    }
}

export default ShowMap;