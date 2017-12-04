import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'
import Shidetail from '@/pages/detail-shi/Shidetail'
import Shilunbo from '@/pages/detail-shi-lunbo/Lunbo'
import Pay from '@/pages/pay/Pay'
import City from '@/pages/city/City'
import Onedaytour from '@/pages/onedaytour/Onedaytour'
import VueAMap from 'vue-amap';
import Oneday from '@/pages/oneday/Oneday'

Vue.use(Router)
Vue.use(VueAMap);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
    	path: '/detail-shi',
      name: 'detail-shi',
      component: Shidetail
    },
    /*添加图片详情效果*/
    {
    	path: '/detail-shi-lunbo',
      name: 'detail-shi-lunbo',
      component: Shilunbo
    },
    {
    	path: '/pay',
      name: 'pay',
      component: Pay
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/onedaytour',
      name: 'onedaytour',
      component: Onedaytour
    },
    {
      path: '/oneday',
      name: 'oneday',
      component: Oneday
    }
   ]
 
})

VueAMap.initAMapApiLoader({
  key: 'YOUR_KEY',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType']
});

