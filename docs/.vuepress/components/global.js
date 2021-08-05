import FormList from './FormList';
import TableList from './TableList';
import FlowChart from "./FlowChart"


// 全局挂载
export default {
    install(Vue) {
        // Vue.prototype.$toast = toastInstance.init();
        Vue.component('FormList', FormList);
        Vue.component('TableList', TableList);
        Vue.component('FlowChart', FlowChart);
    },
};
