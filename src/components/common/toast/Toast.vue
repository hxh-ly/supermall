<!--  -->
<template>
  <div class="toast" v-show="isshow">
    <div>{{ ismessage }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    ismessage: {
      type: String,
      default: ""
    },
    isshow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    //这里存放数据
    return {
      message: "",
      isShow: false
    };
  },
  components: {},
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    show(message = "默认文字", duration = 2000) {
      this.isshow = true;
      this.ismessage = message;
      setTimeout(() => {
        this.isshow = false;
        this.ismessage = "";
      }, duration);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {}
  //beforeCreate() {}, //生命周期 - 创建之前
  //beforeMount() {}, //生命周期 - 挂载之前
  //beforeUpdate() {}, //生命周期 - 更新之前
  //updated() {}, //生命周期 - 更新之后
  //beforeDestroy() {}, //生命周期 - 销毁之前
  //destroyed() {}, //生命周期 - 销毁完成
  //activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 10px;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 999;
}
</style>
