# 表单校验规则

**注:校验函数参数 格式为一下两种**

1. 特殊规则 _param(特殊参数)，message，trigger_(如几位小数精度，大/小于 1)
2. 普通规则 message，trigger (如邮箱，手机号)

message 默认值为多语言提示，位于 src/i18n/page/validator 下，
trigger 默认["change","blur"]

_rules.ts 文件在 utils 下_

## 常规规则校验

### 正整数校验(int)

```js
//配置案例
import rules from "@/utils/rules.ts"
{
prop:"test",
model:"test",
label:"test",
rules:[rules.int("module.tip_error",["change","blur"])] //默认有提示,可不传
    // 单个规则可单传函数 rules:rules.int()
     //校验函数返回值 格式  {trigger:xxx,message:xxx,validator:xxx},所以也可以用扩展运算符覆盖错误提示,触发方式,所有校验函数通用
 // rules:{...rules.int(),message:"xxx",trigger:xxx}
}
```

### 正数校验(plusNumber)

```js
//配置案例
import rules from "@/utils/rules.ts"
{
prop:"test",
model:"test",
label:"test",
rules:[rules.plusNumber()]
}
```

### 非零校验(nonzero)

```js
//配置案例
import rules from "@/utils/rules.ts"
{
prop:"test",
model:"test",
label:"test",
rules:[rules.nonzero()]
}
```

### 数字校验(number)

```js
//配置案例
import rules from "@/utils/rules.ts"
{
prop:"test",
model:"test",
label:"test",
rules:[rules.number()]
}
```

### 小数/只能输入小数 校验(float)

```js
//配置案例
import rules from "@/utils/rules.ts"
{
prop:"test",
model:"test",
label:"test",
rules:[rules.float()]
}
```

### url 校验(url)

```js
//配置案例
import rules from "@/utils/rules.ts"
{
prop:"test",
model:"test",
label:"test",
rules:[rules.url()]
}
```

### ip 校验(ip)

```js
//配置案例
import rules from "@/utils/rules.ts"
{
prop:"test",
model:"test",
label:"test",
rules:[rules.ip()]
}
```

### 身份证号校验(identity)

```js
//配置案例
import rules from "@/utils/rules.ts"
{
prop:"test",
model:"test",
label:"test",
rules:[rules.identity()]
}
```

### 邮政编码校验(postal)

```js
//配置案例
import rules from "@/utils/rules.ts"
{
prop:"test",
model:"test",
label:"test",
rules:[rules.postal()]
}
```

### 邮箱校验(email)

```js
//配置案例
import rules from "@/utils/rules.ts"
{
prop:"test",
model:"test",
label:"test",
rules:[rules.email()]
}
```

### 手机号 校验(mobile)

```js
//配置案例
import rules from "@/utils/rules.ts"
{
prop:"test",
model:"test",
label:"test",
rules:[rules.mobile()]
}
```

### 座机号 校验(phone)

```js
//配置案例
import rules from "@/utils/rules.ts"
{
prop:"test",
model:"test",
label:"test",
rules:[rules.phone()]
}
```

### 手机座机号 校验(phoneAll)

```js
//配置案例
import rules from "@/utils/rules.ts"
{
prop:"test",
model:"test",
label:"test",
rules:[rules.phoneAll()]
}
```

## 特殊规则校验

注特殊规则 参数前几位是约束规则（一般只有一个规则），若有多个规则按顺序传入，最后两个参数为 校验 message，和触发方式 trigger（一般取默认值）

### 空校验(required)

```js
//配置案例
import rules from "@/utils/rules.ts"
{
prop:"test",
model:"test",
label:"test",
rules:[rules.required(Boolean)] //是否必填。默认必填

```

### 字符串最大长度(maxlength)

```js
//配置案例
import rules from "@/utils/rules.ts"
{
prop:"test",
model:"test",
label:"test",
rules:[rules.maxlength(Number,Boolean)]//输入框最大长度， 第二个参数是否启用多语言长度校验，默认为否

```

### 字符串最小长度(minlength)

```js
//配置案例
import rules from "@/utils/rules.ts"
{
prop:"test",
model:"test",
label:"test",
rules:[rules.minlength(Number,Boolean)]//输入框最小长度， 第二个参数是否启用多语言长度校验，默认为否

```

### 数字精度校验 (precision(number))

```js
//配置案例
import rules from "@/utils/rules.ts"
{
prop:"test",
model:"test",
label:"test",
rules:[rules.precision(n)] //n位小数校验
}
```

### 数字范围校验(numCompare("gt/gte/lt/lte"+number))

```js
//配置案例
import rules from "@/utils/rules.ts"
 {
   model: 'title',
   prop: 'title',
   label: '数字范围校验',
   rules: [rules.numCompare('gte1/gt1/lt1/lte1')],  //单范围校验数字 大于等于/大于/小于/小于等于1
   //rules: [rules.numCompare(['gt1','lte100'])],  //区间校验数字 大于1 且小于等于100, 搭配方式自由组合共四种
   //  ['gt1','lt100']   1<x<100   ['gte1','lt100']   1<=x<100
   //  ['gt1','lte100']   1<x<=100  ['gte1','lte100']   1<=x<=100
 },
```

### 数值大小校验 (numCompare("gt/gte/lt/lte"+number,message="如果是两个值比较,message 必传")),该场景必须搭配数字校验

```js
//配置案例
import rules from "@/utils/rules.ts"
{
 prop:"test",
 model:"test",
 label:"test",
 rules:[rule.number(),rules.numCompare("gt1")] //带数字校验,输入数字必须大于1
 //rules:[rule.number(),rules.numCompare("gt"+(Number(b)||0),$t("a必须大于b")]  a大于b的使用场景
}
//数字区间校验
rules:[rule.number(),rules.numCompare(["gt1","lte100"])] //带数字校验,输入数字必须大于1,且小于等于100
```

### 英文标题校验,建议搭配语言长度校验(enRequired)

```js
//配置案例
import rules from "@/utils/rules.ts"
 {
   slot: 'title',
   prop: 'title',
   label: '英文标题,长度小于24',
   rules: [rules.enRequired(), rules.maxLength(24,true)],  //长度默认24可传其他长度
 },
```

### 未来时间校验 future(hours)

```js
//配置案例
import rules from "@/utils/rules.ts"
  {
    prop: 'time',
    model: 'time',
    type: 'datetimerange/datetime', //兼容时间数组,单个时间 ,  校验时间区域时,默认校验创建时间(数组第一位)
    label: '时间',
    rules: [ rules.future(24)],  //接受小时参数, 默认1小时即 比当前时间大一小时才会通过,传24即 选择时间/创建时间 必须是比当前时间大24小时(即选择时间是明天才通过)
 },

```

<rule-special/>

::: tip
部分校验规则存在组合校验，rules:[rules.number(), rules.numCompare('gt10')]先校验是否是数字，再校验大小。组合校验规则是基础校验在前，复杂校验在后。
:::

::: details {{$t("viewCode")}}

@[code](./rules-special.vue)

:::
