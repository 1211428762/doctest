//
// 导入自定义到Toast组件
import toast from './toast.vue'
const toastInstance = {}
toastInstance.init = function (Vue) {
    const ToastConstructor = Vue.extend(toast);
    const _toast = new ToastConstructor();
    _toast.$mount(document.createElement("section"))
    document.body.appendChild(_toast.$el);
    Vue.prototype.$ftoast = _toast
    return _toast
}
export default toastInstance