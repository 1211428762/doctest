
#### 1.判断元素是否重复

先遍历数组或字符串,判断indexOf()和lastIndexOf()是否相等

```js
 var arr = [1, 2, 3, 1, 3, 5, 2, 4, 6]
        var str = "hello world evening"
        var newArr = []
        var newStr = ""

        for (let index = 0; index < arr.length; index++) {
            let item = arr[index]
            newArr.push(arr.indexOf(item) == arr.lastIndexOf(item) ?  arr[index]: "")
        }
        console.log(newArr);
        for (let index = 0; index < str.length; index++) {
            let item = str.charAt(index)
            newStr += str.indexOf(item) == str.lastIndexOf(item) ?  str.charAt(index):""

        }
        console.log(newStr);
```

留下只出现一次的元素

#### 2.chrome调试工具

修改元素属性值

shift +↑可以加10

点击 + 可以添加一个类

点击 ... 可以给元素添加 字体色,背景色方便测试

右建点元素可以选择添加伪类

对着元素点击H键可以将元素设为占位不可见

右键元素点击`store as global var `可获取元素的临时变量

断点调试,在Source栏里选择对应的js文件,在对应函数处加断点,使用step进行测试

#### 3.开发规范

基本类型数据直接赋值

引用类型传递引用地址

幂运算 2**10

#### 4.float导致的不占位

可以在浮动元素下面加clear:both保持正常的占位

#### 5.外边距合并问题

两个相邻的盒子使用外边距时会出现外边距合并,即边距只取两者最大值

可以创建一个无边距的父级div

```html
<style>	
    .blue, .red-inner {
			  height: 50px;
			  margin: 10px 0;
			}
			
			.blue {
			  background: blue;
			}
			
			.red-outer {
			  overflow: hidden;
			  background: red;
			}
</style>
<div class="blue"></div>
			<div class="red-outer">
			  <div class="red-inner">red inner</div>
			</div>

```

#### 6.点击元素外的地方关闭该元素(单个元素好用)

点击任意地方都关闭该元素

```js
$(document).click(function(){
$("#target").hide();
});
```

target也属于document，点击target也会让自己隐藏，显然这不是想要的，这时候要阻止冒泡事件，即document的事件对target无效

```js
$("#target").click(function(e){
e.stopPropagation();
});
```

#### 7.绝对定位后,父级元素定义

元素在绝对定位后,寻找父级元素不再遵循原本的HTML结构即最近的上一级, 而是已经进行定位的最近元素,如果此时使用width:100%,也说按照定位的最近元素来继承

```css
	.grandfather {
			width: 300px;
			height: 18.75rem;
			background: pink;
			position: relative;
		}

		.father {
			width: 200px;
			height: 6.25rem;
			background: #00BFFF;
		}

		.son {
			width: 100%;
			/* width: 50px; */
			height: 3.125rem;
			background: red;
			position: absolute;
		}
```

```vue
<div class="grandfather">
			爷爷
			<div class="father">
				爸爸
				<div class="son">
					儿子
				</div>
			</div>
		</div>
```


此时爷爷div相对定位,儿子绝对定位,导致儿子的父级元素变成爷爷div此时的width:100% 变成300px

#### 8.不定高的元素过渡效果

```css
<style type="text/css">
			.outer {
				width: 1000px;
				margin: 0 auto;
			}
			.outer>li {
				float: left;
			}
			.outer>li:hover .inner {
				max-height: 300px;
			}
			.inner {
				overflow: hidden;
				max-height: 0;
				transition: all .5s;
			}
		</style>
```

```html
	<nav>
			<ul class="outer">
				<li>标题一
					<ul class="inner">
						<li>二级菜单1</li>
						<li>二级菜单2</li>
						<li>二级菜单3</li>
					</ul>
				</li>
				<li>标题一
					<ul class="inner">
						<li>二级菜单1</li>
						<li>二级菜单2</li>
						<li>二级菜单3</li>
					</ul>
				</li>
			</ul>
		</nav>
```

#### 9.锚点链接

用id索引

```html
 <a href="#link">点我跳转</a>
 <div id="link">跳转到这里</div>
```

#### 10.写静态网页总体思路（不断更新）

- 目前，网页主体是1200px宽，设置固定宽,加margin:0 auto 保障内容不折行
- 遇到导航栏，可以把li 设置float：left ，下面的部分可以使用clear：both ，让上面的部分占（不影响布局）
- 关于页面头部,尾部抽取,可以将公共的html代码复制加到js "document.writeln(  加到这 )",再用script标签引入到页面(目前只是静态,无法嵌入变量)

#### 11.导航栏文字间的细线

边框(适用于细线大于等于文字的高度)

```css
li:not(:first-child){
			border-left: 1px solid #000000;
		}
```

伪元素（）

```css
		li:not(:first-child)::before{
				content: "";
				width: 1px;
				height: auto;
				position: absolute;
				right: 0;
			}
```

span

```css
span {margin: 10px 6px 0px 6px;
    height: 16px;
    width: 0px;
    overflow: hidden;
    vertical-align: middle;
    border-right: 1px #e5e5e5 solid;}
```

直接键入“|”左右的元素用padding保持距离，也可以实现效果，颜色会继承父级的color属性

```yaml
home: true
heroImage: /hero.png
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
```

