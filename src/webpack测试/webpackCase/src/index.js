// 这个是用来渲染index.html的js文件，你在这里以export的形式导出给html使用。

import $ from 'jquery'  //导入jquery库

//实现隔行变色
$(function() {
  $('li:odd').css('backgroundColor', 'blue')    //奇数行
  $('li:even').css('backgroundColor', 'lightblue')  //偶数行
})