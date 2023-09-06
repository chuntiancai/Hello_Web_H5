
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
















