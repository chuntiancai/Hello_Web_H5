// 因为element ui在vue3.0版本不可用，所以改为用element-plus
import { ElButton, ElForm, ElFormItem, ElInput } from 'element-plus'

export default function useUIElement (app) {
  app.use(ElButton)
  app.use(ElForm)
  app.use(ElFormItem)
  // 如果ElButton这些有install方法，则可以使用app.use()来加载，否则使用app.component来加载。
  app.component(ElInput.name, ElInput)
}
