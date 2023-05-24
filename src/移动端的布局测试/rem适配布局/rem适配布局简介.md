
## rem适配布局简介
    rem适配布局主要也是用于移动端开发。
    1、rem适配布局用于解决：
        1. 页面布局文字能否随着屏幕大小变化而变化？
        2. 流式布局和flex布局主要针对于宽度布局，那高度如何设置？
        3. 怎么样让屏幕发生变化的时候元素高度和宽度等比例缩放？
    

## rem的基础
    1、rem单位：
        rem (root em)是一个相对单位，类似于em，em是相对于 父元素字体大小 而言的。
            不同的是rem的基准是相对于 html元素的字体大小 而言的。
            比如，根元素（html）设置font-size=12px; 非根元素设置width:2rem; 则换成px表示就是24px。
        rem的优势：父元素文字大小可能不一致， 但是整个页面只有一个html，rem可以 通过html字体大小 来很好来控制整个页面的元素大小。

    2、媒体查询：
        媒体查询（Media Query）是CSS3新语法。
            使用 @media 查询，可以针对不同的媒体类型定义不同的样式，也即是 @media 可以针对不同的屏幕尺寸设置不同的样式。
            当你重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面。
            目前针对很多苹果手机、Android手机，平板等设备都用得到多媒体查询。

        举例：
            // 在</style>元素里声明
            @media mediatype and|not|only (media feature) {
                 CSS-Code;
            }
            用 @media 开头 注意@符号。（用于声明这是媒体查询语法）
            mediatype 媒体类型。（用于表明当前设备是：打印机？手机？平板？）
            关键字 and not only。（将 媒体类型 或 多个媒体特性 连接到一起做为媒体查询的条件。）
            media feature 媒体特性 必须有小括号包含。（设置页面的宽高限制）

            /* 这句话的意思就是： 在我们屏幕上 并且 在最大的宽度是 500像素 设置为红色，如果屏幕大于500像素 紫色。大于800像素则是默认颜色 */
            /* max-width 小于等于800 */
            /* 媒体查询可以根据不同的屏幕尺寸在改变不同的样式 */

            @media screen and (max-width: 500px) {
                body {
                    background-color: pink;
                }
            }

            @media screen and (max-width: 800px) {
                body {
                    background-color: purple;
                }
            }

    3、媒体查询 + 元素动态变化。
        所以通过媒体查询可以限制屏幕的大小，通过rem可以限制元素的大小，从而实现元素的动态变化。
            @media screen and (max-width: 500px) {
                html {
                    font-size: 20px;
                }
            }

    4、媒体查询 根据设备屏幕引入不同的css文件：
        <link rel="stylesheet" href="styleA.css" media="screen and (min-width: 400px)">

### less的基础：
    用于解决CSS维护的弊端：
        CSS 是一门非程序式语言，没有变量、函数、SCOPE（作用域）等概念。 也就是 1+1 的表达式也不能写在CSS的语句中。
        CSS 需要书写大量看似没有逻辑的代码，CSS 冗余度是比较高的。
        不方便维护及扩展，不利于复用。
        CSS 没有很好的计算能力。
        非前端开发工程师来讲，往往会因为缺少 CSS 编写经验而很难写出组织良好且易于维护的 CSS 代码项目。
    
    1、LESS的介绍：
        Less （Leaner Style Sheets 的缩写） 是一门 CSS 扩展语言，也成为CSS预处理器。
        做为 CSS 的一种形式的扩展，它并没有减少 CSS 的功能，而是在现有的 CSS 语法上，为CSS加入程序式语言的特性。
        它在 CSS 的语法基础之上，引入了变量，Mixin（混入），运算以及函数等功能，大大简化了 CSS 的编写，并且降低了 CSS 的维护成本，
            就像它的名称所说的那样，Less 可以让我们用更少的代码做更多的事情。
        Less中文网址： http://lesscss.cn/   （自己去官网安装这种处理器，通过node安装）
        常见的CSS预处理器：Sass、Less、Stylus
        总结：
            LESS就是一门额外的语言，用于把CSS文件中的 程序表达式翻译出来，然后再覆盖回CSS文件中。
    
    2、LESS的使用：
        1.LESS源文件其实也是一个.less后缀的文件，通过less的编译器，把less文件转换成.css文件。
            vscode的Easy less插件可以把less文件转换为css文件，在你保存less文件之后，就会自动生成一个同名的.css文件 在当前目录下。

        2.less运算：
            乘号（*）和除号（/）的写法。
            运算符中间左右有个空格隔开 1px + 5。
            对于两个不同的单位的值之间的运算，运算结果的值取第一个值的单位。
            如果两个值之间只有一个值有单位，则运算结果就取该单位。












