<template>
    <div class="lg-footer">
      <footer id="footer">
        <!--通用footer组件模板@author pooky@lagou.com-->
        
        <router-link tag="div" @click.native="show(index)" v-for="(item,index) in foot" :key="index" :to="item" :class="{selected:iNow==index}"><span :class="{selected:iNow==index}"></span><span class="text">{{item.dataName}}</span></router-link>
        {{this.iNow}}
        <!-- <router-link tag="div" v-for="item in foot" :key="item.data-index"   data-name="item.data-name" data-index="item.data-index" data-type="item.data-type" class="selected"></router-link> -->

        <!-- <div data-name="职位" data-index="0" data-type="custom" class=" selected"><span class="selected"></span><span class="text">职位</span></div>
        <div data-name="搜索" data-index="1" data-type="search" class=""><span class=""></span><span class="text">搜索</span></div>
        <div data-name="我的" data-index="2" data-type="mine" class=""><span class=""></span><span class="text">我的</span></div> -->
      </footer>
      

    </div>
</template>

<script>
export default {
  name: 'lg-footer',
  data () {
    return {
      iNow:0,
      foot:[
        {dataName:"职位",path:"/home",name:"home"},
        {dataName:"搜索",path:"/search",name:"search"},
        {dataName:"我的",path:"/mine",name:"mine"}
        
      ]
    }
  },
  methods:{
    show(index){
     console.log(index)
      this.iNow = index;
      
    }
    //...mapActions({show:"showAction"}),
    
     //...mapActions({show:"showAction"})
    // show(){
    //   this.$emit("abc",!this.isShow);
    // }
  },
  computed:{
    //...mapState({title:"title"}),
  },

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer {
    width: 100%;
    height: 45px;
    line-height: 45px;
    border-top: 1px solid #e8e8e8;
    background-color: #f6f6f6;
    color: #c2cfcc;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    display: -moz-box;
    display: -webkit-box;
    display: box;
    font-size: 16px;
}
#footer div.selected {
    color: #00b38a;
    background-color: #e7f3f0;
}
#footer div {
    height: 100%;
    -moz-box-flex: 1;
    -webkit-box-flex: 1;
    text-align: center;
}
</style>
