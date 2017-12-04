import axios from 'axios';//发送ajax请求
export default{
	/*state存储公共数据（此处为ajax获取出来的数据），getter对数据的二次封装，结合state里面的数据返回新数据，mutation改变state里面的数据（同步），action通过异步请求调用mutation改变state里面的数据，module拆分大数据成小数据集合，最后合并*/
	state:{
		lunboInfo:[]
	},
	actions:{
		getLunboInfo(context){
			axios.get('/static/lunbo.json')
			.then((response)=>{
				if(response.status===200){
				const {data} = response.data;
				context.commit("changeLunboInfo",data)
				}
			})
		}
	},
	mutations:{
		changeLunboInfo(state, data){
			state.lunboInfo = data.lunboInfo;
		}
	},
	
	
	getters:{
		shouldGetData1(state){
			if(!state.lunboInfo.length){
				return true;
			}else{
				return false;
			}
		}
	}
}