<template>
  <div class="lg-detail">
      {{content}}
  </div>
</template>

<script>
//import {mapActions,mapMutations,mapState,mapGetters} from "vuex";
import Vue from 'vue';
export default {
  name: "lg-detail",
  data() {
    return {
        content:"lg-detail"
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
