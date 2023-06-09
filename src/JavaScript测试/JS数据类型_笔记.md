

## JS数据类型介绍
/**
 * JavaScript 是一种弱类型或者说动态语言。这是与常规编译语言最大不同。
 * 注意：JS的数据类型是动态数据类型，也就意味着字符串类型可以直接变成数字类型，数字类型也可以直接变成字符串类型。
 *      在代码运行时，变量的数据类型是由 JS引擎 根据 = 右边变量值的数据类型来判断 的，运行完毕之后， 变量就确定了数据类型。
 * 
 * JS 把数据类型分为两类： 
 *      简单数据类型 （Number,String,Boolean,Undefined,Null）。
 *      复杂数据类型 （object)。

 *      简单类型又叫做基本数据类型或者值类型，复杂类型又叫做引用类型。 内存其实和堆栈的分配差不多。

 *          值类型：简单数据类型/基本数据类型，在存储时变量中存储的是值本身，因此叫做值类型
 *                   string ，number，boolean，undefined，null

 *          引用类型：复杂数据类型，在存储时变量中存储的仅仅是地址（引用），因此叫做引用数据类型
 *                   通过 new 关键字创建的对象（系统对象、自定义对象），如 Object、Array、Date等
 */
var x = 6; // x 为数字
var x = "Bill"; // x 为字符串


## JS的简单数据类型
/**
 * 
    Boolean，   有 2 个值分别是：true 和 false。    默认值：false
    null，      一个表明 null 值的特殊关键字。JavaScript 是大小写敏感的，因此 null 与 Null、NULL或变体完全不同。    默认值：null。
    undefined， 和 null 一样是一个特殊的关键字，undefined 表示变量未赋值时的属性。  默认值：undefined。
    Number，    整数或浮点数，例如： 42 或者 3.14159。      默认值：0。
    BigInt，    任意精度的整数，可以安全地存储和操作大整数，甚至可以超过数字的安全整数限制。
    String，    字符串是一串表示文本值的字符序列，例如："Howdy" 。      默认值：""。
    Symbol，    代表( 在 ECMAScript 6 中新添加的类型)。一种实例是唯一且不可改变的数据类型。
 */

### 数字类型：
/**
 *      
    Number.MAX_VALUE，  最大值，这个值为： 1.7976931348623157e+308
    Number.MIN_VALUE，  最小值，这个值为：5e-32
    Infinity ，         代表无穷大，大于任何数值
    -Infinity ，        代表无穷小，小于任何数值
    NaN ，              Not a number，代表一个非数值
 */
   1、浮点数值的最高精度是 17 位小数，但在进行算术计算时其精确度远远不如整数，所以：不要直接判断两个浮点数是否相等 !

### 字符串型 String：
/**
 *      
    字符串型可以是引号中的任意文本，其语法为 双引号 "" 和 单引号''。
    JS 可以用单引号嵌套双引号 ，或者用双引号嵌套单引号 (外双内单，外单内双）。
    字符串 + 任何类型 = 拼接之后的新字符串
 */

### Undefined 和 Null 类型：
/**
    一个声明后没有被赋值的变量会有一个默认值 undefined ( 如果进行相连或者相加时，注意结果）。  
        console.log('你好' + variable); // 你好undefined
    一个声明变量给 null 值，里面存的值为空。
    
 */


## JS的复杂数据类型
/**
 * 
    Object，    对象
 */

### 对象类型
   1、创建对象的三种方式：
      利用字面量创建对象：
         var star = {
            name : 'pink',
            age : 18,
            sex : '男',
            sayHi : function(){
               alert('大家好啊~');
            }
         };

      利用 new Object 创建对象：
         /**
          Object() ：第一个字母大写
          new Object() ：需要 new 关键字
          使用的格式：对象.属性 = 值;
          */
         var andy = new Obect();
         andy.name = 'pink';
         andy.age = 18;
         andy.sex = '男';
         andy.sayHi = function(){
            alert('大家好啊~');
         }

      利用构造函数创建对象：
         /**
            1. 构造函数约定首字母大写。 
            2. 函数内的属性和方法前面需要添加 this ，表示当前对象的属性和方法。
            3. 构造函数中不需要 return 返回结果。
            4. 当我们创建对象的时候，必须用 new 来调用构造函数。
          */
         function Person(name, age, sex) {
            this.name = name;
            this.age = age;
            this.sex = sex;
            this.sayHi = function() {
               alert('我的名字叫：' + this.name + '，年龄：' + this.age + '，性别：' + this.sex);
            } 
         }

         var bigbai = new Person('大白', 100, '男');

   2、对象的调用：
       对象里面的属性调用 : 对象.属性名 ，这个小点 . 就理解为“ 的 ” 。
       对象里面属性的另一种调用方式 : 对象[‘属性名’]，注意方括号里面的属性必须加引号，我们后面会用。
       对象里面的方法调用：对象.方法名() ，注意这个方法名字后面一定加括号。

### 数组类型
   1、JS的数组中，可以存放任意类型的元素。
      JS 中创建数组有两种方式：
         利用 new 创建数组。  var arr = new Array(); // 创建一个新的空数组
         利用数组字面量创建数组。   var arr = ['小白','小黑','大黄','瑞奇'];

   2、如果数组没有指定容量，那么就是可变的，这个和swift一样。
      


## JS对类型的操作
   1、typeof 获取数据类型：
      console.log(typeof num) // 结果 number

   2、数据类型转换：
      转换为字符串：
         num.toString() 、 String(num)、加号拼接字符串。

      转换为数字型：
         parselnt（string）函数，      将string类型转成整数数值型,例：parselnt('78') 
         parseFloat（string）函数，    将string类型转成浮点数数值型，例：parseFloat('78.21') 
         Number（）强制转换函数，        将string类型转换为数值型，例：Number('12') 
         js隐式转换（—＊／），           利用算术运算符隐式转换为数值型，例：'12'-0   
      




