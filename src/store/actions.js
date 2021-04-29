import { ADD_COUNTER, ADD_TO_CART } from './mutations-types'
export default {
  addCart(context, playload) {

    return new Promise((resolve,reject)=>{
      let oldProduct = context.state.cartList.find(item => item.iid === playload.iid)
      if (oldProduct) {
        //oldProduct.count += 1
        context.commit(ADD_COUNTER,oldProduct)
        resolve('数量+1')
      } else {
        console.log(playload);
        
        playload.count = 1;
        //context.state.cartList.push(playload)
        context.commit(ADD_TO_CART,playload)
        resolve('商品+1')
      }
    })


   

  }
}