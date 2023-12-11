// 引入mongoose第三方模块
// 在nuxt的配置文件就启动了数据库
import mongoose from "mongoose";
import { type Nitro } from 'nitropack'

export default async (_nitroApp: Nitro) => {
    mongoose.connect('mongodb://localhost/NuxtShopCaseDB')
                        .then(() => console.log('sever 数据库NuxtShopCaseDB连接成功'))
                        .catch(() => console.log('sever 数据库NuxtShopCaseDB连接失败'));
};


