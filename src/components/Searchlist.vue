<template>
<div class="lg-searchlist">
    <div class="linputer">
        <div class="lbutton" @click="fade()">
            <span class="city">{{city}}</span>
            <span class="cityicon"></span>
            <div class="mask" v-show="isFade">
                <div class="fdialog-rcon"><!--通用城市组件模板@author pooky@lagou.com-->
                    <div class="cities-header">热门城市</div>
                    <ul class="cityBox">
                        <li v-for="(item,index) in cities" :key="index" class="cities" @click="cityS(item)">
                            {{item}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="rinput">
            <input v-model="msg" @input="inp()" class="inputer" type="text" placeholder="搜索职位或公司">
            <span class="search" @click="getFilms()">搜索<em class="searchicon"></em></span>
        </div>
    </div>
    <div class="listcon">
        <!-- <ul class="history" style="display: none;"></ul>
        <span class="custominfo none" style="display: none;">
            将搜索地区和关键词设为定制条件
        </span> -->
        <ul class="list" v-show="isShow">
            <span class="custominfo none" v-show="isShow">
            将搜索地区和关键词设为定制条件
            </span> 
            <ul class="list"> 
        <router-link tag="li" class="activeable list-item" v-for="item in arr" :key="item.positionId" to="/detail">
            <img :src="'//www.lgstatic.com/'+item.companyLogo" class="item-logo"/>
            <div class="item-desc">
                <h2 class="item-title">{{item.companyName}}</h2>
                <p class="item-info">
                    <span class="item-pos">
                       {{item.positionName}} [ {{item.city}} ]
                    </span>
                    <span class="item-salary">{{item.salary}}</span>
                </p>
                <p class="item-time">{{item.createTime}}</p>
            </div>
        </router-link>
            
      <!-- <li class="activeable list-item" data-positionid="3867621" data-companyid="221657">
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
        </li> -->
    </ul>
        </ul>
    </div>
  
  </div>
</template>

<script>
//import {mapActions,mapMutations,mapState,mapGetters} from "vuex";
import Vue from 'vue';
export default {
  name: "lg-searchlist",
  data() {
    return {
        arr:[],
        msg:"",
        msg2:"",
        isShow:false,
        isFade:false,
        cities:["北京","上海","广州","深圳","成都","杭州"],
        city:"全国",
    }
  },
  methods:{
      cityS(item){
          this.city=item;
          console.log(this.city);
      },
      fade(){
        this.isFade=!this.isFade;
        console.log("isFade",this.isFade)
      },
      show(){
          if(this.msg2==""){
              this.isShow=false;
          }else{
              this.isShow=true;
          }
      },
      inp(){
          if(this.msg==""){
              this.isShow=false;
          }
      },
    //https://m.lagou.com/search.json?city=%E5%85%A8%E5%9B%BD&positionName=java&pageNo=1&pageSize=15
    getFilms(){//now-playing | coming-soon
      //let params = {__t:Date.now(),page:1,count:5};

        this.msg2 = this.msg;
        console.log(333,this.msg,this.msg2,this.isShow)
        this.arr=[];
        let params = {__t:Date.now(),city:"全国",positionName:this.msg2}; 
        //let url = `http://localhost:9000/mz/v4/api/film/coming-soon`;
        let url = `http://localhost:9000/mz/search.json`;
        this.$http.get(url,{params}).then(res=>{ 
            this.arr = this.arr.concat(res.data.content.data.page.result);
            //this.arr = arr1;
            console.log(this.arr)
        }); 
    }

  },
  computed:{
  },
  components:{
   
  },
  watch:{
    msg2:"show",
  },
}
</script>


<style>

ul {
    margin: 0;
    list-style: none;
    -webkit-padding-start: 0;
    -moz-padding-start: 0;
}
.list .list-item {
    padding: 14px;
    border-bottom: 1px solid #e8e8e8;
}
.list .item-logo {
    float: left;
    width: 60px;
    height: 60px;
}
.list .item-desc {
    margin-left: 70px;
    height: 62px;
    color: #333;
}
.list .item-title {
    font-size: 16px;
    margin-bottom: 6px;
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.list .item-info {
    width: 100%;
    height: 15px;
    line-height: 15px;
}
.list .item-salary {
    font-size: 16px;
    color: #00b38a;
    float: right;
}
.custominfo{
    display:block;
    width:100%;
    text-align:center;
}
.mask{
    position:absolute;
    width:100%;
    left:0;
    top:0;
    z-index:9999;
    background:#fff;
    color:#00b38a;
}
.cities{
    width:33%;
    float:left;
    text-decoration:none;
    font-size:16px;
    color: #333;
}
</style>
