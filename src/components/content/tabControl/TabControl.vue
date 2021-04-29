<!--  -->
<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      class="tab-control-item"
      :class="{ active: index === currentIndex }"
   @click="changeIndex(index)" >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    //这里存放数据
    return {
      currentIndex: 0,
      offsetTop:0
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
changeIndex(index){
  console.log(index);
  
  this.currentIndex=index;
   this.$emit('tabClick',index);
}

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
.tab-control {
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #fff;
  height: 44px;
  line-height: 44px;
  font-size: 15px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
  padding:3px
}
.active {
  color: var(--color-text);

}
.active span{
  border-bottom: 3px solid var(--color-text);
}
</style>
