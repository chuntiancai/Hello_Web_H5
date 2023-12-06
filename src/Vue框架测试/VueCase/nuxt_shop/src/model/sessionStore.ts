/**
 *  1、自定义全局对象，存储网络会话的token
 * 2、这个单例对象还是没有效，刷新之后，程序会全部更新，感觉还是得用window保留token
 */


class SingleStore{
    private static _instance:SingleStore;
    token:string = "";
    sessionToken = "";
    //单例
    static instance():SingleStore {
        if (!this._instance) this._instance = new SingleStore();
        return this._instance;
    }
    //构造函数
    private constructor(){
        this.token = "ctch_1111"    //随机数作为token
        this.sessionToken = "";
    }
    createToken(){  //我也不知道为什么没有设置get，可能是线程数据冲突，就是login里面修改token才生效，在这里赋值的token，在global访问不生效。
        this.token = "ctch_" + Math.random()
        console.log('createToken的值：',this.token,this)
        return this.token
    }

    
    clearToken(){
        this.token = ""
        this.sessionToken = "";
    }

    // get token():string{
    //     console.log('get方法返回的token：',this.token,this)
    //     return this.token
    // }

    // set token(value:string) {
    //     this.token = value
    //     return
    // }

}
const stroe = SingleStore.instance();

export default stroe;
