# 使用场景

### radio切换表单

<FormList-example-radio></FormList-example-radio>

::: details 查看代码
```vue
<template>
	<FormList  :fieldList="formItem" @handle-event="handleEvent"></FormList>
</template>
<script>
	export default {
		data() {
			return {
				// 表单项
				formItem: [
					{
						type: "radio",
						label: "切换表单项",
						prop: "radio",
						list: [
							{
								value: 0,
								label: "账号密码",
							},
							{
								value: 1,
								label: "年龄性别",
							},
						],
					},
					{
						type: "input",
						label: "账号",
						prop: "account",
					},
					{
						type: "password",
						label: "密码",
						prop: "password",
					},
				],
				// 准备切换的一套表单项
				formItemChange: [
					{
						type: "radio",
						label: "切换表单项",
						prop: "radio",
						list: [
							{
								value: 0,
								label: "账号密码",
							},
							{
								value: 1,
								label: "年龄性别",
							},
						],
					},
					{
						type: "input",
						label: "年龄",
						prop: "account",
					},
					{
						type: "radio",
						label: "性别",
						prop: "sex",
						list: [
							{
								label: "male",
								value: 0,
							},
							{
								label: "female",
								value: 1,
							},
						],
					},
				],
			};
		},
		methods: {
			handleEvent(type, val, key) {
				switch (type) {
					case "radio":
						this.radioCase(val, key);
						break;
					default:
						break;
				}
			},
			radioCase(val, key) {
				if (key === "radio") {
					[this.formItem, this.formItemChange] = [
						this.formItemChange,
						this.formItem,
					];
				}
			},
		},
	};
</script>

```
:::

<FormList-example-radioAppend></FormList-example-radioAppend>
