// import { readRawBody, getQuery,getHeader } from 'h3'
export default defineEventHandler((event) => {
  console.log('请求了nuxt的login～', event._path)


  //处理http的响应,event会帮你封装好header这些参数。
  const reqHeaders = getHeaders(event)
  const ssrHeader = new Headers()
  const { app } = useRuntimeConfig()
  ssrHeader.set('x-xsrf-token', app['XSRF_HEADER'])
  ssrHeader.set('app-id', app['APP_ID'])
  event.context.headers = ssrHeader
  event.context.baseUrl = app['BASE_URL']



  const method = event.method.toUpperCase()
  let data = "hello nuxt 响应"
  // res结构体会被封装在data字段里，应该是event封装了吧
  const res =  {
    hello:data  //这个直接会封装在hello字段里，不取名字就是变量本身的名字。
  }
  console.log('res:', res)
  return res 
})