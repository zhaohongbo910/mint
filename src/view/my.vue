<template>
	<div>  
   <div>
   	 <pub-header ></pub-header>
   </div>
      
    <div class="page-tab-container">  
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>  
        <mt-tab-container-item id="tab-container1" class='container-item'>  
            <!-- cell组件 -->  
          <mt-cell v-for="n in 10" title="tab-container 1" :key="n"></mt-cell>  
        </mt-tab-container-item>  
        <mt-tab-container-item id="tab-container2" class='container-item'>  
            <!-- cell组件 -->  
          <mt-cell v-for="n in 5" title="tab-container 2" :key="n"></mt-cell>  
        </mt-tab-container-item>  
        <mt-tab-container-item id="tab-container3" class="container-item">  
            <!-- cell组件 -->  
          <mt-cell v-for="n in 7" title="tab-container 3" :key="n"></mt-cell>  
        </mt-tab-container-item>  
        <mt-tab-container-item id="tab-container4" class="container-item">  
            <!-- cell组件 -->  
          <mt-cell v-for="n in 7" title="tab-container 4" :key="n"></mt-cell>  
        </mt-tab-container-item> 
      </mt-tab-container>  
    </div>  

     <div class="nav">  
      <!-- <mt-button size="small" @click.native.prevent="active = 'tab-container1'">tab 1</mt-button>  
      <mt-button size="small" @click.native.prevent="active = 'tab-container2'">tab 2</mt-button>  
      <mt-button size="small" @click.native.prevent="active = 'tab-container3'">tab 3</mt-button>  --> 
       <mt-tabbar  fixed v-model='selected'>
		  <mt-tab-item id="home"  @click.native.prevent="active = 'tab-container1'">
		    <img slot="icon" src="../assets/logo.png">
		    首页
		  </mt-tab-item>
		  <mt-tab-item id="toutiao" @click.native.prevent="active = 'tab-container2'">
		    <img slot="icon" src="../assets/logo.png">
		    头条
		  </mt-tab-item>
		  <mt-tab-item id="faxian" @click.native.prevent="active = 'tab-container3'">
		    <img slot="icon" src="../assets/logo.png">
		    发现
		  </mt-tab-item>
		  <mt-tab-item id="wode" @click.native.prevent="active = 'tab-container4'">
		    <img slot="icon" src="../assets/logo.png">
		    我的
		  </mt-tab-item>
		</mt-tabbar>
    </div>  
  </div>  
</template>
<script>
	export default {
		name:'wode',
		components:{
			pubHeader:resolve => {require(['@/components/header.vue'], resolve)},
		},
		data() {  
		    return {  
		      active: 'tab-container1' ,
		      selected: 'home'
		   };  
        } ,
		watch: {
		    selected: function (val, oldVal) {
		        // 这里就可以通过 val 的值变更来确定
		        console.log(val)
		        console.log(this)
		    },
		    active: function (val, oldVal) {
		        // 这里就可以通过 val 的值变更来确定
		        console.log(val)
		    }
		},
        methods:{
           prevent:function(){
           	  
           }
        }
	}

</script>
<style>
.item {  
    display: inline-block;  
  }  

  .nav {  
    padding: 10px;  
  }  
  
  .link {  
    color: inherit;  
    padding: 20px;  
    display: block;  
  }

.mint-tabbar > .mint-tab-item.is-selected{
	color: red;
}

.mint-tab-item{
  text-decoration: none;
}

</style>