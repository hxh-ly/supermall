<!--  -->
<template>
  <div class="goods-item" @click="itemJump">
    <img v-lazy="getProImg" alt=""   @load="imgLoad"/>
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    //这里存放数据
    return {};
  },
  components: {},
  //监听属性 类似于data概念
  computed: {
    getProImg(){
      return this.goodsItem.image||this.goodsItem.show.img 
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    imgLoad(){
      //刷新scroll高度用
      this.$bus.$emit('itemImgLoad')
    },
    itemJump(){
      this.$router.push('/detail/'+this.goodsItem.iid)

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
.goods-item {
  position: relative;
  padding-bottom: 44px;
  width: 48%;
}
.goods-item img {
  width: 100%;
  border-radius: 4px;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
   margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
   content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14p x 14px;
}
</style>
