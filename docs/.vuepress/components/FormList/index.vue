<template>
  <div>
    <el-form
      v-loading="testLoading"
      ref="form"
      :class="[className, 'form-list', { 'form-exhibit': exhibit }]"
      :model="transfer"
      :label-width="labelWidth"
      @keyup.enter.native="submitForm(undefined, 'form')"
      v-bind="$attrs"
      label-suffix=":"
    >
      <div
        v-for="(item, index) in fieldList"
        :key="index"
        class="form-item-wrap"
        :class="{ 'form-item-half': item.half }"
        :style="{ width: item.width }"
      >
        <slot :name="item.prop + 'Prefix'"></slot>
        <!-- label为inner时, 表示无label,只有placeholder -->
        <el-form-item
          v-if="item.type != 'nativeSlot'"
          :prop="item.prop"
          :label="!item.inner ? item.label : null"
          :class="[item.className]"
          :rules="item.rules"
          :label-width="item.width"
        >
          <!-- 普通输入框 -->
          <el-input
            v-if="
              item.type === 'input' ||
              item.type === 'password' ||
              item.type === 'number'
            "
            v-model="transfer[item.prop]"
            :type="item.type === 'input' ? 'text' : item.type"
            clearable
            :disabled="exhibit || item.disabled"
            :placeholder="item.placeholder || getPlaceholder(item)"
            @focus="handleEvent(item.type, transfer[item.prop], item.prop)"
            :maxlength="item.limit"
            :show-word-limit="item.limit ? true : false"
          />

          <!-- 文本输入框 -->
          <el-input
            v-if="item.type === 'textarea'"
            v-model.trim="transfer[item.prop]"
            :type="item.type"
            :disabled="exhibit || item.disabled"
            :placeholder="item.placeholder || getPlaceholder(item)"
            :autosize="item.autosize || { minRows: 3, maxRows: 10 }"
            @focus="handleEvent(item.type, transfer[item.prop], item.prop)"
            :maxlength="item.limit || 200"
            :show-word-limit="item.limit ? true : false"
          />
          <!-- 计数器 -->
          <el-input-number
            v-if="item.type === 'inputNumber'"
            v-model="transfer[item.prop]"
            :min="item.min"
            :max="item.max"
            :disabled="exhibit || item.disabled"
            @change="handleEvent(item.type, transfer[item.prop], item.prop)"
          />
          <!-- 选择框 -->
          <!-- 默认可清空   :clearable="item.clearable"-->
          <el-select
            v-if="item.type === 'select'"
            v-model="transfer[item.prop]"
            :disabled="exhibit || item.disabled"
            clearable
            :filterable="item.filterable"
            :multiple="item.multiple"
            :placeholder="item.placeholder || getPlaceholder(item)"
            @change="handleEvent(item.type, transfer[item.prop], item.prop)"
          >
            <el-option
              v-for="(childItem, childIndex) in item.list"
              :key="childIndex"
              :label="childItem.label"
              :value="childItem.value"
              :disabled="childItem.disabled"
            />
          </el-select>
          <!-- 日期选择框 -->
          <!-- TODO增加多个时间框 -->
          <el-date-picker
            v-if="item.type === 'date'"
            v-model="transfer[item.prop]"
            :type="item.dateType"
            :value-format="item.valueFormat || 'yyyy-MM-dd HH:mm:ss'"
            :picker-options="item.TimePickerOptions"
            :clearable="item.clearable"
            :disabled="exhibit || item.disabled"
            :placeholder="item.placeholder || getPlaceholder(item)"
            @focus="handleEvent(item.type, transfer[item.prop], item.prop)"
          />
          <!-- 多选框系列 -->
          <el-checkbox-group
            v-if="item.type === 'checkbox'"
            v-model="transfer[item.prop]"
            :disabled="exhibit || item.disabled"
            @change="handleEvent(item.type, transfer[item.prop], item.prop)"
          >
            <el-checkbox
              v-for="(childItem, childIndex) in item.list"
              :key="childIndex"
              :label="childItem.value"
              :name="childItem.label"
              :disabled="childItem.disabled"
            >
              {{ childItem.label }}</el-checkbox
            >
          </el-checkbox-group>

          <!-- 单选框系列 -->
          <el-radio-group
            v-if="item.type === 'radio'"
            v-model="transfer[item.prop]"
            :disabled="exhibit || item.disabled"
            @change="handleEvent(item.type, transfer[item.prop], item.prop)"
          >
            <el-radio
              v-for="(childItem, childIndex) in item.list"
              :key="childIndex"
              :label="childItem.value"
              :disabled="childItem.disabled"
            >
              {{ childItem.label }}
            </el-radio>
          </el-radio-group>
          <!-- switch -->

          <el-switch
            :disabled="exhibit || item.disabled"
            v-if="item.type === 'switch'"
            v-model="transfer[item.prop]"
            :active-text="item.activeText"
            :inactive-text="item.inactiveText"
          ></el-switch>

          <!-- 上传 包含较多逻辑, 当需要时,需要根据实际更改,可以二次开发该组件 -->
          <!-- <upload
          v-if="item.type.includes('upload')"
          :info="item"
          :exhibit="exhibit"
          :file="transfer[item.prop]"
          @success="fileSuccess"
          :type="item.type"
        ></upload> -->

          <!-- 上传eleicon TODO 目前只有elementicon -->
          <!-- 绑定表单需要 -->
          <addIcon
            v-if="item.type == 'icon'"
            v-model="transfer[item.prop]"
            :icon="transfer[item.prop]"
            :exhibit="exhibit"
          ></addIcon>
          <!-- solt -->
          <template v-if="item.type === 'slot'">
            <slot
              :class="{ 'form-item-disabled': exhibit }"
              :name="item.prop"
              v-bind:templateData="transfer"
            />
          </template>
        </el-form-item>
        <!-- 表单项,尾插槽 -->
        <slot :name="item.prop + 'Suffix'"></slot>
        <!-- 原生插槽solt -->
        <template v-if="item.type === 'nativeSlot'">
          <slot
            :class="{ 'form-item-disabled': exhibit }"
            :name="item.prop"
            v-bind:templateData="transfer"
          />
        </template>
      </div>

      <slot
        name="append"
        :class="{ 'form-item-disabled': exhibit }"
        v-bind:templateData="transfer"
      >
      </slot>
      <div v-if="footer" class="button-wrap">
        <slot name="footer" v-bind:form="transfer"
          ><el-button
            v-if="!exhibit"
            class="form-submit"
            @click="submitForm(undefined, 'form')"
            :loading="btnLoading"
            >提交</el-button
          >
          <el-button class="form-cancel" @click="cancel">返回</el-button></slot
        >
      </div>
    </el-form>
  </div>
</template>

<script>
import upload from "./upload";
import addIcon from "./addIcon";

export default {
  name: "form-list",

  components: { upload, addIcon },
  props: {
    // 自定义类名
    className: {
      type: String,
      default: "",
    },
    // 该变量主要是为了设置默认值,可被label-width取代
    labelWidth: {
      type: String,
      default: "100px",
    },
    // 传这个可以实现 父子组件双向绑定, 无需按钮触发
    formData: {
      type: Object,
    },
    // 相关字段
    fieldList: {
      type: Array,
      required: true,
    },

    elForm: {
      type: Object,
    },
    exhibit: Boolean,
    loading: {
      type: Boolean,
      default: () => true,
    },
    footer: {
      type: Boolean,
      default: () => true,
    },
  },

  data() {
    return {
      transfer: {},
      configList: {},

      testLoading: true,
      btnLoading: false,
    };
  },
  created() {
    // FIX
    // 都加3ms的loading
    setTimeout(() => {
      this.testLoading = false;
    }, 300);
    this.init();
    // 加了上传组件建议调用一次
    // this.getConfigList();
  },
  watch: {
    // TODO  当使用slot 时, 且 内部的formItem 绑定 父级 的formData 时 需要动态监听formData,开销略大,
    //父组件使用更便利,  舍弃性能,提高容错率
    formData: {
      handler(val) {
        // console.log(val);
        this.transfer = val;
      },
      deep: true,
    },
  },
  mounted() {
    // 将form实例返回到父级
    this.$emit("update:elForm", this.$refs.form);
  },
  methods: {
    // 初始化
    init() {
      const obj = {};
      // 把配置项的prop的值作为 key 绑定到transfer这个对象上
      (this.fieldList || [])
        .map((cur) => cur.prop)
        .forEach((field) => {
          obj[field] = "";
        });
      // TODO 因为传过来的值全部默认是""(String),以下在初始化时做一定处理
      // 如果是radio,让他默认选中第一个
      this.fieldList.forEach((cur) => {
        switch (cur.type) {
          case "radio":
            obj[cur.prop] = cur.list[0].value;
            break;
          case "switch":
            obj[cur.prop] = false;
            break;
          case "checkbox":
            obj[cur.prop] = [];
            break;
          default:
            break;
        }
      });
      this.transfer = obj;
      // 用于数据反显
      if (this.formData) {
        //  TODO 反显数据需要处理的,上传文件,
        this.transfer = this.formData;
      }
    },
    //TODO 获取字段列表  待开发
    // getConfigList() {
    //   const props = this.fieldList.map((cur) => cur.prop); // 所有的字段值value
    //   const types = this.fieldList.map((cur) => cur.type); // 所有的字段名 name
    //   const obj = {};
    //   types.forEach((cur, index) => {
    //     obj[cur] = props[index];
    //   });
    //   this.configList = obj;
    // },

    // 得到placeholder的显示
    getPlaceholder(row) {
      console.log(row.type);
      if (this.exhibit) return "-";
      let placeholder;
      if (
        row.type === "input" ||
        row.type === "textarea" ||
        row.type === "password" ||
        row.type === "number"
      ) {
        placeholder = `请输入 ${row.label}`;
      } else if (
        row.type === "select" ||
        row.type === "time" ||
        row.type === "date"
      ) {
        placeholder = `请选择 ${row.label}`;
      } else {
        placeholder = row.label;
      }
      return placeholder;
    },
    // 绑定的相关事件
    handleEvent(type, val, key) {
      // TODO:以下是表单项事件触发时,默认的事件,待增加
      switch (type) {
        case "radio":
          // radio时清空表单校验结果
          this.$refs.form.clearValidate();
          break;
        default:
          break;
      }
      this.$emit("handle-event", type, val, key);
    },
    // TODO 派发按钮点击事件 ,待启用
    // handleClick(event, data) {
    //   this.$emit("handle-click", event, data);
    // },
    // 提交
    submitForm(fn = function () {}, formName = "form") {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit("get-form", this.transfer);
          this.btnLoading = true;
          setTimeout(() => {
            this.btnLoading = false;
          }, 1000);
          return fn(this.transfer);
        } else {
          return false;
        }
      });
    },

    cancel() {
      this.$emit("cancel");
    },

    // 重置表单
    resetFields() {
      this.$refs.form.resetFields();
    },

    // 取消验证结果
    clearValidate() {
      this.$refs.form.clearValidate();
    },

    // 父组件设置初始值
    setDefaultVal(props, val) {
      this.transfer[props] = val;
    },
  },
};
</script>

<style lang="scss" scoped>
// 自定义form相关

.form-list {
  text-align: left;
  .el-form-item {
    display: inline-block;
    width: 100%;
    &.form-item-half {
      // width: 49%;
      vertical-align: top;
    }
    ::v-deep .el-form-item__content {
      .el-input,
      .el-select,
      .el-textarea {
        width: 100%;
      }
      .el-input-number {
        width: 100%;
        .el-input__inner {
          width: inherit;
          // border: none;
        }
      }
    }
  }

  .el-form-block {
    display: block;
    width: 100%;
    .el-form-item__content {
      .el-textarea {
        width: 100%;
      }
    }
  }
}

// 展示样式
.form-list.form-exhibit ::v-deep {
  .el-form-item {
    pointer-events: none;
  }
  .el-input__inner,
  .el-textarea__inner {
    border: none !important;
  }
  .el-input.is-disabled .el-input__inner,
  .el-textarea.is-disabled .el-textarea__inner {
    background-color: unset;
    resize: none;
    color: #666;
  }
  .el-input__suffix {
    display: none;
  }
  .el-form-item.is-required:not(.is-no-asterisk)
    .el-form-item__label-wrap
    > .el-form-item__label:before,
  .el-form-item.is-required:not(.is-no-asterisk) > .el-form-item__label:before {
    content: none !important;
  }
  // checkbox,radio,选项转文字
  .el-checkbox.is-disabled,
  .el-radio.is-disabled {
    display: none;
  }
  .el-checkbox.is-checked,
  .el-radio.is-checked {
    display: block;
    .el-radio__label,
    .el-checkbox__label {
      color: #606266;
    }
  }
  .el-checkbox.is-disabled.is-checked {
    .el-checkbox__inner {
      display: none;
    }
  }
  .el-radio__input.is-disabled.is-checked {
    display: none;
  }
  .el-form-item__error {
    display: none;
  }
}
.form-item-wrap {
  position: relative;
}
.form-item-wrap.form-item-half {
  width: 49%;
  display: inline-block;
}
.button-wrap {
  text-align: center;
}
</style>
