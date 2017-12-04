import axios from "axios";
export default {
	state:{
		nav: [],
		datagoInfo: []
	},
	actions:{
		getOneday(context) {
			axios.get("../static/oneday.json")
			  .then((response) => {
				  	if (response.status === 200) {
						const {data} = response.data;	
						context.commit("changeOnedayInfo",data);																
						context.commit("changelistInfo",data)	
					}
			  })
		},
				
	},
	mutations:{
		changeOnedayInfo(state,data) {	
			state.nav = data.nav			
		},
		
		changelistInfo(state,data) {
			state.datagoInfo = data.datagoInfo	
		}
	},
	getters:{}
}