// === 存放一些公共方法，一般是作为工具的方法 =========
/**
 * 
 * @param {*} form  form表单的请求参数
 * @returns    返回封装好的json对象
 */
function serializeToJson(form) {
    var result = {};
    // [{name: 'email', value: '用户输入的内容'}]
    var f =  form.serializeArray();  
    f.forEach(function (item) {
        // result.email
        result[item.name] = item.value;
    });
    return result;
}