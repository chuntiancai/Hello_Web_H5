
## DOM API的简介
    1、DOM主要是供JS使用的API。文档对象模型（Document Object Model，简称 DOM），是 W3C 组织推荐的处理可扩展标记语言（HTML 或者XML）的标准编程接口。
        JS 通过这些 DOM 接口可以 获取以及改变网页的内容、结构和样式。
        主要是通过DOM树的方式去寻址网页的内容，并对其进行操作。

    2、DOM 树：
        网页的层级结构主要用树结构来描述，这个树就叫做DOM树。
         DOM树的基本元素主要有：
         文档：一个页面就是一个文档，DOM 中使用 document 表示
         元素：页面中的所有标签都是元素，DOM 中使用 element 表示
         节点：网页中的所有内容都是节点（标签、属性、文本、注释等），DOM 中使用 node 表示
        DOM 把以上内容都看做是对象

## 对DOM树的操作：获取页面元素
     根据 ID 获取：
        1、使用 getElementById() 方法可以获取带有 ID 的元素对象。
            例如： document.getElementById('id');
            
        使用 console.dir() 可以打印我们获取的元素对象，更好的查看对象里面的属性和方法。

     根据标签名获取：
        1、使用 getElementsByTagName() 方法可以返回带有指定标签名的 对象的集合。
            例如：  document.getElementsByTagName('标签名');

        2、还可以获取某个元素(父元素)内部所有指定标签名的子元素.
            例如：  element.getElementsByTagName('标签名');
            注意：
                父元素必须是单个对象(必须指明是哪一个元素对象). 获取的时候不包括父元素自己。

     通过 HTML5 新增的方法获取：
        1. document.getElementsByClassName(‘类名’)；// 根据类名返回元素对象集合
        2. document.querySelector('选择器'); // 根据指定选择器返回第一个元素对象
        3. document.querySelectorAll('选择器'); // 根据指定选择器返回
        注意：
            querySelector 和 querySelectorAll里面的选择器需要加符号,比如:document.querySelector('#nav');

     特殊元素获取（body，html）：
        1. doucumnet.body // 返回body元素对象
        2. document.documentElement // 返回html元素对象

## 对DOM树的操作：创建元素
    1. document.write 是直接将内容写入页面的内容流，会导致页面全部重绘
    2. innerHTML 是将内容写入某个 DOM 节点，不会导致页面全部重绘
    3. innerHTML 复制节点的时候，不会复制原先节点的事件，会存在内存泄露问题
    4. 如果页面创建元素很多，建议使用 innerHTML 因其效率更高（不要拼接字符串，采取数组形式拼接）
    5. 如果页面创建元素较少，建议使用 createElement()
    总结：不同浏览器下，innerHTML 效率要比 creatElement 高
    
## 对DOM树的操作：处理属性
    1、获取属性：
     element.属性 获取内置属性值（元素本身自带的属性）
     element.getAttribute(‘属性’); 主要获得自定义的属性 （标准） 我们程序员自定义的属性

    2、赋值属性：
     element.属性 设置内置属性值 
     element.setAttribute(‘属性’); 主要设置自定义的属性 （标准）

    3、移除属性：
     element.removeAttribute('属性');


## 对DOM树的操作：处理事件
    1、事件的简介：
        事件是可以被 JavaScript 侦测到的行为，网页中的每个元素都可以产生某些可以触发 JavaScript 的事件，例如，我们可以在用户点击按钮时产生一个事件，然后去执行某些操作。
        简单理解： 触发--- 响应机制。

    2、事件的三要素：
            1. 事件源 （谁）。  2. 事件类型 （什么事件）    3. 事件处理程序 （做啥）
        1、执行事件的步骤
            1. 获取事件源
            2. 注册事件（绑定事件）
            3. 添加事件处理程序（采取函数赋值形式）

        2、常见事件：
            1.鼠标事件
            2.


## 节点操作简介：
    1、我们既可以通过DOM树来获取到页面中的元素，也可以通过节点的层级关系来获取到页面中的元素。
        节点层级关系的方便之处在于：
                             利用父子兄节点关系获取元素，更加简单。
                             逻辑性强， 但是兼容性稍差
        因为DOM树的层级关系的API是相对于整个页面而言，没有所谓父子关系的概念，节点操作赋予了父子兄弟关系的概念。

    2、网页中的所有内容都是节点（标签、属性、文本、注释等），在DOM 中，节点使用 node 来表示。
        HTML DOM 树中的所有节点均可通过 JavaScript 进行访问，所有 HTML 元素（节点）均可被修改，也可以创建或删除。

    3、节点至少拥有nodeType（节点类型）、nodeName（节点名称）和nodeValue（节点值）这三个基本属性。 
         元素节点 nodeType 为 1 
         属性节点 nodeType 为 2 
         文本节点 nodeType 为 3 （文本节点包含文字、空格、换行等）
        我们在实际开发中，节点操作主要操作的是元素节点。


## 节点的操作：父子关系
    1、node.parentNode  
         parentNode 属性可返回某节点的父节点，注意是最近的一个父节点
         如果指定的节点没有父节点则返回 null
    
    2、parentNode.childNodes（标准） 
        parentNode.childNodes 返回包含指定节点的子节点的集合，该集合为即时更新的集合
        返回值里面包含了所有的子节点，包括元素节点，文本节点等。如果只想要获得里面的元素节点，则需要专门处理。 所以我们一般不提倡使用childNodes

     3、parentNode.children（非标准）
        parentNode.children 是一个只读属性，返回所有的子元素节点。它只返回子元素节点，其余节点不返回 （这个是我们重点掌握的）。
        虽然children 是一个非标准，但是得到了各个浏览器的支持，因此我们可以放心使用
    
    4、parentNode.firstChild 
        firstChild 返回第一个子节点，找不到则返回null。同样，也是包含所有的节点。
    
    5、 parentNode.lastChild 
        lastChild 返回最后一个子节点，找不到则返回null。同样，也是包含所有的节点

    6、parentNode.firstElementChild 
        firstElementChild 返回第一个子元素节点，找不到则返回null。

       parentNode.lastElementChild 
        lastElementChild 返回最后一个子元素节点，找不到则返回null。 

       注意：这两个方法有兼容性问题，IE9 以上才支持。

    7、如何获取第一个子元素节点或最后一个子元素节点？
        1. 如果想要第一个子元素节点，可以使用 parentNode.chilren[0] 
        2. 如果想要最后一个子元素节点，可以使用 parentNode.chilren[parentNode.chilren.length - 1]


## 节点的操作：兄弟关系

    1、node.nextSibling
        nextSibling 返回当前元素的下一个兄弟元素节点，找不到则返回null。同样，也是包含所有的节点。

    2、node.previousSibling 
        previousSibling 返回当前元素上一个兄弟元素节点，找不到则返回null。同样，也是包含所有的节点。

    3、 node.nextElementSibling 
        nextElementSibling 返回当前元素下一个兄弟元素节点，找不到则返回null。IE9 以上才支持。

    4、 node.previousElementSibling 
        previousElementSibling 返回当前元素上一个兄弟节点，找不到则返回null。IE9 以上才支持。

## 节点操作：增删改查
    1、添加节点：
        1. node.appendChild(child) 
            node.appendChild() 方法将一个节点添加到指定父节点的子节点列表末尾。类似于 CSS 里面的after 伪元素。

        2. node.insertBefore(child, 指定元素) 
            node.insertBefore() 方法将一个节点添加到父节点的指定子节点前面。类似于 CSS 里面的 before 伪元素。

    2、删除节点：node.removeChild(child) 
        node.removeChild() 方法从 DOM 中删除一个子节点，返回删除的节点。

    3、复制节点：node.cloneNode() 
        node.cloneNode() 方法返回调用该方法的节点的一个副本。

    4、 替换节点：parentNode.replaceChild(newChild, oldChild); 
        用指定的节点替换当前节点的一个子节点，并返回被替换掉的节点。

