<template>
  <div class = "lg-login">
    <div class="loginBox">
      <header class="form_header">
        <h2>登录拉勾</h2>
        <router-link :to="this.arr[0]" class="brother_link">{{this.arr[0].content}}</router-link>  
      </header>
     
        <input v-model="user.username" type="text" value="" placeholder="请输入已验证的手机号或邮箱" class="input_text user_input"/><br />
        <input v-model="user.password"  type="text" value="" /><br />
        <input @click="login" class="btn" type="button"  value="登录" />
        <a href="/">返回首页</a><br />
        {{result.msg}}
        <span class="signin_type_btn">手机号登录</span>
    </div>
  </div>
</template>

<script>
import {mapActions,mapMutations,mapState,mapGetters} from "vuex";
export default {
   name: "lg-login",
  data () {
    return {
       user:{
         username:"aaa",
         password:"123"
       },
       result:{
         msg:""
       },
       arr:[
         {id:Math.random(),content:"注册",path:"/reg",name:"reg"},
       ]
    }
  },
  methods:{
    

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
          } else {
            delete  localStorage.token;
          }
         
      });
    }

  },
  created(){
    //this.log()
  }
}
</script>


<style>
.loginBox{
  padding:32px;
}
input{
  display:inline-block;
  width: 100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding: 10px 0;
  font-size: 14px;
  color: #333;
  border: 0;
  border-bottom: 1px solid #E8E9EB;
  outline: 0;
  border-radius: 0;
}
.btn{
    margin:40px 0 20px;
    width: 100%;
    height: 40px;
    border-radius: 3px;
    background-color: #00b38a;
    color: #fff;
    font-size: 20px;
    border: 0;
}
#header {
  display: none;
}
#footer {
   display: none !important;
}

.form_header {
    position: relative;
    line-height: 100px;
}
h2 {
    color: #333;
    font-size: 20px;
    font-weight: 400;
    margin: 3px 0 14px;
}
.form_header .brother_link {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 16px;
    color: #00b38a;
    text-decoration: none;
}
.signin_type_btn{
  position:absolute;
  left:32px;
  bottom:32px;
  font-size:14px;
  color:#00b38a;

}


</style>
