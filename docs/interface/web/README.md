### web

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details

<p>2121</p>

这是一个详情块，在 IE / Edge 中不生效
:::

:tada :100
<ClientOnly>
<FlowChart-index :nodeItemList="nodeItemList"></FlowChart-index>
</ClientOnly>
<script>
    export default{
        data() {
            return{
                nodeItemList: [
        {
          meta: {
            label: '开始',
            name: '开始',
            type: 'start',
          },
        },
        {
          meta: {
            label: '结束',
            name: '结束',
            type: 'end',
            shape: 'ellipse',
          },
        },
        {
          meta: {
            label: '任务',
            name: '任务',
            type: 'task',
            shape: 'diamond',
          },
        },
        {
          meta: {
            label: '完成',
            name: '完成',
            type: 'finish',
            shape: 'circle',
          },
        },
      ],
            }
        }
    }
    </script>