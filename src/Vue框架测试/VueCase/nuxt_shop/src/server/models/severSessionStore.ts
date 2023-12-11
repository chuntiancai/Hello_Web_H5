/**
 *  1、自定义全局对象，存储网络会话的token
 *  2、这个单例对象还是没有效，刷新之后，程序会全部更新，感觉还是得用window保留token
 *  3、客户端的代码和服务端的代码存在数据隔离，你不能在客户端与服务端访问数据存储相关的方法，例如 数据库和useState等，更进一层需要理解生命周期等。
 */
import User from './userDB'

class SeverSingleStore{
    private static _instance:SeverSingleStore;
    userName:string = ""
    _localToken:string = "";
    sessionToken = "";
    //单例
    static instance():SeverSingleStore {
        if (!this._instance) this._instance = new SeverSingleStore();
        return this._instance;
    }
    //构造函数
    private constructor(){
        this._localToken = "ctch_1111"    //随机数作为token
        this.sessionToken = "";
    }
    //我也不知道为什么没有设置get，可能是线程数据冲突，就是login里面修改token才生效，在这里赋值的token，在global访问不生效。

    async createToken(username:string):Promise<string> {  
        console.log('～～～～～createToken方法～')
        this.userName = username
        let newToken = "ctch_" + Math.random()
        let res = await User.findOneAndUpdate({ username: username }, { user_sessiontoken: newToken }, { new: true }) 
        .then(updatedUser => {
          console.log('更新usertoken成功：',updatedUser?.user_sessiontoken);
        })
        .catch(error => {
          console.error('更新usertoken失败：',error);
        });
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
        User.findOneAndUpdate({ username: this.userName }, { user_sessiontoken: "" }, { new: true }) 
        .then(updatedUser => {
          console.log('清除usertoken成功：',updatedUser?.user_sessiontoken);
        })
        .catch(error => {
          console.error('清除usertoken失败：',error);
        });
        this._localToken = ""
        this.sessionToken = "";
    }

    get localToken():string{
        console.log('get方法返回的token：',this._localToken)
        return this._localToken
    }


}
const serverSessionStroe = SeverSingleStore.instance();

export default serverSessionStroe;
