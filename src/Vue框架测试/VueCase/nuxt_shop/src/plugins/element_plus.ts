/**
 * 1、这里主要是提供elementplus的弹窗功能。
 */
import { ElMessage } from "element-plus"

export default defineNuxtPlugin(() => {
    return {
      provide: {    //然后就可以通过$message来在nuxt的全局对象中调用该功能。
        message: ElMessage,
      },
    }
})