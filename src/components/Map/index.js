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

		const contentString = "Hello World"
		const infowindow = new window.google.maps.InfoWindow({
			content: contentString
		});

		const markers = [];
		this.state.data.forEach(function(attack_location){
			const marker = new window.google.maps.Marker({
				position:{lat:attack_location.lat,lng:attack_location.lng},
				map:map
			});
			marker.addListener('click',function(){
				infowindow.open(map,marker);
			});
			markers.push(marker);
		});
		
		
		this.setState({
			map: map,
			markers: markers,
		});

	}

	componentWillReceiveProps(nextProps){
		this.removeMarkers();
		const markers = [];
		const year_selected = nextProps.activeYear;
		const map = this.state.map;
		this.state.data.forEach(function(attack_location){
				const attack_year = attack_location.date.slice(-4);
				if (year_selected == attack_year){
					const updated_markers = new window.google.maps.Marker({
							position:{lat:attack_location.lat,lng:attack_location.lng},
							map:map
					});
				markers.push(updated_markers);
				}
			});
		this.setState({
			markers: markers,
		});
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