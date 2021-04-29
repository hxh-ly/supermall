<!--  -->
<template>
  <div id="detail">
    <ul >
      <li v-for="item in $store.state.cartList">{{item}}</li>
    </ul>
    <detail-bar class="nav-bar" @titleClick="titleClick" ref="nav"></detail-bar>
    <scroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      :probe-type="3"
    >
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :basegoods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detail-info="detailInfo"
        @imageload="imageLoad"
      ></detail-goods-info>
      <detail-param-info
        :param-info="paramInfo"
        ref="param"
      ></detail-param-info>
      <detail-comment-info
        :comment-info="commentInfo"
        ref="comment"
      ></detail-comment-info>
      <goods-list :goods="recommend" ref="recommend"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowTop"></back-top>
    <detail-bottom-bar @addCart="addInCart"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailBar from "./childComps/DetailBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import GoodsList from "components/content/goods/GoodsList";
import DetailBottomBar from "./childComps/DetailBottomBar";
import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam
} from "network/detail.js";
import Scroll from "components/common/scroll/Scroll";
import { itemListenerMixin, backTopMixin } from "common/mixin.js";
import {mapActions} from 'vuex'
import { debounce } from "common/utils.js";
export default {
  name: "Detail",
  props: {},
  data() {
    //这里存放数据
    return {
      iid: null,
      topImages: null,
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0
    };
  },
  components: {
    DetailBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    Scroll
  },
  mixins: [itemListenerMixin],
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  mixins: [backTopMixin],
  //方法集合
  methods: {
    ...mapActions(['addCart']),
    imageLoad() {
      //图片加载完刷新scroll的高度
      this.$refs.scroll.refresh();
      //

      this.getThemeTopY();
    },
    titleClick(index) {
      console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
    },
    contentScroll(p) {
      this.changeTopState(p);
      const position = -p;
      //[0,1,2,3,~~]F
      const length = this.themeTopYs.length;
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          position >= this.themeTopYs[i] &&
          position <= this.themeTopYs[i + 1]
        ) {
          console.log(i);

          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }

      //if(position)
    },
    addInCart() {
      let product = {};
      //product.desc=good
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      //console.log(product);
        this.addCart(product).then(res=>{
          console.log(res);
          
        })
      //this.$store.dispatch('addCart',product)
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      //console.log(res);
      const data = res.result;
      console.log(data);

      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo);
      //商品详细信息
      this.detailInfo = data.detailInfo;
      //参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      //评论信息
      if (data.rate.list.length != 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    getRecommend().then(res => {
      console.log(res);
      this.recommend = res.data.list;
    });
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.param.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE);
      console.log(this.themeTopYs);
    }, 200);
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //beforeCreate() {}, //生命周期 - 创建之前
  //beforeMount() {}, //生命周期 - 挂载之前
  //beforeUpdate() {}, //生命周期 - 更新之前
  //updated() {}, //生命周期 - 更新之后
  //beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {
    this.$bus.$off("itemImgLoad", this.itemImgListener);
  } //生命周期 - 销毁完成
  //activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
#detail {
  position: relative;
  height: 100vh;
  /* 盖上 */
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px);
}
.nav-bar {
  z-index: 9;
  position: relative;
  background-color: #fff;
}
</style>
