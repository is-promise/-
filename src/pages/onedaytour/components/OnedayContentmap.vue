<template>
   	<div>
	    <el-amap vid="amapDemo" :zoom="zoom" :center="center" style="width:100%;height:200px">
			<el-amap-info-window v-for="window in windows" :position="window.position" :content="window.content" :visible="window.visible" :events="window.events"></el-amap-info-window>
	    </el-amap>
	</div>
  </template>

  <style>
   
  </style>

  <script>
    module.exports = {
      data () {
        return {
          zoom: 14,
          center: [116.232922, 39.542637],
          windows: [
            {
              position: [116.232922, 39.542637],
              content: 'Hi! I am here!',
              visible: true,
              events: {
                close() {
                  console.log('close infowindow');
                }
              }
            }
          ]
        }
      }
    };
</script>