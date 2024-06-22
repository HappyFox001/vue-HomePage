<template>
  <Loading v-bind:loading="loading"/>
  <Home/>
</template>

<script>

import Home from "@/components/Home.vue";
import Loading from "@/components/Loadding.vue";
import {ref} from "vue";
import {onMounted} from "vue";
export default {
  name: 'App',
  components: {
    Home,
    Loading
  },
  setup(){
    let loading=ref(true);
    onMounted(()=>{
      setTimeout(()=>{loading.value=false},1000)})
    return {loading}
  },
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  padding: 0;
}
</style>
