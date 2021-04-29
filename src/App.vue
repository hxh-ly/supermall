<template>
  <div id="app">
    <keep-alive exclude="Detail">  <router-view></router-view></keep-alive>
  
    <MinTabbar></MinTabbar>
  </div>
</template>
<script>
import MinTabbar from 'components/content/minTabbar/MinTabbar'
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
  components: {
    MinTabbar
  },
};
</script>

<style>
@import 'assets/css/base.css';
</style>
