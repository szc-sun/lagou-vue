<template>
  <div class="lg-mine">
   <div id="content">
        <div class="logininfo">
                        <!-- 未登录 -->
                <div class="nologin center">
                    <router-link v-for="item in arr" :key="item.id" class="loginbut" :to="item" >登录 / 注册</router-link>
                </div>
                    </div>
        <!-- 登录地址-->
        
        
        <div class="buttons">
            
            <router-link v-for="item in arr2" :key="item.id" :class="{[item.name]:true,button:true}" :to="item">
                <span>{{item.content}}</span>
                
                
            </router-link>
            
        </div>
     </div>
  </div>
</template>

<script>
//import {mapActions,mapMutations,mapState,mapGetters} from "vuex";
import Vue from 'vue';
export default {
  name: "lg-mine",
  data() {
    return {
        arr:[
         {id:Math.random(),content:"登录",path:"/login",name:"login"},
         ],
        arr2:[
            {id:Math.random(),content:"投递",path:"/deliver",name:"deliver"},
            {id:Math.random(),content:"面试",path:"/interview",name:"interview"},
            {id:Math.random(),content:"邀约",path:"/invitation",name:"invitation"},
            {id:Math.random(),content:"收藏",path:"/collect",name:"collect"},
        ]
    }
  },
  methods:{
    
  },
  computed:{
  },
  components:{
   
  },
  created(){
  
  }
}
</script>


<style>
#content {
    margin-bottom: 45px;
    padding: 0 15px;
}
#content .logininfo {
    margin: 10px 0;
}
#content .nologin {
    height: 111px;
}
#content .center {
    text-align: center;
    width: 125px;
    margin: 0 auto;
}
#content .nologin .loginbut {
    font-size: 1.4rem;
    color: #fff;
    display: block;
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    margin: 0 auto;
    background-color: #1fc8a1;
    position: relative;
    top: 33px;
}

#content .buttons {
    margin-bottom: 10px;
}

#content .buttons .deliver {
    float: left;
}
#content .buttons .interview {
    float: right;
}
#content .buttons .invitation {
    float: left;
}
#content .buttons .collect {
    float: right;
}

#content .buttons .button {
    display: block;
    width: 48%;
    height: 86px;
    line-height: 86px;
    background-color: #1fc8a1;
    text-align: center;
    color: #fff;
    font-size: 16px;
    margin-top: 10px;
    position: relative;
}
a {
    outline: none;
    text-decoration: none;
}
</style>
