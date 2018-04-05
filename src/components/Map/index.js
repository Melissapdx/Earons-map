import React from 'react';
import data from '../../attack_location_data.js';
import * as helpers from '../../helpers.js';

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
			zoom: 8,
			styles: helpers.mapStyles
			
		});
		const markers = this.addDataToMarkers(map,this.state.data)

		this.setState({
			map: map,
			markers: markers,
		});

	}

	componentWillReceiveProps(nextProps){
		this.removeMarkers();
		const year_selected = nextProps.activeYear;
		// Filter ALL attack data to just the attack data that matches current selected year.
		const filterData = this.state.data.filter(function(attack_location){
			const attack_year = attack_location.date.slice(-4);
			return year_selected == attack_year;
		});
		// Add the filtered data back to the map.
		const markers = this.addDataToMarkers(this.state.map, filterData);
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

	addDataToMarkers(map,data) {
		var iconBase = 'http://localhost:3000/spotlight-poi2.png';
		const markers = [];
		data.forEach(function(attack_location){
			const marker = new window.google.maps.Marker({
				position:{lat:attack_location.lat,lng:attack_location.lng},
				icon:iconBase,
				map:map
			
			});

			const infowindow = new window.google.maps.InfoWindow({
				content: `<p>Name: ${attack_location.name}</p> \n <p>Date: ${attack_location.date}</p>\n 
        <p>Time:${attack_location.time}</p>\n 
				<p>Description: ${attack_location.description}</p>`
			});

			marker.addListener('click',function(){
				infowindow.open(map,marker);
			});
			markers.push(marker);
		});
		return markers
	}
	

	render() {
		return (
			<div className="map" id="map">
			</div>
		);                
    }
}

export default ShowMap;