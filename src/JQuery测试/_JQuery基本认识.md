
##  jQuery 概述
    JavaScript 库: 就是一个JS 文件，里面对我们原生js代码进行了封装，存放到里面。这样我们可以快速高效的使用这些封装好的功能了。
    jQuery库，就是为了快速方便的操作DOM，里面基本都是函数（方法）。
    j 就是 JavaScript； Query 查询； 意思就是查询js，把js中的DOM操作做了封装，我们可以快速的查询使用里面的功能。轻量级。
    jQuery 封装了 JavaScript 常用的功能代码，优化了 DOM 操作、事件处理、动画设计和 Ajax 交互。

## jQuery 的基本使用
    1、引入 jQuery 文件使用即可。
    2、jQuery有自己的一套对象机制，虽然是对原生对象的封装，但是还是有自己的一套对象机制。

###  jQuery 的入口函数
    $(function () { 
        ... // 此处是页面 DOM 加载完成的入口
    }) ; 

    $(document).ready(function(){
        ... // 此处是页面DOM加载完成的入口
    });

    1. 等着 DOM 结构渲染完毕即可执行内部代码，不必等到所有外部资源加载完成，jQuery 帮我们完成了封装。
    2. 相当于原生 js 中的 DOMContentLoaded。
    3. 不同于原生 js 中的 load 事件是等页面文档、外部的 js 文件、css文件、图片加载完毕才执行内部代码。 
    4. 更推荐使用第一种方式。

###  jQuery 的顶级对象 $
    1、$ 是 jQuery 的别称，在代码中可以使用 jQuery 代替 $，但一般为了方便，通常都直接使用 $ 。相当于超级父类。
    2、$ 是jQuery 的顶级对象， 相当于原生JavaScript中的 window。把元素利用$包装成jQuery对象，就可以调用jQuery 的方法。

### jQuery 对象和 DOM 对象：
    1. 用原生 JS 获取来的对象就是 DOM 对象
    2. jQuery 方法获取的元素就是 jQuery 对象。
    3. jQuery 对象本质是： 利用$对DOM 对象包装后产生的对象（伪数组形式存储）。

    注意：
        只有 jQuery 对象才能使用 jQuery 方法，DOM 对象则使用原生的 JavaScirpt 方法。

    DOM 对象与 jQuery 对象之间的相互转换：
        jQuery只是对JS原生的部分对象属性进行了封装，并不是全部，所以有很多时候还是需要转换为原生对象来调用那些不常用的属性。

    1. DOM 对象转换为 jQuery 对象： $(DOM对象)
        $('div')
    2. jQuery 对象转换为 DOM 对象（两种方式）
        $('div') [index]    //index 是索引号
        $('div') .get(index)       //index 是索引号