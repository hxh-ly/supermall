import { debounce } from './utils'
import BackTop from "components/content/backTop/BackTop";
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    let newRefresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImgListener = () => {
      newRefresh()
      console.log("------");

    }
    this.$bus.$on('itemImgLoad', this.itemImgListener)
  }
}
export const backTopMixin = {
 components:{
  BackTop
 },
 data() {
   return {
    isShowTop: false,
   }
 },
 methods: {
  backClick() {
    this.$refs.scroll.scrollTo(0,0,300);
  },
  changeTopState(p){  
    this.isShowTop = -p > 1000;
  
    
  }
 },
}