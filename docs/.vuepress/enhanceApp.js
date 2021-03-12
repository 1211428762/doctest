import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./styles/common.scss"
import global from "./components/global"
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements for the site.
  // 使用 element-ui
  Vue.use(ElementUI);
  Vue.use(global);

}

