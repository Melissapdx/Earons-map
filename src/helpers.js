import attackData from './attack_location_data.js';

export default attackData;

export const formatDataByAge = () => {
	let smallAgeRange = {
		key: "10-15",
		value: 0,
	}
	let medAgeRange = {
		key: "16-20",
		value: 0,
	}
	let highAgeRange = {
		key: "21+",
		value: 0,
	}

	const graphData =[]
	for(var i = 0; i < attackData.length; i++){
		if(attackData[i].victimAge >= 10 && attackData[i].victimAge <= 15){ 
			smallAgeRange.value += 1; 
		} else if (attackData[i].victimAge >= 16 && attackData[i].victimAge <= 20){
			medAgeRange.value += 1;
		} else if (attackData[i].victimAge >= 21){
			highAgeRange.value += 1;
		}
	}
	graphData.push(smallAgeRange);
	graphData.push(medAgeRange);
	graphData.push(highAgeRange);
	return graphData
};
