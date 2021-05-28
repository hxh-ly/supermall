import Toast from "components/common/toast/Toast";
import Vue from 'vue'
const obj = {}
obj.install = function () {

  //1 组件构造器

  const toastConstructor = Vue.extend(Toast)
  //2 以new的方式构造一个组件对象
  const toast = new toastConstructor()
  //3 将组件对象手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))
  //4 toast.$el 对应的就是div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast;
}
export default obj;