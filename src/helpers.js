import attackData from './attack_location_data.js';

export default attackData;

export const formatDataByAge = () => {
	let ageRanges = {
		"10-15": 0,
		"16-20": 0,
		"21+": 0
	}
	
	for(var i = 0; i < attackData.length; i++){
		if(attackData[i].victimAge >= 10 && attackData[i].victimAge <= 15){ 
			ageRanges["10-15"] += 1;
		} else if (attackData[i].victimAge >= 16 && attackData[i].victimAge <= 20){
			ageRanges["16-20"] += 1;
		}else if (attackData[i].victimAge >= 21){
			ageRanges["21+"] += 1;
		}
	}
	return ageRanges;
};
