<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
      <div slot="right"><img :src="banners[0]" alt="" /></div>
    </nav-bar>
    <!-- 是后来才显示的 -->
    <tab-control
      class="tab-control"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="controlBar1"
      v-show="isFixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullGet="pullGet"
    >
      <home-swiper
        :banners="banners"
        @swiperImgLoad="swiperImgLoad"
      ></home-swiper>
      <RecommendView :recommends="recommends"></RecommendView>

      <feature-view />
      <tab-control
        :class="{ fixed: isFixed }"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="controlBar2"
      />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowTop"></back-top>

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
import Scroll from "components/common/scroll/Scroll";

//面向home.js开发
import { getHomeMultiData, getGoodsData } from "../../network/home";
//防抖
import { debounce } from "common/utils.js";
import {itemListenerMixin,backTopMixin} from "common/mixin.js";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll
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
      CurrentTabType: "pop",
      
      taboffsetTop: 0,
      isFixed: false
    };
  },
  destroyed() {
    console.log("home destroyed");
  },
  activated() {
    console.log("activated");
    this.$refs.scroll.refresh();
  },
  deactivated() {
    console.log("deactivated");
    //1.保存y值
    //this.saveY=this.$refs.scroll.getCurrentY()
    //2.取消全局事件监听 (itemImgListener 在mixin里)
    this.$bus.$off("itemImgLoad", this.itemImgListener);
  },
  created() {
    console.log("准备getHomeMultiData");
    getHomeMultiData().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mixins: [itemListenerMixin,backTopMixin],
  mounted() {},
  computed: {
    showGoods() {
      return this.goods[this.CurrentTabType].list;
    }
  },
  methods: {
    //swiper高度刷新
    swiperImgLoad() {
      //  console.log(this.$refs.controlBar.$el.offsetTop);
      this.taboffsetTop = this.$refs.controlBar2.$el.offsetTop;
      console.log("taboffsetTop", this.taboffsetTop);
    },
    contentScroll(p) {
   this.changeTopState(p)
      this.isFixed = (-p.y) > this.taboffsetTop;
    },
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
      
      this.$refs.controlBar2.currentIndex = e;
      this.$refs.controlBar1.currentIndex = e;
      console.log("1点击的e值",this.$refs.controlBar1.currentIndex);
      console.log("2点击的e值",this.$refs.controlBar2.currentIndex);

    },
    /* 网络请求方法 */
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getGoodsData(type, page).then(res => {
        //console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        //标志完成上拉加载更多
        this.$refs.scroll.finishTop();
      });
    },
    //
   
    hideTop(p) {
      this.isShowTop = -p.y > 2000;
    },
    //加载更多
    pullGet() {
      //console.log("as");
      this.getHomeGoods(this.CurrentTabType);
      //刷新refresh
      this.$refs.scroll.scroll.refresh();
    }
  }
};
</script>
<style scoped>
@import "~assets/css/base.css";
#home {
  /* padding-top: 44px; */
  position: relative;
  height: 100vh;
}
.home-nav {
  background-color: var(--color-high-text);
  color: #fff;
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
/* .tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
} */
.tab-control {
  position: relative;
  z-index: 9;
}
.content {
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}
.fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
}
/* .content{
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
} */
</style>
