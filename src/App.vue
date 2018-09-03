<template>
  <div id="app">
    <lg-header></lg-header>
    <lg-footer></lg-footer>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "App",
  data(){
    return {
      
    };
  },
  methods:{
    
  },
  components:{
    [Header.name]:Header,
    [Footer.name]:Footer,
  }
}
</script>

<style>
*{margin:0;padding:0;list-style:none;box-sizing: border-box;}

</style>
