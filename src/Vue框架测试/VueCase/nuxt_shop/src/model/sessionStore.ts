/**
 *  1、自定义全局对象，存储网络会话的token
 * 2、这个单例对象还是没有效，刷新之后，程序会全部更新，感觉还是得用window保留token
 */

import { useLocalSessionToken } from "~/composables/state";

class SingleStore{
    private static _instance:SingleStore;
    // _localToken:string = useLocalSessionToken().value;
    sessionToken = "";
    //单例
    static instance():SingleStore {
        if (!this._instance) this._instance = new SingleStore();
        return this._instance;
    }
    //构造函数
    private constructor(){
        // this._localToken = "ctch_1111"    //随机数作为token
        this.sessionToken = "";
    }
    //我也不知道为什么没有设置get，可能是线程数据冲突，就是login里面修改token才生效，在这里赋值的token，在global访问不生效。

    createToken(){  
        useLocalSessionToken().value = "ctch_" + Math.random()
        console.log('createToken的值：',useLocalSessionToken().value)
        return useLocalSessionToken().value
    }

    //清除本地存储
    clearToken(){
        useLocalSessionToken().value = ""
        this.sessionToken = "";
    }

    get localToken():string{
        console.log('get方法返回的token：',useLocalSessionToken().value)
        return useLocalSessionToken().value
    }


}
const sessionStroe = SingleStore.instance();

export default sessionStroe;
