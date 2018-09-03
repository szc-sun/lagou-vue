<template>
  <div class = "lg-search" id="content">
    <lg-searchlist></lg-searchlist>
  </div>
</template>

<script>
//import {mapActions,mapMutations,mapState,mapGetters} from "vuex";
import Searchlist from "./Searchlist";
export default {
   name: "lg-search",
  data () {
    return {
       
    }
  },
  methods:{
    // search(){
    //     if(this.msg==""){
    //         this.isShow=false;
    //     }else{
    //         this.isShow=true;
    //     }
        
    // },
    // show(){
    //     if(this.msg==""){
    //         this.isShow=false;
    //     }
    // }
    

  },
  components:{

    [Searchlist.name]:Searchlist,
  },
  created(){
    
  }
}
</script>


<style>
#content .linputer {
    position: relative;
    border-bottom: 1px solid #e8e8e8;
    height: 45px;
}
#content .lbutton {
    float: left;
    height: 45px;
    line-height: 45px;
    font-size: 15px;
    text-align: center;
    width: 88px;
    border-right: 1px solid #e8e8e8;
}
#content .rinput {
    height: 45px;
    margin-left: 89px;
    position: relative;
}
#content .rinput .inputer {
    display: block;
    border: none;
    padding: 10px 0;
    height: 45px;
    line-height: 45px;
    color: #333333;
    width: 75%;
    
    font-size: 15px;
    float: left;
    outline: none;
}
#content .rinput .search {
    width: 20%;
    height: 45px;
    line-height: 45px;
    float: right;
    position: relative;
}
</style>
