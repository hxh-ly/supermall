<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>

    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList";
import CartBottomBar from './childComps/CartBottomBar'
import { mapGetters } from "vuex";
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters(["cartLength"])
  }
  
};
</script>

<style scoped>
@import "~assets/css/base.css";
#cart {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-high-text);
  color: #fff;
  font-weight: 600;
}
</style>
