<template>
  <div
    class="super-flow"
    ref="flow-canvas"
    @contextmenu.prevent.stop="contextmenu"
  >
    <div class="dragBg" ref="dragBg" :style="dragStyle">
      <graph-line
        v-if="temEdgeConf.visible"
        :padding="linkPadding"
        :graph="graph"
        :origin="graph.origin"
        :link="temEdgeConf.link"
        :mouseonLink.sync="graph.mouseonLink"
        :link-base-style="linkBaseStyle"
        :link-desc="linkDesc"
        :link-style="linkStyle"
        @get-tar-link="lineClick"
      >
      </graph-line>

      <graph-line
        v-for="(edge, idx) in graph.linkList"
        :index="idx"
        :padding="linkPadding"
        :graph="graph"
        :link="edge"
        :key="edge.key"
        :mouseonLink.sync="graph.mouseonLink"
        :link-base-style="linkBaseStyle"
        :link-desc="linkDesc"
        :link-style="linkStyle"
        @get-tar-link="lineClick"
      >
      </graph-line>

      <mark-line
        v-if="moveNodeConf.isMove && hasMarkLine"
        :width="clientWidth"
        :height="clientHeight"
        :mark-color="markLineColor"
        :markLine="moveNodeConf.markLine"
      >
      </mark-line>

      <graph-node
        ref="graphNodeRef"
        v-for="(node, idx) in graph.nodeList"
        :index="idx"
        :node="node"
        :graph="graph"
        :mouseonNode.sync="graph.mouseonNode"
        :origin="graph.origin"
        :key="node.key"
        :paletteSize="paletteSize"
        :is-move="node === moveNodeConf.node"
        :is-tem-edge="temEdgeConf.visible"
        :node-intercept="nodeIntercept(node)"
        :line-drop="linkAddable"
        :node-drop="draggable"
        @node-mousedown="nodeMousedown"
        @node-mouseenter="nodeMouseenter"
        @node-mouseleave="nodeMouseleave"
        @node-mouseup="nodeMouseup"
        @side-mousedown="sideMousedown"
        @node-contextmenu="nodeContextmenu"
        @node-click="nodeClick"
      >
        <template v-slot="{ meta }">
          <slot name="node" :meta="meta"> </slot>
        </template>
      </graph-node>

      <graph-menu
        :visible.sync="menuConf.visible"
        :graph="graph"
        :origin="menuConf.origin"
        :position="menuConf.position"
        :list="menuConf.list"
        :source="menuConf.source"
        ref="subMenu"
      >
        <template v-slot="{ item }">
          <slot name="menuItem" :item="item"> </slot>
        </template>
      </graph-menu>
    </div>
    <div
      :class="['toDragg', MovePalette == 1 ? 'plusIndex' : '']"
      @mousedown.prevent.stop="dragDown"
      @mouseup.prevent.stop="dragUp"
      @mousemove.prevent.stop="dragMove"
      ref="toDragg"
    ></div>
    <div
      class="select-all__mask"
      ref="selectAllMask"
      tabindex="-1"
      :style="maskStyle"
      @blur="graph.graphSelected = false"
      v-show="graph.graphSelected"
      @mousedown="selectAllMaskMouseDown"
      @contextmenu.prevent.stop
    ></div>
  </div>
</template>

<script>
import Graph from "./Graph";
import GraphMenu from "./menu";
import GraphNode from "./node";
import GraphLine from "./link";
import MarkLine from "./markLine";

import {
  getOffset,
  isIntersect,
  isBool,
  isFun,
  vector,
  debounce,
  arrayReplace,
  deepClone,
  localOrigin,
  prevOrigin,
  NewCoordinate,
} from "./utils";

export default {
  name: "super-flow",
  props: {
    draggable: {
      type: Boolean,
      default: true,
    },
    linkAddable: {
      type: Boolean,
      default: true,
    },
    linkEditable: {
      type: Boolean,
      default: true,
    },
    hasMarkLine: {
      type: Boolean,
      default: true,
    },
    linkDesc: {
      type: [Function, null],
      default: null,
    },
    linkStyle: {
      type: [Function, null],
      default: null,
    },
    linkBaseStyle: {
      type: Object,
      default: () => ({}),
    },
    markLineColor: {
      type: String,
      default: "#55abfc",
    },
    origin: {
      type: Array,
      default: () => [1000, 1000],
    },
    nodeList: {
      type: Array,
      default: () => [],
    },
    linkList: {
      type: Array,
      default: () => [],
    },
    graphMenu: {
      type: Array,
      default: () => [],
    },
    nodeMenu: {
      type: Array,
      default: () => [],
    },

    linkMenu: {
      type: Array,
      default: () => [],
    },
    linkPadding: {
      type: Number,
      default: 50,
    },
    enterIntercept: {
      type: Function,
      default: () => true,
    },
    outputIntercept: {
      type: Function,
      default: () => true,
    },
  },
  data() {
    return {
      disXY: [], // 相对元素坐标
      originChange: [], // origin变化了多少
      MovePalette: 0,
      isDrag: false,
      dragStyle: { left: "", top: "" },
      targetLine: "",
      paletteSize: [0, 0],
      graph: new Graph({
        width: this.width,
        height: this.height,
        origin: this.origin,
      }),
      originForNode: [],
      menuConf: {
        visible: false,
        position: [0, 0],
        source: null,
        list: [],
        origin: [],
      },
      moveNodeConf: {
        isMove: false,
        node: null,
        offset: null,
        verticalList: [],
        horizontalList: [],
        markLine: [],
      },
      moveAllConf: {
        isMove: false,
        downPosition: [0, 0],
      },
      temEdgeConf: {
        visible: false,
        link: null,
      },
      loaded: false,
      clientWidth: 0,
      clientHeight: 0,
    };
  },
  components: {
    GraphMenu,
    GraphNode,
    GraphLine,
    MarkLine,
  },
  computed: {
    maskStyle() {
      const { top, right, bottom, left } = this.graph.maskBoundingClientRect;

      return {
        // width: `${right - left}px`,
        // height: `${bottom - top}px`,
        // top: `${top + localOrigin()[1]}px`,
        // left: `${left + localOrigin()[0]}px`,
      };
    },
  },
  created() {},
  mounted() {
    this.setOrigin();
    this.initPalette();
    // 实际画板大小,用于限定左右边际
    window.onresize = debounce(this.initPalette, 100);

    document.addEventListener("mouseup", this.docMouseup);
    document.addEventListener("mousemove", this.docMousemove);
    this.$once("hook:beforeDestroy", () => {
      document.removeEventListener("mouseup", this.docMouseup);
      document.removeEventListener("mousemove", this.docMousemove);
    });
    this.$nextTick(() => {
      this.graph.initNode(this.nodeList);
      this.graph.initLink(this.linkList);
    });
  },
  methods: {
    setOrigin() {
      window.localStorage.setItem("CURORIGIN", "0,0");
      window.localStorage.setItem("PREVORIGIN", "0,0");
    },
    dragDown(evt) {
      this.isDrag = true;
      const odiv = this.$refs.toDragg;
      this.disXY[0] = evt.clientX - odiv.offsetLeft;
      this.disXY[1] = evt.clientY - odiv.offsetTop;
      this.originChange[0] = evt.clientX;
      this.originChange[1] = evt.clientY;
      this.originChange[2] = this.origin;
      // this.originForNode = deepClone(localOrigin());
      // console.log(this.originForNode,"我是之前",localOrigin(),"之后");

      // localStorage.setItem("PREVORIGIN", this.originForNode);
    },
    dragMove(evt) {
      if (this.isDrag) {
        const odiv = this.$refs.toDragg;
        const oldDiv = this.$refs.dragBg;
        let left = evt.clientX - this.disXY[0];
        let top = evt.clientY - this.disXY[1];
        // 拖拽画布不能露出白色部分,不越界

        if (left > 0) {
          left = 0;
        }
        if (top > 0) {
          top = 0;
        }
        // 移动当前元素
        odiv.style.left = `${left}px`;
        odiv.style.top = `${top}px`;
        oldDiv.style.left = `${left}px`;
        oldDiv.style.top = `${top}px`;
      }
    },
    // 更改原点,拖拽画布的起点
    dragUp(evt) {
      const odiv = this.$refs.toDragg;

      this.isDrag = false;
      this.graph.graphSelected = false;
      // 起初更改origin
      // this.$set(this.origin, 0, -odiv.offsetLeft);
      // this.$set(this.origin, 1, -odiv.offsetTop);

      localStorage.setItem("CURORIGIN", [-odiv.offsetLeft, -odiv.offsetTop]);

      // this.$refs.subMenu.updateOrigin(this.origin);
      // this.$refs.subMenu.prevOrigin(this.originForNode);
    },

    // FIXME暂时不知道用处,全选
    selectPalette() {
      this.$refs.superFlow.graph.selectAll;
      this.graph.selectAll();
      console.log(this.graph);
    },
    lineClick(line) {
      this.$emit("get-tar-link", line);
    },
    // 用于获取画布大小,用于限制图块不溢出边界
    initPalette() {
      // this.paletteSize = [
      //   this.$refs['flow-canvas'].clientWidth,
      //   this.$refs['flow-canvas'].clientHeight,
      // ];
    },

    initMenu(menu, source) {
      return menu
        .map((subList) =>
          subList
            .map((item) => {
              let disable;
              let hidden;

              if (isFun(item.disable)) {
                disable = item.disable(source);
              } else if (isBool(item.disable)) {
                disable = item.disable;
              } else {
                disable = Boolean(item.disable);
              }

              if (isFun(item.hidden)) {
                hidden = item.hidden(source);
              } else if (isBool(item.hidden)) {
                hidden = item.hidden;
              } else {
                hidden = Boolean(item.hidden);
              }

              return {
                ...item,
                disable,
                hidden,
              };
            })
            .filter((item) => !item.hidden)
        )
        .filter((sublist) => sublist.length);
    },

    showContextMenu(position, list, source) {
      if (!list.length) return;

      this.$set(this.menuConf, "position", position);
      this.$set(this.menuConf, "list", list);
      this.$set(this.menuConf, "source", source);
      this.$set(this.menuConf, "origin", source.origin);
      this.menuConf.visible = true;
    },

    docMouseup(evt) {
      if (this.moveNodeConf.isMove) {
        evt.stopPropagation();
        evt.preventDefault();
      }

      this.moveNodeConf.isMove = false;
      this.moveNodeConf.node = null;
      this.moveNodeConf.offset = null;
      arrayReplace(this.moveNodeConf.markLine, []);

      this.temEdgeConf.visible = false;
      this.temEdgeConf.link = null;

      this.moveAllConf.isMove = false;
    },

    docMousemove(evt) {
      if (this.MovePalette === "1") {
        const a = 1;
        // FIXME选择移动画板时不触发其他事件
        return;
      }
      if (this.moveNodeConf.isMove) {
        this.moveNode(evt);
      } else if (this.temEdgeConf.visible) {
        this.moveTemEdge(evt);
      } else if (this.graph.graphSelected) {
        this.moveWhole(evt);
      } else if (this.linkEditable) {
        this.graph.dispatch(
          {
            type: "mousemove",
            evt,
          },
          true
        );
      }
    },

    moveNode(evt) {
      const distance = 10;
      const conf = this.moveNodeConf;

      const origin = this.graph.origin;

      const position = vector(conf.offset)
        .differ(getOffset(evt, this.$el))
        .minus(origin)
        .add([conf.node.width / 2, conf.node.height / 2]).end;
      // 实时将坐标更新
      NewCoordinate(position);
      if (this.hasMarkLine) {
        const resultList = [];
        conf.verticalList.some((vertical) => {
          const x = position[0];
          const result = vertical - distance < x && vertical + distance > x;

          if (result) {
            position[0] = vertical;
            vertical = Math.floor(vertical);
            vertical += origin[0];
            vertical += vertical % 1 === 0 ? 0.5 : 0;
            resultList.push([
              [vertical, 0],
              [vertical, this.clientHeight],
            ]);
          }
          return result;
        });
        conf.horizontalList.some((horizontal) => {
          const y = position[1];
          const result = horizontal - distance < y && horizontal + distance > y;
          if (result) {
            position[1] = horizontal;
            horizontal = Math.floor(horizontal);
            horizontal += origin[1];
            horizontal += horizontal % 1 === 0 ? 0.5 : 0;
            resultList.push([
              [0, horizontal],
              [this.clientWidth, horizontal],
            ]);
          }
          return result;
        });

        arrayReplace(conf.markLine, resultList);
      }
      conf.node.center = position;
    },
    // 改变起点,连线有动画
    moveTemEdge(evt) {
      this.temEdgeConf.link.movePosition = NewCoordinate(
        getOffset(evt, this.$el)
      );
    },

    moveWhole(evt) {
      if (this.moveAllConf.isMove) {
        const offset = vector(this.moveAllConf.downPosition).differ([
          evt.clientX,
          evt.clientY,
        ]).end;
        arrayReplace(
          this.graph.origin,
          vector(this.moveAllConf.origin).add(offset).end
        );
      }
    },
    linkClick() {
      this.$emit("get-tar-link", this.graph.mouseonLink);
      // console.log(this.graph.mouseonLink);
    },
    contextmenu(evt) {
      const mouseonLink = this.graph.mouseonLink;

      const position = getOffset(evt);

      let list;
      let source;
      // TODO 这里去掉线是否在线内,正常触发线点击事件
      // console.log( mouseonLink.isPointInLink(position),position);
      if (mouseonLink) {
        list = this.initMenu(this.linkMenu, mouseonLink);
        source = mouseonLink;
      } else {
        if (mouseonLink) this.graph.mouseonLink = null;
        list = this.initMenu(this.graphMenu, this.graph);
        source = this.graph;
      }
      this.showContextMenu(position, list, source);
    },

    nodeMousedown(node, offset) {
      if (this.draggable) {
        this.clientWidth = this.$el.clientWidth;
        this.clientHeight = this.$el.clientHeight;
        const verticalList = this.moveNodeConf.verticalList;
        const horizontalList = this.moveNodeConf.horizontalList;
        // 我修改了center
        const centerList = this.graph.nodeList
          .filter((item) => item !== node)
          .map((nodeParam) => NewCoordinate(nodeParam.center));

        arrayReplace(
          verticalList,
          [...new Set(centerList.map((center) => center[0]))].sort(
            (prev, next) => prev - next
          )
        );
        arrayReplace(
          horizontalList,
          [...new Set(centerList.map((center) => center[1]))].sort(
            (prev, next) => prev - next
          )
        );

        this.moveNodeConf.isMove = true;
        this.moveNodeConf.node = node;

        this.moveNodeConf.offset = offset;
      }
    },

    nodeMouseenter(evt, node, offset) {
      const link = this.temEdgeConf.link;

      if (this.enterIntercept(link.start, node, this.graph)) {
        link.end = node;
        link.endAt = offset;
      }
    },

    nodeMouseleave() {
      this.temEdgeConf.link.end = null;
    },

    nodeMouseup() {
      this.graph.addLink(this.temEdgeConf.link);
    },
    // 鼠标右键
    nodeContextmenu(evt, node) {
      const list = this.initMenu(this.nodeMenu, node);
      if (!list.length) return;
      this.$set(this.menuConf, "position", getOffset(evt, this.$el));
      this.$set(this.menuConf, "list", list);
      this.$set(this.menuConf, "source", node);
      this.menuConf.visible = true;
    },
    // 单击事件
    nodeClick(evt, node) {
      const list = this.initMenu(this.nodeMenu, node);
      // console.log(evt, node);
      this.$emit("get-tar-node", node);
    },
    // 开始画线
    sideMousedown(evt, node, startAt) {
      if (this.linkAddable) {
        const link = this.graph.createLink({
          start: node,
          startAt,
        });
        link.movePosition = NewCoordinate(getOffset(evt, this.$el));
        this.$set(this.temEdgeConf, "link", link);
        this.temEdgeConf.visible = true;
      }
    },

    nodeIntercept(node) {
      return () => this.outputIntercept(node, this.graph);
    },

    menuItemSelect() {
      this.menuConf.visible = false;
    },

    selectAllMaskMouseDown(evt) {
      this.moveAllConf.isMove = true;
      this.moveAllConf.origin = [...this.graph.origin];
      this.moveAllConf.downPosition = [evt.clientX, evt.clientY];
    },

    selectedAll() {
      this.graph.selectAll();
    },

    toJSON() {
      return this.graph.toJSON();
    },

    getMouseCoordinate(clientX, clientY) {
      const offset = getOffset(
        {
          clientX,
          clientY,
        },
        this.$el
      );
      return vector(offset).minus(this.graph.origin).end;
    },

    addNode(options) {
      return this.graph.addNode(options);
    },
  },
  // FIXME 读懂watch
  watch: {
    "graph.graphSelected": function () {
      if (this.graph.graphSelected) {
        this.$nextTick(() => {
          this.$refs.selectAllMask.focus();
        });
      }
    },
    "graph.mouseonLink": function () {
      if (this.graph.mouseonLink) {
        document.body.style.cursor = "pointer";
      } else {
        document.body.style.cursor = "";
      }
    },
    origin() {
      this.graph.origin = this.origin || [];
    },
    nodeList() {
      this.graph.initNode(this.nodeList);
    },
    linkList() {
      this.graph.initLink(this.linkList);
    },
  },

  install(Vue) {
    Vue.component(this.name, this);
  },
};
</script>

<style lang="scss" scoped>
.super-flow {
  font-family: Apple System, "SF Pro SC", "SF Pro Display", "Helvetica Neue",
    Arial, "PingFang SC", "Hiragino Sans GB", STHeiti, "Microsoft YaHei",
    "Microsoft JhengHei", "Source Han Sans SC", "Noto Sans CJK SC",
    "Source Han Sans CN", sans-serif;

  position: relative;
  background-color: transparent;
  width: 100%;
  height: 100%;
  // overflow: hidden;

  > .select-all__mask {
    background-color: rgba(85, 175, 255, 0.1);

    border: 1px dashed #55abfc;
    position: absolute;
    background: rgba(85, 175, 255, 0.1) !important;
    cursor: move;
    outline: none;
    z-index: 100;
  }
}
.dragBg {
  position: absolute;
  right: -1000px;
  bottom: -1000px;
  left: -1000px;
  top: -1000px;
  transition: transform 0.5s ease 0s, transform-origin 0.5s ease 0s;
  background-image: linear-gradient(90deg, #ebebeb 5%, transparent 0),
    linear-gradient(#ebebeb 5%, transparent 0);
  background-size: 1rem 1rem;
}
.toDragg {
  cursor: grab;
  position: absolute;
  right: -1000px;
  bottom: -1000px;
  left: -1000px;
  top: -1000px;
  z-index: -2;
  transition: transform 0.5s ease 0s, transform-origin 0.5s ease 0s;
  &.plusIndex {
    z-index: 1;
  }
}
</style>
