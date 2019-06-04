<template>
    <div class="lg-header">
      <header id="header" @click="fade()">拉勾网</header>
    </div>
</template>

<script>
export default {
  name: 'lg-header',
  props:["isFale"],
  data () {
    return {
      
    }
  },
  methods:{
    fade(){
      this.$emit("abc",false);
    }
    //...mapActions({show:"showAction"}),
    
     //...mapActions({show:"showAction"})
    // show(){
    //   this.$emit("abc",!this.isShow);
    // }
  },
  computed:{
    //...mapState({title:"title"}),
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
    height: 45px;
    line-height: 45px;
    background-color: #00b38a;
    color: #fff;
    font-size: 1.5rem;
    text-align: center;
    position: relative;
}
</style>
