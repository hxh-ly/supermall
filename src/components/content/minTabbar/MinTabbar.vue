<!--  -->
<template>
  <tabbar>
    <tabbar-item link="/home">
      <img slot="slot-img" src="~assets/img/tabbar/home.svg" alt="" />
      <img
        slot="slot-img-active"
        src="~assets/img/tabbar/home_active.svg"
        alt=""
      />
      <div slot="slot-text">首页</div>
    </tabbar-item>
    <tabbar-item link="/category">
      <img slot="slot-img" src="~assets/img/tabbar/category.svg" alt="" />
      <img
        slot="slot-img-active"
        src="~assets/img/tabbar/category_active.svg"
        alt=""
      />
      <div slot="slot-text">分类</div>
    </tabbar-item>
    <tabbar-item link="/cart">
      <img slot="slot-img" src="~assets/img/tabbar/cart.svg" alt="" />
      <img
        slot="slot-img-active"
        src="~assets/img/tabbar/cart_active.svg"
        alt=""
      />
      <div slot="slot-text">购物车</div></tabbar-item
    >
    <tabbar-item link="/profile">
      <img slot="slot-img" src="~assets/img/tabbar/profile.svg" alt="" />
      <img
        slot="slot-img-active"
        src="~assets/img/tabbar/profile_active.svg"
        alt=""
      />
      <div slot="slot-text">我的</div></tabbar-item
    >
  </tabbar>
</template>

<script>

import tabbar from "components/common/tabbar/tabbar";
import tabbarItem from "components/common/tabbar/tabbar-item";
export default {
  name:'MinTabbar',
  data() {
    name: "MinTabbar";
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  components: {
    tabbar,
    tabbarItem
  }
};
</script>
<style>
 /* bug：引入错误    */
@import '~@/assets/css/base.css';
</style>