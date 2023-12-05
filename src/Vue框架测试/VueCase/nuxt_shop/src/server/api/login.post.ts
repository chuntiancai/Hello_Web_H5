import { readRawBody, getQuery,getHeader } from 'h3'
import mongoose from 'mongoose'
import {User} from '~/model/userDB'

export default defineEventHandler(async (event) => {
  // console.log('请求了nuxt的login～', event.req)
  //获取post请求的参数
  let body = await readRawBody(event) 
  let bodyObj = JSON.parse(body ?? 'Unknown')
  console.log('body参数：',body,bodyObj.username)
  
  //处理http的响应,event会帮你封装好header这些参数。
  const ssrHeader = new Headers()
  const { app } = useRuntimeConfig()
  ssrHeader.set('x-xsrf-token', app['XSRF_HEADER'])
  ssrHeader.set('app-id', app['APP_ID'])
  event.context.headers = ssrHeader
  event.context.baseUrl = app['BASE_URL']
  event.node.res.statusCode = 404


  //联合查询
  // sp_type.find().then(result => console.log('查询数据库结果：',result));
  // sp_type.create({type_id:1,type_name:'插入'})
  let person = await User.findOne({username: 'ww'})
  console.log('数据库查询到的对象：',person)
  let data = "hello nuxt 响应"
  // res结构体会被封装在data字段里，应该是event封装了吧
  const res =  {
    hello:data, //这个直接会封装在hello字段里，不取名字就是变量本身的名字。
    meta:{
      status:500
    }
  }
  console.log('res:', res)

  return res 
})