/**
 * 1、测试单纯服务端访问数据库。
 */
import sp_type from '../models/typeDB'
export default defineEventHandler(async (event) => {
    // console.log('请求了nuxt的login～', event.req)
    console.log('sever 的 处理数据库的reset方法')


    try {
        sp_type.find().then(result => console.log('login reset 查询数据库结果：', result));
    } catch (error) {
        console.log('login reset 查询数据库报错：', error)
    }

})