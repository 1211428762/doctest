<template>
  <div class="component-upload">
    <!-- TODO 上传组件目前只有两类,图片和普通文件 -->
    <!-- 上传普通文件 -->
    <!-- TODO上传普通文件,url -->
    <el-upload
      v-if="!type.includes('img')"
      action
      :auto-upload="false"
      :multiple="false"
      :on-change="handleAvatarSuccess"
      :file-list="fileList"
      v-bind="$attrs"
      :disabled="exhibit || (info && info.disabled)"
      :show-file-list="true"
    >
      <!-- 上传普通文件显示文件列表 -->
      <div :class="landscape ? 'form-upload-landscape' : ''">
        <button type="button" class="form-upload-btn">
          <i class="el-icon-upload2"></i>
          {{ info.txt ? info.txt : "上传文件" }}
        </button>
        <div slot="tip" class="el-upload__tip">{{ info.notice }}</div>
      </div>
    </el-upload>
    <!-- 上传图片 -->
    <el-upload
      v-if="type.includes('img')"
      class="avatar-uploader"
      action="#"
      :on-change="handleAvatarSuccess"
      :file-list="fileList"
      v-bind="$attrs"
      :disabled="exhibit || (info && info.disabled)"
      list-type="picture-card"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :show-file-list="false"
    >
      <!-- :before-upload="beforeAvatarUpload" -->
      <!-- TODO 上传目前没有限制数量 -->
      <!-- 长传图片时,不显示上传文件列表 -->
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>

    <!-- 图片预览 -->
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
// import { fileUpload, getMaterialURL } from '@/api/apis/material/material';
// import { attachImg } from '@/api/apis/system/user';
// import { getToken } from '@/utils/auth';

export default {
  name: 'fileUpload',
  props: {
    info: Object,
    // TODO 目前传文件 格式 是字符串
    file: String,
    exhibit: Boolean,
    type: {
      type: String,
      default: 'file',
    },
    action: {
      type: String,
      default: 'https://jsonplaceholder.typicode.com/posts/',
    },
    landscape: Boolean,
  },
  mounted() {
    this.init();
  },
  data() {
    return {
      imageUrl: '',
      dialogImageUrl: '',
      dialogVisible: false,
      fileList: [],
    };
  },
  methods: {
    async init() {
      const token = getToken();
      console.log(this.file);
      // FIXME 异步代码, 如果加载第二张图片需要延迟, 如果图片过多,需要考虑

      if (this.file) {
        this.showRealImg(token);
      } else {
        setTimeout(() => {
          this.exhibit ? this.showRealImg(token) : null;
        }, 500);
      }
    },
    showRealImg(token) {
      // const isProduction = process.env.NODE_ENV === 'production'; // 判定指令环境
      // if (isProduction) {
      //   // 开发环境
      //   this.imageUrl = `../zmcg-resource/f/attach?filePathName=${this.file}&sys=test&Zmcg-Auth=${token}`;
      // } else {
      //   this.imageUrl = `api/zmcg-resource/f/attach?filePathName=${this.file}&sys=test&Zmcg-Auth=${token}`;
      // }
      attachImg(this.file, 'test').then((res) => {
        this.imageUrl = window.URL.createObjectURL(res.data);
      });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    handleSuccess(response, file, fileList) {
      // TODO 上传返回文件名
      const files = fileList.map((cur) => cur.name).toString();
      this.$emit('success', files);
      console.log(files);
    },
    // 处理上传图片
    handleAvatarSuccess(res, file) {
      const formData = new FormData();
      if (file[0]) {
        this.imageUrl = URL.createObjectURL(file[0].raw);
        // 上传
        const raw = file[0].raw;
        const name = file[0].name;
        formData.append('file', raw);
        formData.append('fileName', name);
        formData.append('sys', 'test');

        fileUpload(formData).then((res) => {
          if (res.data.code === '00000') {
            this.$message.success('上传成功');
            this.$emit('success', res.data.data.name, this.info.prop);
          }
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.component-upload {
  // width: 100%;
}
.form-upload-btn {
  border-style: none;
  outline: none;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  border: 1px solid #d9d9d9;
  padding: 5px 10px;
  background: white;
}
// 上传图片的样式
.avatar-uploader ::v-deep {
  .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100%;

    text-align: center;
  }
  .avatar {
    width: 100%;
    display: block;
  }
  .el-upload--picture-card {
    width: 100px;
    height: 100px;
    line-height: 100px;
  }
}
.form-upload-landscape {
  display: flex;
  justify-content: space-between;
  ::v-deep .el-upload__tip {
    margin-left: 500px;
  }
}
::v-deep .el-upload-list {
  width: 150px;
}
</style>
