import { readRawBody, getQuery,getHeader } from 'h3'
import mongoose from 'mongoose'
import {User} from '~/model/userDB'

export default defineEventHandler(async (event) => {
  // console.log('请求了nuxt的login～', event.req)
  //获取post请求的参数
  let body = await readRawBody(event) 
  let bodyObj = JSON.parse(body ?? 'undefined')
  let reqName = bodyObj.username
  let reqPassWord = bodyObj.password

  console.log('body参数：',reqName,reqPassWord)
  
  //处理http的响应,event会帮你封装好header这些参数。
  const ssrHeader = new Headers()
  const { app } = useRuntimeConfig()
  ssrHeader.set('x-xsrf-token', app['XSRF_HEADER'])
  ssrHeader.set('app-id', app['APP_ID'])
  event.context.headers = ssrHeader
  event.context.baseUrl = app['BASE_URL']
  event.node.res.statusCode = 200


  //联合查询
  // sp_type.find().then(result => console.log('查询数据库结果：',result));
  // sp_type.create({type_id:1,type_name:'插入'})
  let resData:any;  //服务器返回的对象
  let person; //数据库查询到的对象。
  try {
    person = await User.findOne({username: reqName})
  } catch (error) {
    person = error  
  }
  let retPerson = (person as {password:String}) ?? null
  console.log('返回的密码：',retPerson,person)
  if (retPerson != null && retPerson.password === reqPassWord){
    resData = {
      isAuthed:true,
      message:'用户密码正确，验证通过'
    }
  }else{
    resData = {
      isAuthed:false,
      message:'用户名或密码错误，验证不通过'
    }
  }

  
  console.log('数据库查询到的对象：',person)
  
  // res结构体会被封装在data字段里，应该是event封装了吧
  // const res =  {
  //   hello:data, //这个直接会封装在hello字段里，不取名字就是变量本身的名字。
    
  // }
  console.log('resData:', resData)

  return resData 
})