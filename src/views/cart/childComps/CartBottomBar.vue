<!--  -->
<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button" :is-checked="selectAll" @click.native="checkClick"/>
      <span>全选</span>
    </div>
    <div class="price">合计：{{ totalPrice }}</div>
    <div class="calculate">去计算({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
import { mapGetters } from "vuex";
export default {
  name: "CartBottomBar",
  props: {},
  data() {
    //这里存放数据
    return {};
  },
  components: {
    CheckButton
  },
  //监听属性 类似于data概念
  computed: {
    ...mapGetters(["cartList", "cartLength"]),
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .filter(item => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
      );
    },
    checkLength() {
      return this.cartList.filter(item => item.checked).length;
    },
    selectAll(){
      if(this.cartLength==0)  return false
        return  !this.cartList.find(item => !item.checked)
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
checkClick(){
  if(this.selectAll){
      this.cartList.forEach(element => {
        element.checked=false
      });
  }
  else
    this.cartList.forEach(element => {
        element.checked=true
      });
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
@import "~assets/css/base.css";
.bottom-bar {
  display: flex;
  position: relative;
  bottom: 40px;
  height: 40px;
  background-color: #eee;
  line-height: 40px;
  font-size: 14px;
}
.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 60px;
}
.check-button {
  width: 18px;
  height: 18px;
  line-height: 26px;
  margin-right: 5px;
}
.price {
  margin-left: 20px;
  flex: 1;
}
.calculate {
  width: 90px;
  background-color: red;
  color: #fff;
  text-align: center;
}
</style>
