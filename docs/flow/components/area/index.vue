<template>
  <div :class="[`distpicker-address-wrapper`, custom ? custom : '']">
    <!-- <label> -->
    <select
      v-model="curPro"
      name="province"
      @change="getPro()"
      :disabled="provinceDisabled"
    >
      <option :value="placeholders.province">
        {{ placeholders.province }}
      </option>
      <option
        v-for="(item, key) in provinces"
        :value="key"
        :key="key"
        :label="item"
      >
        {{ item }}
      </option>
    </select>
    <!-- </label> -->
    <!-- <label v-if="!onlyProvince"> -->
    <select
      v-if="!onlyProvince"
      name="city"
      v-model="curCity"
      @change="getCity"
      :disabled="cityDisabled"
    >
      <option :value="placeholders.city">{{ placeholders.city }}</option>
      <option
        v-for="(item, key) in citys"
        :value="key"
        :key="key"
        :label="item"
      >
        {{ item }}
      </option>
    </select>
    <!-- </label> -->
    <!-- <label  v-if="!hideArea && !onlyProvince" > -->
    <select
      v-if="!hideArea && !onlyProvince"
      name="area"
      v-model="curArea"
      @change="getArea"
      :disabled="areaDisabled"
    >
      <option :value="placeholders.area">{{ placeholders.area }}</option>
      <option
        v-for="(item, key) in areas"
        :value="key"
        :key="key"
        :label="item"
      >
        {{ item }}
      </option>
    </select>
    <!-- </label> -->
    <!-- <fButton
     v-if="resetBtn"
      :class="['cusResetBtn', resetBtn.cusClass ? resetBtn.cusClass : null]"
      @click="reset"
    >
      {{ resetBtn.word }}
    </fButton> -->
  </div>
</template>

<script>
import ALLZONE from "./area";
import fButton from "../button.vue";
const ALLPRO = ALLZONE[100000];
export default {
  name: "v-zoneSelect",
  // 接受参数  默认省、市、县、是否隐藏县、是否只有省、省市区禁用、自定义组件类（修改样式）、添加重置按钮（可定义文字，样式）
  props: {
    province: { type: [String, Number], default: "" },
    city: { type: [String, Number], default: "" },
    area: { type: [String, Number], default: "" },
    hideArea: { type: Boolean, default: false },
    onlyProvince: { type: Boolean, default: false },
    provinceDisabled: { type: Boolean, default: false },
    cityDisabled: { type: Boolean, default: false },
    areaDisabled: { type: Boolean, default: false },
    custom: { type: String, default: "" },
    // TODO重置按钮,废弃,改用暴露重置事件
    resetBtn: {
      type: Object,
      default() {
        return {
          cusClass: "",
          word: "" || "重置",
        };
      },
    },
    placeholders: {
      type: Object,
      default() {
        return {
          province: "省",
          city: "市",
          area: "区",
        };
      },
    },
  },
  components: {
    fButton,
  },
  data() {
    return {
      curPro: "",
      curCity: "",
      curArea: "",
      provinces: [],
      citys: [],
      areas: [],
    };
  },
  created() {
    // 因为不建议在data里面进行复杂操作，赋值在created完成，
    this.provinces = ALLPRO;
    this.curPro =
      this.format(this.province, "curPro") || this.placeholders.province;
    this.curCity = this.format(this.city, "curCity") || this.placeholders.city;
    this.curArea = this.format(this.area, "curArea") || this.placeholders.area;
    // 判断是否有初始值
    if (this.province) {
      this.citys = ALLZONE[this.curPro];
    }
    if (this.city) {
      this.areas = ALLZONE[this.curCity];
    }
    this.getArea();
  },

  methods: {
    // 清除options，并将此时的值设置为placeholder
    clearList(list) {
      this[list] = [];
      switch (list) {
        case "citys":
          this.curCity = this.placeholders.city;
          break;
        case "areas":
          this.curArea = this.placeholders.area;
          break;
        default:
          break;
      }
    },
    // 返回code用
    // 初始化值

    /*
    @use:用来进行城市与code间进行转化,decode为false时表示 城市文字==>code, decode为true表示code==>城市文字
    @Param: place代表此时传入的城市,类型可以是文字,数字. type代表当前值类型,是否是省市
    @date: 2020-10-20
    */

    format(place, type, decode = false) {
      // 过滤初始值
      for (const key in this.placeholders) {
        if (place === this.placeholders[key]) {
          return null;
        }
      }

      if (isNaN(place) || decode) {
        switch (type) {
          case "curPro":
            if (decode) {
              return ALLPRO[place];
            }
            for (const key in ALLPRO) {
              if (place === ALLPRO[key]) {
                this.curPro = key;
                return key;
              }
            }
            break;
          case "curCity":
            if (decode) {
              return ALLZONE[this.curPro][place];
            }
            for (const key in ALLZONE[this.curPro]) {
              if (place === ALLZONE[this.curPro][key]) {
                this.curCity = key;
                return key;
              }
            }
            break;
          case "curArea":
            if (decode) {
              return ALLZONE[this.curCity][place];
            }
            for (const key in ALLZONE[this.curCity]) {
              if (place === ALLZONE[this.curCity][key]) {
                this.curArea = key;
                return key;
              }
            }
            break;
          default:
            console.warn("请确认信息是否正确");
            break;
        }
      } else if (!isNaN(place)) {
        return place;
      }
    },

    getPro() {
      const data = {
        province: this.format(this.curPro, "curPro", true),
      };
      this.$emit("update:province", this.format(this.curPro, "curPro", true));
      this.$emit("city-selected", data);
  
      this.clearList("citys");
      this.clearList("areas");
      this.citys = ALLZONE[this.curPro];
    },

    getCity() {
      const data = {
        province: this.format(this.curPro, "curPro", true),
        city: this.format(this.curCity, "curCity", true),
      };
      this.$emit("update:city", this.format(this.curCity, "curCity", true));
      this.$emit("city-selected", data);
      this.clearList("areas");
      this.areas = ALLZONE[this.curCity];
    },
    getArea() {
      const data = {
        province: this.format(this.curPro, "curPro", true),
        city: this.format(this.curCity, "curCity", true),
        area: this.format(this.curArea, "curArea", true),
      };
      this.$emit("city-selected", data);
      this.$emit("update:area", this.format(this.curArea, "curArea", true));
    },
    reset() {
      this.curPro = this.placeholders.province;
      this.clearList("citys");
      this.clearList("areas");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.distpicker-address-wrapper {
  display: flex;
  justify-content: flex-start;
  color: #9caebf;
  select {
    width: 30%;
    margin: 0.5rem 0;
    padding: 0.5rem 0.75rem;
    height: 40px;
    font-size: 1rem;
    line-height: 1.25;
    color: #464a4c;
    background-color: #fff;
    background-image: none;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
    -webkit-transition: border-color ease-in-out 0.15s,
      -webkit-box-shadow ease-in-out 0.15s;
    transition: border-color ease-in-out 0.15s,
      -webkit-box-shadow ease-in-out 0.15s;
    -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s,
      -webkit-box-shadow ease-in-out 0.15s;
    &:focus {
      outline: none;
      // border-color: $primary;
    }
    &:disabled {
      cursor: not-allowed;
      background: #f8f8f8;
    }
    & + select {
      margin-left: 30px;
    }

    option {
      font-weight: normal;
      display: block;
      white-space: pre;
      min-height: 1.2em;
      padding: 0px 2px 1px;
    }
  }
  ul {
    margin: 0;
    padding: 0;

    li {
      list-style: none;
    }
  }
}
</style>
