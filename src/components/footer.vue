<template>
<div>
	<div>
		<mt-tabbar fixed="true" >
		  <router-link to='/index' class="router-link" :class="{active:isActive}" :key="home">
		  <mt-tab-item id="index">
		    <img slot="icon" src="../assets/logo.png">
		    首页
		  </mt-tab-item>
		  </router-link>
		  <router-link to='/toutiao' class="router-link" :key="toutiao">
		  <mt-tab-item id="toutiao">
		    <img slot="icon" src="../assets/logo.png">
		     头条
		  </mt-tab-item>
		  </router-link>
		  <router-link to='/fax' class="router-link" :key="fax">
		  <mt-tab-item id="fax">
		    <img slot="icon" src="../assets/logo.png">
		    发现
		  </mt-tab-item>
		  </router-link>

		  <router-link to='/wode' class="router-link" key="wode">
		  <mt-tab-item id="wode">
		    <img slot="icon" src="../assets/logo.png">
		    我的
		  </mt-tab-item>
		  </router-link>
		</mt-tabbar>
	  </div>
</div>
		
</template>
<script>
	export default{
		data(){
          return {
          	isActive:true
          }
		},
    watch:{
      //   selected: function (val, oldVal) {
      //   // 这里就可以通过 val 的值变更来确定
      //   console.log(val)
      // }
	}
}
</script>
<style>
	.router-link{
		display: inline-block;
		width: 25%;
		text-decoration: none;	
	}
	
	.mint-tab-item{
		text-decoration: none;
	}
	
	.mint-tab-item-label{
		text-decoration: none;
	}
	.active{
        color: red;
	}


</style>