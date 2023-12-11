/**
 * 1、由于这个是放在server文件下，所以是服务端代码，这些和客户端代码是隔离的，也就是两者复制了一份，是不能当作同一份使用的。
 * 2、存在天然的数据隔离。所以服务端和客户端不能共享数据，只能通过参数传递，第三方库也不共享。
 */
import { readRawBody, getQuery,getHeader } from 'h3'
import User from '../models/userDB'
import serverSessionStroe from '../models/severSessionStore'



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
  let retPerson = (person as {username: string,password:string,user_sessiontoken:string}) ?? null

  // console.log('返回的密码：',retPerson,person)
  if (retPerson != null && retPerson.password === reqPassWord){

    //不能共享与客户端的ts文件共享UserModel。
    let newToken = await serverSessionStroe.createToken(retPerson.username)
    // let res = await User.findOneAndUpdate({ username: retPerson.username }, { user_sessiontoken: newToken }, { new: true }) 
    //                           .then(updatedUser => {
    //                             console.log('更新usertoken成功：',updatedUser?.user_sessiontoken);
    //                           })
    //                           .catch(error => {
    //                             console.error('更新usertoken失败：',error);
    //                           });

    resData = {
      isAuthed:true,
      message:'用户密码正确，验证通过',
      token:newToken
    }
  }else{
    resData = {
      isAuthed:false,
      message:'用户名或密码错误，验证不通过',
      token:null
    }
  }

  
  // console.log('数据库查询到的对象：',person)
  
  // res结构体会被封装在data字段里，应该是event封装了吧
  // const res =  {
  //   hello:data, //这个直接会封装在hello字段里，不取名字就是变量本身的名字。
    
  // }
  console.log('resData:', resData)

  return resData 
})