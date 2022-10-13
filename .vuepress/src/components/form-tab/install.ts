import TabTag from './components/tab-tag.vue'
import TabInput from './components/tab-input.vue'
import TabSelect from './components/tab-select.vue'
import TabDate from './components/tab-date.vue'
import TabNumber from './components/tab-number.vue'
import TabRadio from './components/tab-radio.vue'
import TabImage from './components/tab-image.vue'
import TabUploadExcel from './components/tab-upload-excel.vue'
import TabCheckbox from './components/tab-checkbox.vue'
import TabFile from './components/tab-file.vue'

import type { App } from 'vue'

export default {
  install(app: App): void {
    app.component(TabTag.name, TabTag)
    app.component(TabInput.name, TabInput)
    app.component(TabSelect.name, TabSelect)
    app.component(TabDate.name, TabDate)
    app.component(TabNumber.name, TabNumber)
    app.component(TabRadio.name, TabRadio)
    app.component(TabImage.name, TabImage)
    app.component(TabUploadExcel.name, TabUploadExcel)
    app.component(TabCheckbox.name, TabCheckbox)
    app.component(TabFile.name, TabFile)
    // app.component(TabShowCode.name, TabShowCode)
  },
}
