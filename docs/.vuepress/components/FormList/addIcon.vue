<template>
  <div :class="['add-icon', { showIcon: exhibit }]">
    <div
      @click="addMenuIcon"
      @contextmenu="addMenuIcon"
      class="add-icon-mask"
    ></div>
    <el-input
      placeholder="请输入菜单图标"
      v-model="propIcon"
      @change="handleInput"
      v-if="!exhibit"
      clearable
      @click.native.stop="addMenuIcon"
      @dblclick.native="addMenuIcon"
      class="input-with-select"
    >
      <el-button

        @click.native.stop="addMenuIcon"
        slot="append"
        :icon.sync="propIcon"
      ></el-button>
    </el-input>
    <!-- 菜单图标反显 -->
    <div v-if="exhibit">
      <el-button v-if="propIcon" :icon.sync="propIcon"></el-button>
      <span v-if="!propIcon" class="no-icon"> - </span>
    </div>

    <el-dialog
      :append-to-body="true"
      title="请选择菜单图标"
      :visible.sync="menuDialog"
      width="40%"
    >
      <div class="icon-list">
        <i
          @click="chooseIcon(item)"
          v-for="(item, index) in iconList"
          :key="index"
          :class="['el-icon-' + item, 'hover-anime']"
        ></i>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import iconList from './icon';

export default {
  name: 'addIcon',
  props: {
    value: String,
    icon: String,
    exhibit: Boolean,
  },
  data() {
    return {
      menuDialog: false,
      iconList,
      propIcon: '',
    };
  },
  created() {
    //   console.log(this.value,this.icon);
    // this.propIcon = this.value || this.icon;
  },
  //   watch: {
  //     propIcon(val) {
  //       this.$emit("update:icon", val);
  //     },
  //   },
  watch: {
    icon(val) {
      this.propIcon = val;
    },
  },
  methods: {
    addMenuIcon() {
      this.menuDialog = true;
    },
    chooseIcon(icon) {
      this.menuDialog = false;
      this.propIcon = `el-icon-${icon}`;
      this.$emit('update:icon', this.propIcon);
      this.$emit('input', this.propIcon);
    },
    handleInput(val) {
      this.$emit('input', this.propIcon); // 触发 input 事件，并传入新值
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-list {
  font-size: 36px;
  i {
    margin: 10px;
  }
  height: 600px;
  overflow: scroll;
}
.add-icon {
  position: relative;
}
.add-icon-mask {
  position: absolute;
  width: 50%;
  height: 100%;
  z-index: 100;
  cursor: pointer;
}
.add-icon ::v-deep .input-with-select {
  cursor: pointer !important;
}

.add-icon.showIcon {
  pointer-events: none;
  .no-icon {
    margin-left: 15px;
    color: #666;
  }
}
</style>
