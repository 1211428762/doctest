import FormList from './FormList';
import TableList from './TableList';
import FlowChart from "./FlowChart"

console.log('document--->', document)
if (document) {
    document.addEventListener("mousedown", function (event) {
        var target = event.target;
        // var body = document.body;
        // var html = document.documentElement;
        // // 设置自定义属性值
        // body.style.setProperty('--pagex', event.pageX);
        // body.style.setProperty('--pagey', event.pageY);

        // html.style.setProperty('--clientx', event.clientX);
        // html.style.setProperty('--clienty', event.clientY);
        // html.style.setProperty('--scrolly', window.pageYOffset);

        target.style.setProperty("--offsetx", event.offsetX + "px");
        target.style.setProperty("--offsety", event.offsetY + "px");
        if (target.parentElement) {
            target.parentElement.style.setProperty(
                "--target-width",
                target.clientWidth
            );
            target.parentElement.style.setProperty(
                "--target-height",
                target.clientHeight
            );
            target.parentElement.style.setProperty(
                "--target-left",
                target.offsetLeft
            );
            target.parentElement.style.setProperty(
                "--target-top",
                target.offsetTop
            );
        }
    });
    console.log("loading---success");
}
// 全局挂载
export default {
    install(Vue) {
        // Vue.prototype.$toast = toastInstance.init();
        Vue.component('FormList', FormList);
        Vue.component('TableList', TableList);
        Vue.component('FlowChart', FlowChart);
    },
};
