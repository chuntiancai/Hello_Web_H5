

## JavaScript简介：
    1、JavaScript 是什么？
        JavaScript 是一种运行在客户端的脚本语言 （Script 是脚本的意思）。也就是可以直接在浏览器引擎运行的意思。
        脚本语言：不需要编译，运行过程中由 js 解释器( js 引擎）逐行来进行解释并执行。   (是解释器，不是编译器)
        现在也可以基于 Node.js 技术进行服务器端编程。

    2、JavaScript的作用：
        表单动态校验（密码强度检测）。 （ JS 产生最初的目的 ）
        网页特效。
        服务端开发(Node.js)。
        桌面程序(Electron)。
        App(Cordova) 。
        控制硬件-物联网(Ruff)。
        游戏开发(cocos2d-js)。
    
    3、HTML/CSS/JS 的关系：
        HTML/CSS 是描述性语言，用于静态描述页面结构也样式。不能函数调用。
        JS 是编程式语言，用于实现交互，功能，函数调用这些。

        HTML/CSS 标记语言--描述类语言：
            HTML 决定网页结构和内容( 决定看到什么 )，相当于人的身体。
            CSS 决定网页呈现给用户的模样( 决定好不好看 )，相当于给人穿衣服、化妆。

        JS 脚本语言--编程类语言：
            实现业务逻辑和页面控制( 决定功能 )，相当于人的各种动作。


## 浏览器如何执行 JS：
    1、浏览器分成两部分：渲染引擎和 JS 引擎
        渲染引擎：用来解析HTML与CSS，俗称内核，比如 chrome 浏览器的 blink ，老版本的 webkit。
        JS 引擎：也称为 JS 解释器。 用来读取网页中的JavaScript代码，对其处理后运行，比如 chrome 浏览器的 V8。

     注意：
            浏览器本身并不会执行JS代码，而是通过内置 JavaScript 引擎(解释器) 来执行 JS 代码 。JS 引擎执行代码时逐行解释
        每一句源码（转换为机器语言），然后由浏览器引擎通过计算机去执行，所以 JavaScript 语言归为脚本语言，会逐行解释执行。


## JS 的组成：
    ECMAScript：JavaScript语法。
    DOM：页面文档对象模型。
    BOM：浏览器对象模型。

    1、ECMAScript：
        ECMAScript 是由ECMA 国际（ 原欧洲计算机制造商协会）进行标准化的一门编程语言，这种语言在万维网上应用广泛，
    它往往被称为 JavaScript 或 JScript，但实际上后两者是 ECMAScript 语言的实现和扩展。
        ECMAScript 规定了JS的编程语法和基础核心知识，是所有浏览器厂商共同遵守的一套JS语法工业标准。
        文档官网：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/JavaScript_technologies_overview。
    
    2、DOM ——文档对象模型：
        用于操作当前的页面。
        文档对象模型（Document Object Model，简称DOM），是W3C组织推荐的处理可扩展标记语言的标准编程接口。
        通过 DOM 提供的接口可以对页面上的各种元素进行操作（大小、位置、颜色等）。

    3、 BOM ——浏览器对象模型：
        用于联系浏览器本身。
        BOM (Browser Object Model，简称BOM) 是指浏览器对象模型，它提供了独立于内容的、可以与浏览器窗口进行互动的对象结构。
        通过BOM可以操作浏览器窗口，比如弹出框、控制浏览器跳转、获取分辨率等。


## JS 的书写：
    JS对大小写是敏感的。
    JS 有3种书写位置，分别为行内、内嵌和外部。
    JS 可以写在HTML的<script>标签的属性里，也可以写在HTML的<script>标签的内容里，也可以通过<script>去调用外部的JS函数。
    1、行内式 JS：
        直接写在HTML标签的内部事件属性中，函数名和参数全都在标签内部。
        注意单双引号的使用：在HTML中我们推荐使用双引号, 外部JS文件中我们推荐使用单引号。
            <input type="button" value="点我试试" onclick="alert('Hello World')" />

    2、内嵌式JS：
        在<head>标签的内容里，用<script>标签写js的函数。
        可以将多行JS代码写到 <script> 标签中，学习的时候可以用内嵌式。
        举例：
        <script>
            alert('Hello World~!');
        /script>

    3、 外部 JS文件：
        独立的一个外部JS文件，在html中引入该文件，用<script>标签直接调用JS的函数。
        引用外部 JS文件的 <script> 标签中间不可以写代码，即不可以写内容，适合于JS 代码量比较大的情况。
        举例：
            <script src="my.js"></script>

    4、JS的注释书写：
        // 用来注释单行文字（ 快捷键 ctrl + / ）
        /*注释内容 */ 用来注释多行文字（ 默认快捷键 alt + shift + a ）

    5、JS调试打印语句：
        alert(msg) 浏览器弹出警示框 浏览器
        console.log(msg) 浏览器控制台打印输出信息 浏览器
        prompt(info) 浏览器弹出输入框，用户可以输入 浏览器



