// 处理与数据库的交互
import mongoose from 'mongoose';
const url = `'mongodb://localhost/NuxtShopCaseDB'`;
const mongodb = mongoose.connect(url)
                        .then(() => console.log('数据库nuxtShopCase连接成功'))
                        .catch(() => console.log('数据库nuxtShopCase连接失败'));
export default mongodb;
