<template>
<div class="lg-list">
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
        <div class="more" @click="more()">加载更多</div>
    </ul>
    
  </div>
</template>

<script>
//import {mapActions,mapMutations,mapState,mapGetters} from "vuex";
import Vue from 'vue';
export default {
  name: "lg-list",
  data() {
    return {
        arr:[],
        city:"全国",
        positionName:"java",
        pageNo:1,
    }
  },
  methods:{
      more(){
          this.pageNo ++;
          console.log(this.pageNo);
          this.getFilms()
      },
      //https://m.lagou.com/listmore.json?pageNo=2&pageSize=15
    //https://m.lagou.com/search.json?city=%E5%85%A8%E5%9B%BD&positionName=java&pageNo=1&pageSize=15
    getFilms(){//now-playing | coming-soon
      //let params = {__t:Date.now(),page:1,count:5};
     
      let params = {__t:Date.now(),pageNo:this.pageNo,pageSize:15}; 
      //let url = `http://localhost:9000/mz/v4/api/film/coming-soon`;
       let url = `http://localhost:9000/mz/listmore.json`;
      this.$http.get(url,{params}).then(res=>{ 
           this.arr = this.arr.concat(res.data.content.data.page.result);
            console.log(this.arr)
      }); 
    }

  },
  computed:{
  },
  components:{
   
  },
  created(){  
    this.getFilms();
  },
}
</script>
<style>
ul {
    margin: 0;
    list-style: none;
    -webkit-padding-start: 0;
    -moz-padding-start: 0;
    padding-bottom:50px;
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
</style>
