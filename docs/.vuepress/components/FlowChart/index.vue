<template>
  <div class="v-flow-chat">
    <el-main v-loading.fullscreen.lock="fullscreenLoading">
      <section class="VflowChat">
        <!-- 左侧边栏 -->
        <panelLeft
          :linkBaseStyle="linkBaseStyle"
          :nodeItemList="nodeItemList"
          :MovePalette.sync="MovePalette"
          @node-mouse-down="nodeItemMouseDown"
        ></panelLeft>
        <!-- 左侧边的选项 -->
        <div class="super-flow-demo1" :style="{ height: height }">
          <div class="flow-container" ref="flowContainer">
            <super-flow
              ref="superFlow"
              :graph-menu="graphMenu"
              :node-menu="nodeMenu"
              :link-menu="linkMenu"
              :node-list="nodeList"
              :link-list="linkList"
              :link-base-style="linkBaseStyle"
              :link-style="linkStyle"
              :link-desc="linkDesc"
              @get-tar-node="nodeClick"
              @get-tar-link="linkClick"
            >
              <!-- 这里改了源码将跟个node信息全传过来了 -->
              <!-- @click="nodeClick(nodeMsg.id)" -->
              <template v-slot:node="{ meta }">
                <div @mouseup="nodeMouseUp" class="flow-node ellipsis">
                  <icon-tag :iconType="meta.type"></icon-tag>
                  {{ meta.name }}
                </div>
              </template>
            </super-flow>
          </div>
        </div>
        <panelRight
          :msgSetting.sync="msgSetting"
          :nodeSetting="nodeSetting"
          :linkSetting="linkSetting"
          @submit="settingSubmit"
          ref="panelRight"
        ></panelRight>
      </section>
    </el-main>
    <!-- dialog形式修改流程图控件属性 -->
    <!-- <el-dialog
      :title="drawerConf.title"
      :visible.sync="drawerConf.visible"
      :close-on-click-modal="false"
      width="500px"
    >
      <el-form
        @keyup.native.enter="settingSubmit"
        @submit.native.prevent
        v-show="drawerConf.type === drawerType.node"
        ref="nodeSetting"
        :model="nodeSetting"
      >
        <el-form-item label="节点名称" prop="name">
          <el-input
            v-model="nodeSetting.name"
            placeholder="请输入节点名称"
            maxlength="30"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="节点描述" prop="desc">
          <el-input
            v-model="nodeSetting.desc"
            placeholder="请输入节点描述"
            maxlength="30"
          >
          </el-input>
        </el-form-item>
      </el-form>
      <el-form
        @keyup.native.enter="settingSubmit"
        @submit.native.prevent
        v-show="drawerConf.type === drawerType.link"
        ref="linkSetting"
        :model="linkSetting"
      >
        <el-form-item label="连线描述" prop="desc">
          <el-input v-model="linkSetting.desc" placeholder="请输入连线描述">
          </el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="drawerConf.cancel"> 取 消 </el-button>
        <el-button type="primary" @click="settingSubmit"> 确 定 </el-button>
      </span>
    </el-dialog> -->
  </div>
</template>

<script>
import iconTag from './iconTag';
import superFlow from './indexProto';
import panelLeft from './panelLeft';

import panelRight from './panelRight';
import { deepClone, localOrigin, NewCoordinate } from './utils';

const drawerType = {
  node: 0,
  link: 1,
};

export default {
  name: 'flowChat',
  components: {
    iconTag,
    superFlow,
    panelLeft,
    panelRight,
  },
  props: {
    nodeItemList: {
      type: Array,
      default: () => [],
    },
    linkList: {
      type: Array,
      default: () => [],
    },
    nodeList: {
      type: Array,
      default: () => [],
    },
    height: {
      type: String,
      default: '600px',
    },
    // graphMenu: {
    //   type: Array,
    //   default: () => [],
    // },
  },
  data() {
    return {
      MovePalette: 0,
      fullscreenLoading: false,

      styleSelection: [],
      curScale: 1,
      msgSetting: 'node', // 判断现在设置哪个属性
      // nodeList: [],
      // linkList: [],
      drawerType,
      drawerConf: {
        title: '',
        visible: false,
        type: null,
        info: null,
        open: (type, info) => {
          const conf = this.drawerConf;
          conf.visible = true;
          conf.type = type;
          conf.info = info;
          if (conf.type === drawerType.node) {
            conf.title = '节点';
            // 编辑文字

            if (this.$refs.panelRight.$refs.nodeSetting) this.$refs.panelRight.$refs.nodeSetting.resetFields();
            Object.keys(this.nodeSetting).forEach((key) => {
              this.$set(this.nodeSetting, key, info.meta[key]);
            });
          } else {
            conf.title = '连线';
            if (this.$refs.panelRight.$refs.linkSetting) this.$refs.panelRight.$refs.linkSetting.resetFields();
            this.$set(
              this.linkSetting,
              'desc',
              info.meta ? info.meta.desc : '',
            );
          }
        },
        cancel: () => {
          this.drawerConf.visible = false;
          if (this.drawerConf.type === drawerType.node) {
            this.$refs.panelRight.$refs.nodeSetting.clearValidate();
          } else {
            this.$refs.panelRight.$refs.linkSetting.clearValidate();
          }
        },
      },
      linkSetting: {
        desc: '',
      },
      nodeSetting: {
        name: '',
        desc: '',
        shape: '',
      },

      dragConf: {
        isDown: false,
        isMove: false,
        offsetTop: 0,
        offsetLeft: 0,
        clientX: 0,
        clientY: 0,
        ele: null,
        info: null,
      },
      // 节点属性
      // nodeItemList: [
      //   {
      //     meta: {
      //       label: "开始",
      //       name: "开始",
      //       type: "start",
      //     },
      //   },
      //   {
      //     meta: {
      //       label: "结束",
      //       name: "结束",
      //       type: "end",
      //       shape: "ellipse",
      //     },
      //   },
      //   {
      //     meta: {
      //       label: "任务",
      //       name: "任务",
      //       type: "task",
      //       shape: "diamond",
      //     },
      //   },
      //   {
      //     meta: {
      //       label: "完成",
      //       name: "完成",
      //       type: "finish",
      //       shape: "circle",
      //     },
      //   },
      // ],
      // 右键菜单
      graphMenu: [
        [
          // {
          //   // 选项 label
          //   label: "开始",
          //   // 选项是否禁用
          //   disable(graph) {
          //     return !!graph.nodeList.find((node) => node.meta.label === "1");
          //   },
          //   // 选项选中后回调函数
          //   selected(graph, coordinate) {
          //     graph.addNode({
          //       coordinate: NewCoordinate(coordinate),
          //       meta: {
          //         label: "开始",
          //         name: "开始",
          //         type: "start",
          //       },
          //     });
          //   },
          // },
          // {
          //   label: "结束",
          //   selected(graph, coordinate) {
          //     graph.addNode({
          //       coordinate: NewCoordinate(coordinate),
          //       meta: {
          //         label: "结束",
          //         name: "结束",
          //         type: "end",
          //         shape: "ellipse",
          //       },
          //     });
          //   },
          // },
          // {
          //   label: "任务",
          //   selected(graph, coordinate) {
          //     graph.addNode({
          //       coordinate: NewCoordinate(coordinate),
          //       meta: {
          //         label: "任务",
          //         name: "任务",
          //         type: "task",
          //         shape: "diamond",
          //       },
          //     });
          //   },
          // },
          // {
          //   label: "完成",
          //   selected(graph, coordinate) {
          //     // 传入宽高可自定义大小
          //     graph.addNode({
          //       coordinate: NewCoordinate(coordinate),
          //       meta: {
          //         label: "完成",
          //         name: "完成",
          //         type: "finish",
          //         shape: "circle",
          //       },
          //     });
          //   },
          // },
        ],
        // 分组可以出一条线
        // [
        // ],
        [
          /*
          @author&Email: YanZhiWei  1211428762@qq.com
          TODO: 待优化，这个功能暂时没有
          @date: 2020-10-29
          */
          // {
          //   label: "全选",
          //   selected: (graph) => {
          //     graph.selectAll();
          //   },
          // },
          {
            label: '打印数据',
            selected: (graph, coordinate) => {
              this.$emit(
                'get-pro-data',
                JSON.stringify(graph.toJSON(), null, 2),
              );
              // console.log(JSON.stringify(graph.toJSON(), null, 2));
            },
          },
        ],
      ],
      nodeMenu: [
        [
          {
            label: '删除',
            selected: (node) => {
              node.remove();
            },
          },
          // {
          //   label: "编辑",
          //   selected: (node, graph) => {
          //     console.log(node, graph);
          //     this.drawerConf.open(drawerType.node, node);
          //   },
          // },
        ],
      ],
      linkMenu: [
        [
          {
            label: '删除',
            selected: (link) => {
              link.remove();
            },
          },
          // {
          //   label: "编辑",
          //   selected: (link) => {
          //     this.drawerConf.open(drawerType.link, link);
          //   },
          // },
        ],
      ],
      linkBaseStyle: {
        color: '#666666', // line 颜色
        hover: '#000', // line hover 的颜色
        textColor: '#666666', // line 描述文字颜色
        textHover: '#333', // line 描述文字 hover 颜色
        font: '16px Arial', // line 描述文字 字体设置 参考 canvas font
        dotted: false, // 是否是虚线
        lineDash: [4, 4], // 虚线时生效
        background: 'rgba(255,255,255,0.6)', // 描述文字背景色
      },
      fontList: ['14px Arial', 'italic small-caps bold 12px arial'],
    };
  },
  created() {
    // 将左侧边的流程块加到 右键菜单
    for (const [index, item] of this.nodeItemList.entries()) {
      const graphMenuItem = {
        label: null,
        selected: null,
      };
      graphMenuItem.label = item.meta.label;
      graphMenuItem.selected = function (graph, coordinate) {
        graph.addNode({
          coordinate: NewCoordinate(coordinate),
          meta: item.meta,
        });
      };
      this.graphMenu[0].push(graphMenuItem);
    }

    // console.log(this.graphMenu);
  },
  mounted() {
    //  loading
    // this.fullscreenLoading = true;
    // setTimeout(() => {
    //   this.fullscreenLoading = false;
    // }, 2000);
    // 滚轮
    // this.$refs.flowContainer.style.transform = "scale(1)";
    // this.$refs.flowContainer.style.transition = "all .1s";
    // 滚动事件用得到
    // window.addEventListener("DOMMouseScroll", this.handleScroll, false);
    // window.onmousewheel = document.onmousewheel = this.handleScroll;
    document.addEventListener('mousemove', this.docMousemove);
    document.addEventListener('mouseup', this.docMouseup);
    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('mousemove', this.docMousemove);
      document.removeEventListener('mouseup', this.docMouseup);
    });
  },
  watch: {
    MovePalette(val) {
      this.$refs.superFlow.MovePalette = val;
    },
  },

  methods: {
    //  console.log(this.$refs.superFlow.graph.selectAll);
    handleScroll(event) {
      // this.$refs.superFlow.graph.selectAll();
      let delta = 0;
      if (!event) event = window.event;
      if (event.wheelDelta) {
        delta = event.wheelDelta / 120;
        if (window.opera) delta = -delta;
      } else if (event.detail) {
        delta = -event.detail / 3;
      }
      // 滚轮放缩  TODO 下版本可添加
      // let allNode = this.$refs.flowContainer.getElementsByClassName(
      //   "super-flow__node"
      // );
      // let allLine = this.$refs.flowContainer.getElementsByClassName(
      //   "super-flow__line"
      // );
      // if (allNode[0]) {
      //   let curScale =
      //     allNode[0].style.transform.split("(")[1].split(")")[0] * 1;
      //   let curScale2 =
      //     allLine[0].style.transform.split("(")[1].split(")")[0] * 1;

      //   // console.log(curScale);
      //   // delta 1 鼠标向上,-1向下
      //   if (delta === 1) {
      //     curScale += 0.01;
      //     curScale2 -= 0.01;
      //   } else if (delta === -1) {
      //     curScale -= 0.01;
      //     curScale2 += 0.01;
      //   }
      //   Array.from(allNode).forEach(
      //     (cur) => (cur.style.transform = "scale(" + curScale + ")")
      //   );
      //   Array.from(allLine).forEach(
      //     (cur) => (cur.style.transform = "scale(" + curScale2 + ")")
      //   );
      //   console.log();

      //   console.log(curScale2);
      //   // this.$refs.flowContainer.style.transform = "scale(" + curScale + ")";
      //   this.curScale = curScale;
    },

    flowNodeClick(meta) {
      console.log(this.$refs.superFlow.graph, meta);
    },
    linkStyle(link) {
      return {
        // hover: '#FF00FF'
      };
    },
    linkDesc(link) {
      return link.meta ? link.meta.desc : '';
    },
    settingSubmit() {
      const conf = this.drawerConf;
      if (!this.drawerConf.info) return;
      if (this.drawerConf.type === drawerType.node) {
        if (!conf.info.meta) conf.info.meta = {};
        // 修改完是否清空

        if (!this.nodeSetting.name) return;
        Object.keys(this.nodeSetting).forEach((key) => {
          this.$set(conf.info.meta, key, this.nodeSetting[key]);
        });
        this.$refs.panelRight.$refs.nodeSetting.resetFields();
      } else {
        if (!conf.info.meta) conf.info.meta = {};
        Object.keys(this.linkSetting).forEach((key) => {
          this.$set(conf.info.meta, key, this.linkSetting[key]);
        });

        this.$refs.panelRight.$refs.linkSetting.resetFields();
      }
      conf.visible = false;
    },
    // 抽离左侧
    nodeItemMouseDown(evt, info) {
      const { clientX, clientY, currentTarget } = evt;
      this.currentNodeName = info.meta.name;
      const { top, left } = evt.currentTarget.getBoundingClientRect();
      const conf = this.dragConf;
      const ele = currentTarget.cloneNode(true);
      Object.assign(this.dragConf, {
        offsetLeft: clientX - left,
        offsetTop: clientY - top,
        clientX,
        clientY,
        info,
        ele,
        isDown: true,
      });
      ele.style.position = 'fixed';
      ele.style.margin = '0';
      ele.style.top = `${clientY - conf.offsetTop}px`;
      ele.style.left = `${clientX - conf.offsetLeft}px`;
      this.$el.appendChild(this.dragConf.ele);
    },
    nodeMouseUp(evt) {
      evt.preventDefault();
    },
    // 点击事件
    nodeClick(node) {
      // console.log(node, this.drawerConf);
      this.msgSetting = 'node';
      this.drawerConf.info = node;
      this.drawerConf.type = 0;
      this.drawerConf.title = '节点';
      this.nodeSetting.name = node.meta.name;
      this.nodeSetting.desc = node.meta.desc || '';
      this.nodeSetting.shape = node.meta.shape || 'rect';
    },
    linkClick(link) {
      // console.log(link);
      if (!link) {
        return;
      }
      this.msgSetting = 'link';
      this.drawerConf.info = link;
      this.drawerConf.type = 1;
      this.drawerConf.title = '连线';
      this.linkSetting.desc = link.meta ? link.meta.desc : '';
    },
    docMousemove({ clientX, clientY }) {
      const conf = this.dragConf;
      // 移动坐标

      if (conf.isMove) {
        conf.ele.style.top = `${clientY - conf.offsetTop}px`;
        conf.ele.style.left = `${clientX - conf.offsetLeft}px`;
        // console.log(conf.ele.style.left,conf.ele.style.top, );
      } else if (conf.isDown) {
        // 鼠标移动量大于 5 时 移动状态生效
        conf.isMove = Math.abs(clientX - conf.clientX) > 5
          || Math.abs(clientY - conf.clientY) > 5;
      }
    },
    docMouseup({ clientX, clientY }) {
      const conf = this.dragConf;
      conf.isDown = false;
      if (conf.isMove) {
        const {
          top,
          right,
          bottom,
          left,
        } = this.$refs.flowContainer.getBoundingClientRect();

        // 判断鼠标是否进入 flow container
        if (
          clientX > left
          && clientX < right
          && clientY > top
          && clientY < bottom
        ) {
          // 获取拖动元素左上角相对 super flow 区域原点坐标
          const coordinate = this.$refs.superFlow.getMouseCoordinate(
            clientX - conf.offsetLeft + localOrigin()[0],
            clientY - conf.offsetTop + localOrigin()[1],
          );

          // 添加节点
          // 添加节点时深拷贝
          const newConf = deepClone(conf);
          newConf.info.meta.name = newConf.info.meta.label;

          this.$refs.superFlow.addNode({
            coordinate,
            ...newConf.info,
          });
        }
        conf.isMove = false;
      }
      if (conf.ele) {
        conf.ele.remove();
        conf.ele = null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.VflowChat {
  display: flex;
  padding: 10px;
  justify-content: space-around;
}

.ellipsis {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-wrap: break-word;
}

.super-flow-demo1 {
  overflow: hidden;
  margin-top: 20px;
  width: 100%;
  height: 600px;
  background-color: #f5f5f5;
  $list-width: 200px;

  > .flow-container {
    width: 100%;
    float: left;
    height: 100%;
    overflow: hidden;
  }

  .super-flow__node {
    .flow-node {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      text-align: center;
      position: relative;
      padding: 0 3px;
      font-size: 14px;
    }
  }
}
</style>
