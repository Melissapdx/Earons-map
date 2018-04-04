import attackData from './attack_location_data.js';

export default attackData;

export const formatDataByAge = () => {
	// body of function.
	// return [
	// 	{ age : '10-15', value: 4 },
	// 	{ age : '16-20', value: 2 },
	// 	{ age : '20+', value: 9 },
	// ]

	/*
	output = {
		"10-15": 32,
		"16-20": 12,
		"21+": 1,
	}
	*/
 	ageRanges = {};
	for(var i = 0; i < attackData.length; i++){
		if(attackData[i].victimAge >= 10 && attackData[i].victimAge <= 15){
				ageRanges["10-15"] = 1
		} 
	}
};
