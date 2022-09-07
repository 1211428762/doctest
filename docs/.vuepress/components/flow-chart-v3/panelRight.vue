<template>
  <div class="nodeMsg">
    <!-- 抽离右边栏 -->
    <el-tabs v-model="msgSetting" type="border-card">
      <el-tab-pane label="节点信息" name="node">
        <el-form
          @keyup.enter="settingSubmit"
          @submit.prevent
          :model="propNodeSet"
          ref="nodeSetting"
          labelPosition="right"
          labelWidth="45px"
        >
          <el-form-item v-for="(item, key) in styleChanges" :key="key" :label="item.label" :prop="item.prop">
            <template v-if="item.prop === 'shape'">
              <el-select v-model="propNodeSet.shape" :placeholder="item.label">
                <el-option
                  v-for="(subItem, key) in item.options"
                  :key="key"
                  :label="subItem.label"
                  :value="subItem.value"
                ></el-option>
              </el-select>
            </template>
            <template v-else>
              <el-input v-model="propNodeSet[item.prop]" :placeholder="item.label"></el-input>
            </template>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="连线信息" name="link">
        <el-form
          @keyup.enter="settingSubmit"
          @submit.prevent
          :model="propLinkSet"
          ref="linkSetting"
          labelPosition="right"
          labelWidth="45px"
        >
          <el-form-item label="值" prop="desc">
            <el-input v-model="propLinkSet.desc" placeholder="值"></el-input>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-button class="btn-custom" type="primary" @click="settingSubmit"> 确 定 </el-button>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'flowChat-panel-right',
  props: {
    nodeSetting: Object,
    linkSetting: Object,
  },
  data() {
    return {
      msgSetting: 'node',
      propNodeSet: {},
      propLinkSet: {},
      styleChanges: [
        {
          prop: 'name',
          label: '名称',
        },
        {
          prop: 'desc',
          label: '值',
        },
        {
          prop: 'shape',
          label: '形状',
          options: [
            {
              label: '矩形',
              value: 'rect',
            },
            // {
            //   label: '圆形',
            //   value: 'circle',
            // },
            // {
            //   label: '菱形',
            //   value: 'diamond',
            // },
            {
              label: '椭圆',
              value: 'ellipse',
            },
          ],
        },
      ],
    }
  },
  created() {
    this.propNodeSet = this.nodeSetting
    this.propLinkSet = this.linkSetting
  },
  watch: {
    msgSetting(val) {
      this.$emit('update:msgSetting', val)
    },
  },
  methods: {
    settingSubmit() {
      this.$emit('submit')
    },
  },
}
</script>

<style lang="scss" scoped>
.nodeMsg {
  width: 300px;
  padding: 10px;
  // margin: 0 20px;
  // border: 1px solid #e4e7ed;
  .el-tabs__content {
    .btn-custom {
      margin-top: 20px;
    }
  }
  .el-form-item {
    margin-bottom: 5px;
  }
}
</style>
