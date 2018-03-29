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
			zoom: 8,
			styles:[

  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "poi.school",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#E4572E"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#E4572E"
      },
      {
        "weight": 1
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "weight": 1
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#E4572E"
      }
    ]
  }
]
			
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