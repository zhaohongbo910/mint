<template>
  <div>  
   <div class="navHeader">
     <pub-header ></pub-header>
   </div>      
    <div class="page-tab-container">  
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>  
        <mt-tab-container-item id="tab-container1" class='container-item'>  
           
          首页
        </mt-tab-container-item>  
        <mt-tab-container-item id="tab-container2" class='container-item'>  
           
          头条
        </mt-tab-container-item>  
        <mt-tab-container-item id="tab-container3" class="container-item">  
          
          发现
        </mt-tab-container-item>  
        <mt-tab-container-item id="tab-container4" class="container-item">  
           
          我的
        </mt-tab-container-item> 
      </mt-tab-container>  
    </div>  

     <div class="nav">  
     <mt-tabbar  fixed v-model='selected'>
      <mt-tab-item id="home"  @click.native.prevent="active = 'tab-container1'" name>
        <img slot="icon" v-if="this.selectedIconId" src="../../static/image/home.png" >
        <img slot="icon" v-else  src="../../static/image/home-active.png" alt="">
        首页
      </mt-tab-item>
      <mt-tab-item id="toutiao" @click.native.prevent="active = 'tab-container2'" name>
        <img slot="icon" src="../assets/logo.png">
        头条
      </mt-tab-item>
      <mt-tab-item id="faxian" @click.native.prevent="active = 'tab-container3'" name>
        <img slot="icon" src="../assets/logo.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="wode" @click.native.prevent="active = 'tab-container4'" name>
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
      tabContentOne:resolve =>{require(['@/components/tabContentOne.vue'],resolve)}
    },
    data() {  
        return {  
          active: 'tab-container1' ,
          selected: 'home',
          selectedIconId:"home"
       };  
        } ,
    watch: {
        selected: function (val, oldVal) {
            
         
            // console.log(val)
            // console.log(oldVal)
            console.log(this)
        },
        active: function (val, oldVal) {
            // 这里就可以通过 val 的值变更来确定
            console.log(val)
        }
    },
        methods:{
           prevent:function(){
              console.log(11111111)
           }
        }
  }

</script>
<style>
.page-tab-container{
  margin-top:101px;
}
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

.mint-tabbar > .mint-tab-item .is-selected{
  color: red;
}

.mint-tab-item-label{
  color: #000;
}
.mint-tab-item{
  color: #999;
  text-decoration: none;
}

</style>
