<!--  -->
<template>
<div class='cart-list'>
<scroll class="content" ref="scroll">
<cart-list-item v-for="(item,index) in cartList" :key="index" :itemInfo="item"></cart-list-item>

</scroll>
</div>
</template>

<script>

import { mapGetters } from "vuex";
import Scroll from "components/common/scroll/Scroll";
import CartListItem from './CartListItem'
export default {
name:"CartList",
props:{

},
data() {
//这里存放数据
return {

};
},
components:{
Scroll,
CartListItem
},
//监听属性 类似于data概念
computed: {
  ...mapGetters(["cartList"])
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
activated() {
    this.$refs.scroll.refresh()
}
//beforeCreate() {}, //生命周期 - 创建之前
//beforeMount() {}, //生命周期 - 挂载之前
//beforeUpdate() {}, //生命周期 - 更新之前
//updated() {}, //生命周期 - 更新之后
//beforeDestroy() {}, //生命周期 - 销毁之前
//destroyed() {}, //生命周期 - 销毁完成
//activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
.cart-list{
  /* position: relative; */
  height: calc(100% - 44px - 49px);
}
.content{
  height: 100%;
  overflow: hidden;
}
/* .content {
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
} */

</style>