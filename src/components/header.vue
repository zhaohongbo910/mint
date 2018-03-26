<template>
  <div>
    <mt-header :title=title class='header' fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back" @click="onClickLeft">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right" @click="onClickRight"></mt-button>
    </mt-header>
    <mt-search v-model="value"  cancel-text="取消" placeholder="搜索" @change="changeValue" show='true' result>
      <mt-cell v-for="item in result" :title="item.title" :value="item.value" :key="item"> </mt-cell>
    </mt-search>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      title: "基础",
      message: "你点击了左键",
      result:[]
    }
  },
  components: {
           
  },
  watch:{
    value:function(value){
      conosle.log(val)
    } 
  },
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast({
        message: this.message,
        duration: 5000
      });
    },
    changeValue(){
      console.log(value)
    }
  }
}

</script>
<style>
.header {
  height: 100px;
}

</style>
