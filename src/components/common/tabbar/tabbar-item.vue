<!--  -->
<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-if="!ActiveCheck"><slot name="slot-img"> </slot></div>
    <div v-else><slot name="slot-img-active"> </slot></div>
    <div :style="activeColor">
      <slot name="slot-text"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbarItem",

  data() {
    //这里存放数据
    return {
      isActive: true,
    };
  },
  props: {
    link: String,
    activeStyle: { 
      type: String,
      default: "red",
    },
  },
  methods: {
    itemclick: function() {
      this.$router.replace(this.link).catch((err) => {});
    },
  },
  //监听属性 类似于data概念

  computed: {
    ActiveCheck() {
      return this.$route.path.indexOf(this.link) != -1;
    },
    activeColor() {
      return this.ActiveCheck ? { color: this.activeStyle } : {};
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style scoped>

.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 13px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 5px;
}
.active {
  color: red;
}
</style>
