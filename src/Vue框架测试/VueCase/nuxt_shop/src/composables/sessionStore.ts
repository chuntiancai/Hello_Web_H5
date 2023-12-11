/**
 *  1、自定义全局对象，存储网络会话的token
 * 2、这个单例对象还是没有效，刷新之后，程序会全部更新，感觉还是得用window保留token
 */
import axios from "~/plugins/axios";

class SingleStore{
    private static _instance:SingleStore;
    _localToken:string = "";
    sessionToken = "";
    //单例
    static instance():SingleStore {
        if (!this._instance) this._instance = new SingleStore();
        return this._instance;
    }
    //构造函数
    private constructor(){
        this._localToken = ""    //随机数作为token
        this.sessionToken = "";
    }
    //我也不知道为什么没有设置get，可能是线程数据冲突，就是login里面修改token才生效，在这里赋值的token，在global访问不生效。

    async createToken(username:string):Promise<string> {  
        console.log('～～～～～createToken方法～')
        let newToken = "ctch_" + Math.random()
        // if (UserModel){
        //     console.log('createToken 存在usermodel')
        // }else{
        //     console.log('createToken 不存在usermodel')
        // }
        // let res = await UserModel.findOneAndUpdate({ username: username }, { user_sessiontoken: newToken }, { new: true }) .then(updatedUser => {
        //     console.log('createToken 更新usertoken成功：',updatedUser);
        //   })
        //   .catch(error => {
        //     console.error('createToken 更新usertoken失败：',error);
        //   });
        console.log('createToken插入新的token成功',newToken)
        this._localToken = newToken
        return this._localToken
    }

    //清除本地存储
    clearToken(){
        this._localToken = ""
        this.sessionToken = "";
    }

    get localToken():string{
        console.log('get方法返回的token：',this._localToken)
        return this._localToken
    }


}
const sessionStroe = SingleStore.instance();

export default sessionStroe;
