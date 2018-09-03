<template>
  <div class = "mz-login">
    <input v-model="user.username" type="text" value="" /><br />
      <input v-model="user.password"  type="text" value="" /><br />
      <input @click="login" type="button"  value="登陆" />
      <a href="/users/reg">注册</a>  <a href="/">返回首页</a><br />
      {{result.msg}}
  </div>
</template>

<script>
import {mapActions,mapMutations,mapState,mapGetters} from "vuex";
export default {
   name: "mz-login",
  data () {
    return {
       user:{
         username:"aaa",
         password:"123"
       },
       result:{
         msg:""
       }
    }
  },
  methods:{
    ...mapActions({log:"loginAction"}),

    login(){

    //   getFilms(){//now-playing | coming-soon
    //   let params = {__t:Date.now(),page:1,count:5};  
    //   let url = `http://localhost:9000/mz/v4/api/film/${this.type}`;
    //   this.$http.get(url,{params}).then(res=>{ 
    //       this.arr = res.data.data.films;
    //   }); 
    // }

      //console.log(session.oUser)
      console.log(11111);
      let url = "http://localhost:9000/anhao/users/login"
      console.log(22222,url);
      this.$http.post(url,this.user).then(res=>{
          console.log(33333,res);
          console.log(55555,res.data);
          this.result = res.data;
          if(res.data.error == 1){
             localStorage.token = res.data.token;
             this.$router.push("/order");
          } else {
            delete  localStorage.token;
          }
         
      });
    }

  },
  created(){
    this.log()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
