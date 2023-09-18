<!-- 
    Vue单文件组件用于解决传统组件问题：
        1. 全局定义的组件必须保证组件的名称不重复
        2. 字符串模板缺乏语法高亮，在 HTML 有多行的时候，需要用到丑陋的 \
        3. 不支持 CSS 意味着当 HTML 和 JavaScript 组件化时，CSS 明显被遗漏
        4. 没有构建步骤限制，只能使用 HTML 和 ES5 JavaScript, 而不能使用预处理器（如：Babel）

    一、 Vue 单文件组件的基本用法：
        1、单文件组件的组成结构
             template 组件的模板区域
             script 业务逻辑区域
             style 样式区域
        2、示例：
        <template>
            /* 这里用于定义Vue组件的模板内容 */
        </template>
        
        <script>
            // 这里用于定义Vue组件的业务逻辑
            export default {
            data: () { return {} }, // 私有数据
            methods: {} // 处理函数
            // ... 其它业务逻辑
            }
        </script>

        <style scoped>
            /* 这里用于定义组件的样式 */
        </style>
 -->