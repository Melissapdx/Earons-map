import attackData from './attack_location_data.js';

export default attackData;

// export const formatDataByAge = () => {
// 	let smallAgeRange = {
// 		key: "10-15",
// 		value: 0,
// 	}
// 	let medAgeRange = {
// 		key: "16-20",
// 		value: 0,
// 	}
// 	let highAgeRange = {
// 		key: "21+",
// 		value: 0,
// 	}

// 	const graphData =[]
// 	for(var i = 0; i < attackData.length; i++){
// 		if(attackData[i].victimAge >= 10 && attackData[i].victimAge <= 15){ 
// 			smallAgeRange.value += 1; 
// 		} else if (attackData[i].victimAge >= 16 && attackData[i].victimAge <= 20){
// 			medAgeRange.value += 1;
// 		} else if (attackData[i].victimAge >= 21){
// 			highAgeRange.value += 1;
// 		}
// 	}
// 	graphData.push(smallAgeRange);
// 	graphData.push(medAgeRange);
// 	graphData.push(highAgeRange);
// 	return graphData
// };

export const formatDataByAge = (filterYear) => {
	const ageHash = {};


	attackData.forEach((attack) => {
		const age = parseInt(attack.victimAge, 10);
		const yearOfAttack = attack.date.split("/")[2];

		if (filterYear !== undefined && filterYear != yearOfAttack ){
			return;
		}

		if(age >= 10 && age <= 15) {
			ageHash['10-15'] = ageHash['10-15'] ? ageHash['10-15'] + 1 : 1; 
		} else if (age >= 16 && age <= 20) {
			ageHash['16-20'] = ageHash['16-20'] ? ageHash['16-20'] + 1 : 1; 
		} else if (age >= 21) {
			ageHash['21+'] = ageHash['21+'] ? ageHash['21+'] + 1 : 1;
		}
	});

	return Object.keys(ageHash).sort().map((key) => ({
		key: key,
		value: ageHash[key]
	}));
}

export const formatDataByMonth =() => {

}

export const mapStyles = [

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
];