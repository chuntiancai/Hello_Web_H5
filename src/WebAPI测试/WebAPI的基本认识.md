

## Web API简介
        Web API 是浏览器提供的一套操作浏览器功能和页面元素的 API ( BOM 和 DOM )。
        web API其实就是各种语言或者工具的API，譬如 浏览器支持html语法和API，也支持CSS的语法和API，也支持javascript的语法和API等等。Web API主要是JS使用的API。
    所以浏览器有一个引擎，看它到底支持了哪种类型的API，有的第三方工具是用HTMl或者CSS写的，所以浏览器可以通过访问放在服务器的这些第三方工具，从而使用工具的功能。

    1、有一些浏览器内置了一些工具的API，而另外的一些浏览器没有内置，所以就表现出了浏览器不兼容的问题，因为私人的服务器上也没有放置这些API的包。
    也有可能是，该浏览器的引擎不支持该工具的语法或者某些功能之类的。本质上，和iOS，java，安卓的第三方包是一样的，都是看OS能不能执行这些代码，是否内置了第三方包。  
        需要注意的是，浏览器是解释型编译器，所以可以直接执行服务器上的代码，而iOS和安卓都是编译型编译器，不允许直接执行代码，需经过源代码-编译-链接等阶段。
    特别是iOS，直接就禁用动态库的功能，只允许使用系统的动态库。

    2、但是浏览器有一个共识，就是都内置了公共基础的包，譬如html，css，javascript这些，只是有一些被淘汰的浏览器并不支持这些语言的新特性语法而已。

    3、国内的移动端浏览器都是基于 webkit内核的浏览器 进行开发的，所以，你只需要兼容webkit内核的API就可以了。

## 浏览器的基本API
        目前主流浏览器都是基于webkit内核的，所以就提供了webkit内核的API，这里我们就简单视作浏览器的通用API就好了。

### -----html的API：
    1、视口（viewport）：
        就是浏览器显示页面内容的屏幕区域。 视口可以分为布局视口、视觉视口和理想视口。

    布局视口 layout viewport：
        一般移动设备的浏览器都默认设置了一个布局视口，跟PC的网页布局视口尺寸一样，用于解决早期的PC端页面在手机上显示的问题。
        (相当于PC端网页开发时的用于布局的尺寸)。
        iOS, Android基本都将这个视口分辨率设置为 980px，所以PC上的网页大多都能在手机上呈现，只不过元素看上去很小，一般默认可以通过手动缩放网页。

    视觉视口 visual viewport：
        就是当前手机屏幕能显示的网页的 部分区域。   （相当于手机屏幕的意思）。
        我们可以通过缩放去操作视觉视口，但不会影响布局视口，布局视口仍保持原来的宽度。
        也就是开发的时候，仍然是按照PC端的网页尺寸进行开发，手机端只能用手指移来移去来看该网页的不同部分。

    理想视口 ideal viewport：
        即完全符合手机端视觉的 布局尺寸，就是完美适配手机的尺寸的视口。
        需要手动添写meta视口标签通知浏览器操作。
        meta视口标签的主要目的：布局视口的宽度应该与理想视口的宽度一致，简单理解就是设备有多宽，我们布局的视口就多宽。

    举例：
        <meta name="viewport" content="width=device-width, initial-scale=1" />


### -----CSS的API：
    1、CSS传统模式宽度计算：盒子的宽度 = CSS中设置的width + border + padding 
        CSS3盒子模型： 盒子的宽度 = CSS中设置的宽度width 里面包含了 border 和 padding 
        也就是说，我们的CSS3中的盒子模型， padding 和 border 不会撑大盒子了
        /*CSS3盒子模型*/
        box-sizing: border-box;
        /*传统盒子模型*/
        box-sizing: content-box;

    2、移动端 CSS 初始化推荐使用 normalize.css/，该模版官网地址： http://necolas.github.io/normalize.css/


## 在移动端的Web开发
    常见的移动端布局：
    1、单独制作移动端页面（主流）：
        流式布局（百分比布局）。
        flex 弹性布局（强烈推荐）。
        less+rem+媒体查询布局。
        混合布局。
    2、响应式页面兼容移动端（其次）
        媒体查询。
        bootstarp。


