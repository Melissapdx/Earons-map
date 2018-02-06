import React from 'react';

class ShowMap extends React.Component {
	componentDidMount() {
		const map = new window.google.maps.Map(document.getElementById('map'), {
  				center: {lat: -34.397, lng: 150.644},
  				zoom: 8
			});
	}
	render() {
		return (
				<div className="map" id="map">
				</div>
			);                
    }
}

export default ShowMap;