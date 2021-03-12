import mock from "./data";
export default {
    data() {
        return {
            visible: false,
            elForm: {},
            form: {
                id: "",
                test: "",
                testSelect: "",
                testCheckbox: [],
                testRadio: "",
                testSwitch: false,
                testDate: "",
                testSlot: "",
                testNativeSlot: "",
                ayncSelect: "",
            },
            formItem: [
                {
                    type: "input",
                    label: "输入框",
                    prop: "test",
                    rules: [{ required: true }],
                },
                {
                    type: "select",
                    label: "下拉框",
                    prop: "testSelect",
                    list: [
                        {
                            label: "选项一",
                            value: 1,
                            disabled: false, //默认是false, 如果需要传true
                        },
                        {
                            label: "选项二",
                            value: 2,
                            disabled: false, //默认是false, 如果需要传true
                        },
                    ],
                    rules: [{ required: true }],
                },
                // TODO多个多选框时有bug,多个时, 可以使用插槽方式
                {
                    type: "checkbox",
                    prop: "testCheckbox",
                    label: "测试多选框",
                    list: [
                        {
                            label: "选项一",
                            value: 0,
                        },
                        {
                            label: "选项二",
                            value: 1,
                        },
                    ],
                    rules: [{ required: true }],
                },
                {
                    type: "radio",
                    label: "测试单选",
                    prop: "testRadio",
                    list: [
                        {
                            label: "选项一",
                            value: 0,
                        },
                        {
                            label: "选项二",
                            value: 1,
                        },
                    ],
                    rules: [{ required: true }],
                },
                {
                    type: "switch",
                    label: "测试switch",
                    prop: "testSwitch",
                    rules: [{ required: true }],
                },
                {
                    type: "date",
                    label: "测试日期",
                    prop: "testDate",
                    rules: [{ required: true }],
                },
                {
                    type: "slot",
                    prop: "testSlot",
                    label: "插槽",
                    rules: [{ required: true }],
                },
                {
                    type: "nativeSlot",
                    prop: "testNativeSlot",
                },
                {
                    type: "select",
                    label: "异步下拉框",
                    prop: "ayncSelect",
                    list: [],
              
                },
            ],
        }
    },
    methods: {
        getDetail(id) {
            console.log(mock.msg, mock.data.form);
            if (mock.msg === "success") {
                Object.keys(mock.data.form).forEach((key) => {
                    // 字段一致才行,这里方法,不固定
                    this.form[key] = mock.data.form[key];
                });
            } else {
                this.$message.error(mock.msg);
            }
        },
    }

}