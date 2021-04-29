<!--  -->
<template>
  <div>
    <nav-bar>
      <div slot="left" class="detailIcon" @click="backClick">
        <img src="~assets/img/common/back.svg" />
      </div>
      <div slot="center" class="detail">
        <div
          v-for="(item, index) in titles"
          class="detail-item"
        :class="{active:index==currentIndex}"
        @click="titleClick(index)" >
          {{ item }}
        </div>
      </div></nav-bar
    >
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailBar",
  props: {},
  data() {
    //这里存放数据
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  components: {
    NavBar
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    backClick() {
      this.$router.go(-1)
    },
    titleClick(index){
      this.currentIndex=index;
      this.$emit('titleClick',index)
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
.detail {
  display: flex;
}
.detail-item {
  flex: 1;
}
.detailIcon img {
  margin-top: 10px;
}
.active {
  color: var(--color-high-text);
}
</style>
