import axios from 'axios';//发送ajax请求
export default{
	/*state存储公共数据（此处为ajax获取出来的数据），getter对数据的二次封装，结合state里面的数据返回新数据，mutation改变state里面的数据（同步），action通过异步请求调用mutation改变state里面的数据，module拆分大数据成小数据集合，最后合并*/
	state:{
		swiperInfo:[],
		smallswiperInfo:[],
		recommendInfo:[]
	},
	actions:{
		getIndexInfo(context){
			axios.get('/static/index.json')
			.then((response)=>{
				if(response.status===200){
				const {data} = response.data;
				context.commit("changeIndexInfo",data)
				}
			})
		}
	},
	mutations:{
		changeIndexInfo(state, data){
			state.swiperInfo = data.swiperInfo;
			state.smallswiperInfo = data.smallswiperInfo;
			state.recommendInfo = data.recommendInfo
		},
		refreshInfo(state,data){
			state.recommendInfo.push(...state.recommendInfo);
		}
	},
	
	
	getters:{
		shouldGetData(state){
			if(!state.swiperInfo.length && !state.smallswiperInfo.length&&!state.recommendInfo.length){
				return true;
			}else{
				return false;
			}
		}
	}
}