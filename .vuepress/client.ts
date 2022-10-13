import { defineClientConfig } from '@vuepress/client'
import * as Icons from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

import globalFuns from '@/utils/global'
import { initI18n } from '@/i18n'
export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.use(ElementPlus).use(globalFuns).use(initI18n)
    for (const icon in Icons) {
      // eslint-disable-next-line import/namespace
      app.component('ElIcon' + icon, Icons[icon])
    }
  },
})
