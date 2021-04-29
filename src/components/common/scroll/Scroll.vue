<!--  -->
<template>
  <div class="wrapper" ref="wrap">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: true
    }
  },
  data() {
    //这里存放数据
    return {
      scroll: null
    };
  },
  components: {},
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    finishTop() {
      this.scroll && this.scroll.finishPullUp();
    },
    scrollTo(x, y, time=300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    refresh() {
      this.scroll && this.scroll.refresh();

    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrap, {
      probeType: this.probeType,
      movable: true,
      zoom: true,
      click: true,
      observeDOM: true,
      observeImage: true,
      pullUpLoad: this.pullUpLoad
    });
   
    if (this.probeType == 2 || this.probeType == 3) {
      this.scroll.on('scroll',(position)=>{
        this.$emit('scroll',position.y)
      })
    }
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullGet");
      });
    }
  }
  //beforeCreate() {}, //生命周期 - 创建之前
  //beforeMount() {}, //生命周期 - 挂载之前
  //beforeUpdate() {}, //生命周期 - 更新之前
  //updated() {}, //生命周期 - 更新之后
  //beforeDestroy() {}, //生命周期 - 销毁之前
  //destroyed() {}, //生命周期 - 销毁完成
  //activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped></style>
