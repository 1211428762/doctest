guide
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
 <el-button type="primary">主要按钮</el-button>
留下只出现一次的元素
# 测试案例1
---


  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="demo-button">
        <div>
          <el-button>默认按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="info">信息按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
          <el-button type="danger">危险按钮</el-button>
        </div>
      </div>
    </template>
    <script>
        export default {
            component:{
                elButton
            } 
        }
    </script>
  </highlight-code>

 


<!-- ::: demo 使用 v-model 与 Vue 实例中的一个变量进行双向绑定，绑定的变量需要是字符串类型。
``` html
<template>
  <color-picker size="mini" v-model="color"></color-picker>
</template>

<script>
  export default {
    data() {
      return {
        color: '#409EFF'
      }
    }
  };
</script>
``` 
::: -->