<template>
  <div class="lg-home">
    <div class="custom-info none" style="display: block;">
        <span class="info">
            10秒钟定制职位
        </span>
        <a class="go" href="#" target="_self">
            <em class="icon"></em>
            <router-link to="/login" class="text">去登录</router-link>
        </a>
    </div>
    <lg-list></lg-list>
    <!-- <ul class="list">
      <li class="activeable list-item" data-positionid="3867621" data-companyid="221657">
            <img src="//www.lgstatic.com/i/image2/M00/46/FC/CgoB5lrXGVaAUKcAAABFTCMZBRY710.jpg" class="item-logo">
            <div class="item-desc">
                <h2 class="item-title">花动传媒</h2>
                <p class="item-info">
                    <span class="item-pos">
                        iOS研发工程师 [ 上海 ]
                    </span>
                    <span class="item-salary">12k-24k</span>
                </p>
                <p class="item-time">今天 10:03</p>
            </div>
        </li>
    </ul> -->
     
    
    
  </div>
</template>

<script>
//import {mapActions,mapMutations,mapState,mapGetters} from "vuex";
import List from "./List";
import Vue from 'vue';
export default {
  name: "lg-home",
  data() {
    return {
     
    }
  },
  methods:{
    
  },
  computed:{
  },
  components:{
    [List.name]:List,
  },
  created(){
  
  }
}
</script>


<style>
.custom-info {
    border-bottom: 1px solid #e8e8e8;
    height: 43px;
    line-height: 43px;
    padding: 0 15px;
    color: #555;
    font-size: 14px;
    position: relative;
}
.custom-info .info {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    margin-right: 100px;
    height: 100%;
    position: relative;
}
.custom-info .go {
    position: absolute;
    right: 15px;
    top: 0;
    display: block;
    float: right;
    background-color: #f5f5f5;
    padding: 0 20px;
    height: 30px;
    line-height: 30px;
    margin-top: 6px;
    color: #00b38a;
    border-radius: 15px;
}
a {
    outline: none;
    text-decoration: none;
}
em,.text{
    font-style: normal;
    color: #555;
}




</style>
