<template>
  <section id="com-upload-img">
    <el-upload
      :file-list="fileList"
      :before-upload="beforeUploadHandle"
      :on-success="uploadSuccessHandle"
      :http-request="uploadToOSS"
      :on-remove="handleFileRemove"
      :on-exceed="handleExceed"
      multiple
      :on-preview="handlePictureCardPreview"
      :limit="props.limit"
      accept="image/*"
      :action="''"
      list-type="picture-card"
      v-bind="$attrs"
    >
      <el-icon><plus /></el-icon>
    </el-upload>
    <el-dialog top="6vh" custom-class="uploadimg-preview-dialog" v-model="dialogVisible">
      <img style="max-height: 99vh; max-width: 100%; object-fit: contain" :src="dialogImageUrl" />
    </el-dialog>
    <!-- 当有传入图片且, 且执行"读" 操作时, 隐藏上传组件. 显示已上传的图片集 -->
    <div v-if="props.modelValue?.length > 0 && props.disabled" class="uploadimg-preview">
      <el-image
        v-for="(src, index) in formartPreview(props.modelValue)"
        :src="src"
        :key="index"
        class="inner-preview"
        :preview-src-list="formartPreview(props.modelValue)"
      ></el-image>
    </div>
  </section>
</template>
<script>
export default {
  name: 'tab-image',
}
</script>
<script setup>
import { Plus } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { ref, defineProps, defineEmits, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
const uploadFile = () => {
  uploadSuccessHandle(1, 'https://static.runoob.com/images/demo/demo3.jpg')
}
const { t } = useI18n()
const props = defineProps({
  modelValue: [String, Array],
  disabled: { type: Boolean, default: false },
  limit: { type: Number, default: 1 },
  widthLimit: { type: Number, default: 0 },
})
const emit = defineEmits(['update:modelValue'])
let fileList = ref([])
let fileUrl = ref([])
let dialogVisible = ref(false)
let dialogImageUrl = ref('')
// 实时更新图片集合, (待优化)
watchEffect(() => {
  if (props.modelValue?.length > 0) {
    if (props.limit === 1) {
      fileList.value = [{ name: props.modelValue, url: props.modelValue }]
    } else {
      fileList.value = props.modelValue.map((cur) => ({ name: cur, url: cur }))
    }
  }
})

//上传单张返回字符串,多张数组
const formartExport = (url) => (props.limit === 1 ? url?.toString() : url)
// 预览图片
const formartPreview = (url) => (props.limit === 1 ? url?.split(' ') : url)
//如果有图片宽度限制
const validateImgWidth = (file) => {
  const _URL = window.URL || window.webkitURL
  const isSize = new Promise((res, rej) => {
    const image = new Image()
    image.onload = function () {
      image.width <= props.widthLimit ? res() : rej()
    }
    image.src = _URL.createObjectURL(file)
  })
    .then(() => file)
    .catch(() => {
      ElMessage.error(t('tip_width_limit', { width: props.widthLimit }))
      return Promise.reject()
    })
  return isSize
}
// 校验上传图片 类型
const beforeUploadHandle = (file) => {
  if (!file.type.includes('image')) {
    ElMessage.error(t('upload.tip'))
    return false
  }
  // 如果有图片宽度限制
  if (props.widthLimit) return validateImgWidth(file)
}
const uploadErrorHandle = () => {
  ElMessage.error(t('upload.failed'))
}
const uploadSuccessHandle = (md, url) => {
  if (url) {
    //没有图片url === 上传失败
    fileList.value.push({ name: md, url: url })
    fileUrl.value.push(url)
    emit('update:modelValue', formartExport(fileUrl.value))
  } else {
    uploadErrorHandle()
  }
}

const uploadToOSS = (data) => {
  uploadFile(data.file, uploadSuccessHandle, uploadErrorHandle)
}
const handleFileRemove = (file) => {
  const index = fileUrl.value.indexOf(file.url)
  fileUrl.value.splice(index, 1)
  fileList.value.splice(index, 1)
  emit('update:modelValue', formartExport(fileUrl.value))
}
// 图片上传上限提示
const handleExceed = (file, list) => {
  if (list.length === props.limit) {
    ElMessage.warning(t('tip_full_img', { num: props.limit }))
  }
}
const handlePictureCardPreview = (file) => {
  dialogImageUrl.value = file.url
  dialogVisible.value = true
}
</script>
<style lang="scss">
#com-upload-img {
  .uploadimg-preview {
    display: flex;
    .el-image img {
      max-width: 100px;
      object-fit: contain;
      max-height: 100px;
      margin: 0 10px;
    }
  }
  .el-upload-list__item-thumbnail {
    object-fit: contain;
  }
  .el-upload-list__item {
    transition: none !important;
  }
  .el-upload-list__item.is-ready {
    display: none;
  }
  .uploadimg-preview-dialog {
    background: transparent !important;
    width: 50%;
    max-height: 99vh;
    text-align: center;
    border: none;
    box-shadow: none;
    .el-dialog__footer {
      display: none;
    }
    .el-dialog__body {
      padding: 0;
      max-height: 99vh;
      max-width: 99vw;
    }
    .el-dialog__close {
      transform: scale(2.5) translateX(30px);
      background: #626c6c;
      border-radius: 50%;
      color: #d5d9e0;
    }
  }
}
</style>
