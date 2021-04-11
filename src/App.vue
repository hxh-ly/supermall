<template>
  <div id="app">
    <router-view></router-view>
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
