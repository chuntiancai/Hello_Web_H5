
## Ajax 基础
    1、Ajax用于解决传统网站提交网络请求时，需要整页刷新的问题，Ajax主要用于局部刷新,局部请求数据。
    2、Ajax就是浏览器的网络处理代理。Ajax 相当于浏览器发送请求与接收响应的代理人，以实现在不影响用户浏览页面的情况下，局部更新页面数据，从提高用户体验。
    3、以前遗留的问题：
            网速慢的情况下，页面加载时间长，用户只能等待。
            表单提交后，如果一项内容不合格，需要重新填写所有表单内容。
            页面跳转，重新加载页面，造成资源浪费，增加用户等待时间。
    4、Ajax是浏览器提供的一套方法，可以实现页面无刷新更新数据，提高用户浏览网站应用的体验。
    5、Ajax 技术需要运行在网站环境中才能生效，当前课程会使用Node创建的服务器作为网站服务器。



### Ajax 的应用场景
    1、页面上拉加载更多数据。
    2、列表数据无刷新分页。
    3、表单项离开焦点数据验证。
    4、搜索框提示文字下拉列表。

### Ajax 的实现步骤
    现在已经很少原生地去实现Ajax对象了，都是用封装后的Ajax了。下面展示的是原生的Ajax使用步骤：
    1.  创建 Ajax 对象
        var xhr = new XMLHttpRequest();
    2.告诉 Ajax 请求地址以及请求方式
         xhr.open('get', 'http://www.example.com');
    3.  发送请求
        xhr.send();
    4.  获取服务器端给与客户端的响应数据
        xhr.onload = function () {
            console.log(xhr.responseText);
        }


### 服务器端响应的数据格式
    1、在真实的项目中，服务器端大多数情况下会以 JSON 对象作为响应数据的格式。当客户端拿到响应数据时，要将 JSON 数据和 HTML 字符串进行拼接，然后将拼接的结果展示在页面中。
    2、在 http 请求与响应的过程中，无论是请求参数还是响应内容，如果是对象类型，最终都会被转换为对象字符串进行传输。
        JSON.parse() // 将 json 字符串转换为json对象


### 传统网站表单提交
    <form method="get" action="http://www.example.com">
        <input type="text" name="username"/>
        <input type="password" name="password">
    </form>
    <!– http://www.example.com?username=zhangsan&password=123456 -->

### Ajax的同源政策
    1、Ajax 只能向自己的服务器发送请求。比如现在有一个A网站、有一个B网站，A网站中的 HTML 文件只能向A网站服务器中发送 Ajax 请求，B网站中的 HTML 文件只能向 B 网站中发送 Ajax 请求，但是 A 网站是不能向 B 网站发送 Ajax请求的，同理，B 网站也不能向 A 网站发送 Ajax请求。
    2、如果两个页面拥有相同的协议、域名和端口，那么这两个页面就属于同一个源，其中只要有一个不相同，就是不同源。
    3、同源政策是为了保证用户信息的安全，防止恶意的网站窃取数据。最初的同源政策是指 A 网站在客户端设置的 Cookie，B网站是不能访问的。
       随着互联网的发展，同源政策也越来越严格，在不同源的情况下，其中有一项规定就是无法向非同源地址发送Ajax 请求，如果请求，浏览器就会报错。

    4、使用 JSONP 解决同源限制问题：
        jsonp 是 json with padding 的缩写，它不属于 Ajax 请求，但它可以模拟 Ajax 请求。主要是利用了script标签可以向非同源服务器发送请求的特性。客户端把服务端的响应当作script标签的代码执行。
        1. 将不同源的服务器端请求地址写在 script 标签的 src 属性中
            <script src="www.example.com"></script>
            <script src=“https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
        2.服务器端响应数据必须是一个函数的调用，真正要发送给客户端的数据需要作为函数调用的参数。
            const data = 'fn({name: "张三", age: "20"})';
            res.send(data);
        3.在客户端全局作用域下定义函数 fn
            function fn (data) { }
        4.在 fn 函数内部对服务器端返回的数据进行处理
            function fn (data) { console.log(data); }

        JSONP 代码优化：
            客户端需要将函数名称传递到服务器端。
            将 script 请求的发送变成动态请求。
            封装 jsonp 函数，方便请求发送。
            服务器端代码优化之 res.jsonp 方法。




















