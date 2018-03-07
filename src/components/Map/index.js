import React from 'react';

class ShowMap extends React.Component {
	
	componentDidMount() {
		const map = new window.google.maps.Map(document.getElementById('map'), {
			center: {lat: 38.6121895, lng: -121.3728871},
			zoom: 8
		});
		
		
		// Store a refrence to the google map in state, so that you can interact with it later.
		// this.setState({
		// 	map: map,	
		// });
	}
	// updateLocation(location){
	// 	if (location){
	// 		this.state.map.google.updateLatLng();
	// 	}
	// }

	render() {
		// this.updateLocation(this.props.location);

		return (
				<div className="map" id="map">
				</div>
			);                
    }
}

export default ShowMap;