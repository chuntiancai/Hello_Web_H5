/**
 * 1、用于存储全局变量，整个项目都可以访问的变量和函数，结合nuxt提供useState函数和localStorage模块，实现数据的持久化。
 *      //系统提供的useStae函数,会把参数格式化为json字符串。参数一是参数二唯一的键，就是一对键值对。
 *      const count = useState('counter', () => Math.round(Math.random() * 100))
 * 
 *      //在 Vue.js 中，响应式对象是指一个普通的 JavaScript 对象，它被 Vue.js 的响应式系统所监测。当该对象的属性发生变化时，Vue.js 会自动更新相关的视图。
 *        其实就是键值对，然后全局监听，而且发通知。需要通过.value的方式来更新键值对的值。 useStae函数就是这个原理。
 *        const fallback = 'en-US';
 *        const locale = ref(fallback); //ref是import { ref } from 'vue'; ref函数把对象转换为响应式对象，也就是建立全局监听的键值对了。
 *        
 *        console.log(locale.value); // 输出：en-US
 *        
 *        locale.value = 'zh-CN';
 *        console.log(locale.value); // 输出：zh-CN
 *    
 * 2、composables 文件夹，里导出的函数，Nuxt会帮我们自动引入。
 *      由于composables 文件夹智能导出函数，所以不能直接使用变量，而是函数从键值对里面取出变量，也就是useStae的键值对。
 * 3、注意：由于Nuxt是服务端渲染，localStorage只能在挂载后才能使用！
 * 4、只有需要的数据才会持久化，根据函数名自动存储为对应的键放在localStorage中。（比如useColor会变为color存储在localStorage中，usePeople会变为people。
 *      但是多驼峰的也会全变为小写，比如useAaaBbb，会变为aaabbb存储，你可以根据需要修改，反正不影响代码运行）。
 * 5、持久化时机：在app挂载时，从localStorage获取数据赋值到State中，在页面将要关闭/刷新时，把State数据放到localStorage中。
 */

/**简单数据类型示例 */
console.log('useState方法',)
export const useTestColor = () => useState<string>('color', () => 'red')        //建立color--red键值对，通过useTestColor函数来访问，.value来修改。
export const useLocalSessionToken = () => {
    console.log('useState方法：',useState)
    if(!useState){
        return  ref('localSessionToken')
    }
    let retStr = useState<string>('localSessionToken', () => '')
    return retStr
} //本地的SessionToken
/**复杂数据类型示例 */
interface testPerson{
    /**姓名 */
    name: string,
    /**年龄 */
    age: number
    /**数组 */
    arr: number[]
}
export const useTestPeople = () =>  useState<testPerson>('people',()=>({
    name: '小明',
    age: 18,
    arr: [1,2]
}))

/** 不需要持久化的数据示例 */
export const useTestXxx = () => useState<string>('TestXxx', () => '我不需要持久化')

// 下面是持久化相关的代码


/**需要进行持久化的数据：把需要持久化的数据放在下面这个对象中，才会持久化，不需要持久化的数据就不用放到这里了。 */
const enduring: { [key: string]: () => Ref<any> } = {
    useTestColor, useTestPeople,useLocalSessionToken
}
//下面的俩函数在app.vue的onMounted中统一调用，或者在其它情况挂载后单独调用。
/**把所有指定数据保存到本地存储 
 * @param key 要保存的数据名。不填的话就是保存全部（一般不填，统一在页面关闭时保存。如果是特别重要的数据，就时不时单独保存一下即可。）
 */
export const setLocal = (key?: string) => {
    if (key) {
        console.log('只保存', key);
        const useKey = 'use' + key.slice(0, 1).toUpperCase() + key.slice(1).toLowerCase();//首字母大写，其它全部转小写，兼容大小写。
        const func = enduring[useKey]
        if (!func) {
            console.log('没有找到', useKey, '对应的函数');
            return
        }
        localStorage.setItem(key, JSON.stringify(func().value))
    } else {
        console.log('正在保存全部数据');
        for (const key in enduring) {
            if (Object.prototype.hasOwnProperty.call(enduring, key)) {
                const element = enduring[key];
                const setKey = key.toLowerCase().substring(3)//去掉前面的use ，其它全部转小写
                try {
                    localStorage.setItem(setKey, JSON.stringify(element().value))
                } catch (error) {
                    console.log(`在设置${setKey}的数据时出现错误`, error);
                }
            }
        }
    }
}
/**从本地存储获取数据到state的数组中，相当于全局赋值设置一遍useState */
export const getLoacl = () => {
    for (const key in enduring) {
        if (Object.prototype.hasOwnProperty.call(enduring, key)) {
            const element = enduring[key];
            const setKey = key.toLowerCase().substring(3)//去掉前面的use ，其它全部转小写
            try {
                const localData = localStorage.getItem(setKey) || ''
                if (localData) {
                    element().value = JSON.parse(localData)
                    console.log(setKey, '的本地存储数据获取成功', element().value);
                }
            } catch (error) {
                console.log(`在获取${setKey}的数据时出现错误`, error);
            }
        }
    }
}
