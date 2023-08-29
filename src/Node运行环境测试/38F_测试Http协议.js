/**
 * 1、在浏览器直接输入地址访问时，是Get请求。
 * 2、通过html的form表单访问时，可以指定是Get或者post请求。
 * 3、响应报文：
 *      HTTP状态码：
 *          200 请求成功
            404 请求的资源没有被找到
            500 服务器端错误
            400 客户端请求有语法错误
        内容类型content-type：
            text/html
            text/css
            application/javascript
            image/jpeg
            application/json
    4、请求参数：
        Get请求：参数被放置在浏览器地址栏中，例如：http://localhost:3000/?name=zhangsan&age=20  //问号之后是参数。

    5、路由：
        路由是指客户端请求地址与服务器端程序代码的对应关系。简单的说，就是请求什么响应什么。即客户端路由服务器的资源位置。


 */