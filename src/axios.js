import Vue from "vue";
import VueAxios from "vue-axios";
import Axios from "axios";
import router from "./router";


Axios.defaults.withCredentials = true;//设置cookie跨域

Vue.use(VueAxios,Axios);

// 添加请求拦截器
Axios.interceptors.request.use( config => {
    // 在发送请求之前做些什么
    console.log("config:",config);
    const token = localStorage.token;
//     if(token){
//         config.headers = {'Authorization': 'Bearer ' + token};
//     }
// return config;
}, function (error) {
// 对请求错误做些什么
return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use( res => {
    // 对响应数据做点什么
    if(res.data.error == 0){ 
        delete localStorage.token;
        this.$router.push("/login");
    }
    return res;
  },  err => {
    if(err.response.status == 401){
        delete localStorage.token;
        router.push("/login");
    }
    // 对响应错误做点什么
    //return Promise.reject(err);
  });