<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
      <div slot="right"><img :src="banners[0]" alt=""  /></div>
    </nav-bar>
  <scroll class="content" ref="scroll">
  <home-swiper :banners="banners"></home-swiper>
    <RecommendView :recommends="recommends"></RecommendView>

    <feature-view />
    <tab-control
      class="tab-control"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
    />
    <goods-list :goods="showGoods" />
  </scroll>
    <back-top @click.native="backClick"></back-top>
 
  <!--   <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> -->
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "views/home/childComps/HomeSwiper";
import RecommendView from "views/home/childComps/RecommendView";
import FeatureView from "views/home/childComps/FeatureView";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from 'components/common/scroll/Scroll';
import BackTop from 'components/content/backTop/BackTop'
//面向home.js开发
import { getHomeMultiData, getGoodsData } from "../../network/home";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      CurrentTabType: "pop"
    };
  },
  created() {
    console.log("准备getHomeMultiData");
    getHomeMultiData().then(res => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  computed: {
    showGoods() {
      return this.goods[this.CurrentTabType].list;
    }
  },
  methods: {
    tabClick(e) {
      switch (e) {
        case 0:
          this.CurrentTabType = "pop";
          break;
        case 1:
          this.CurrentTabType = "new";
          break;
        case 2:
          this.CurrentTabType = "sell";
          break;
      }
    },
    /* 网络请求方法 */
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getGoodsData(type, page).then(res => {
        console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
    //
    backClick(){
      this.$refs.scroll.scroll.scrollTo(0,0,300)
      
    }
  }
};
</script>
<style scoped>
@import "~assets/css/base.css";
#home {
  padding-top: 44px;
  position: relative;
  height: 100vh;
}
.home-nav {
  background-color: var(--color-high-text);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
.content{
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  top:44px;
  bottom: 49px;
}
/* .content{
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
} */
</style>
