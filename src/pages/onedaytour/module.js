import axios from 'axios'

export default {
	state: {
		prddetailRouteitem:[],
		prddetailExpense:[],
		useInstructions:[]
	},
	actions: {
		getIndexInfo(context) {
			axios.get('/static/index.json')
				.then((response) => {
					if (response.status === 200) {
						const {data}  = response.data;
						context.commit("changeIndexInfo", data);
					}
				})
		}
	},
	mutations: {
		changeIndexInfo(state, data) {
			state.prddetailRouteitem = data.prddetailRouteitem
			state.prddetailExpense = data.prddetailExpense
			state.useInstructions = data.useInstructions
		},
	},
	getters: {
		GetData(state) {
			if (!state.prddetailRouteitem.length &&
				!state.prddetailExpense.length &&
				!state.useInstructions.length) {
				return true
			}else {
				return false;
			}
		}
	}
}