

## 快捷键
    注意，vscode可以连续输入两个快捷键组合进行定位，就相当如第一个快捷键组合是进入命令模式，第二个快捷键组合是执行定位。
    command + K ：进入快捷键命令模式：

    查找文件：command + p

    打开快捷键列表： command + K  >> command + S

    打开vscode的所有可执行命令：shift + command + K                 //有很多命令是没有快捷键的。
    
    注释代码：command + / 

    复制整行：ctrl + alt + ↓    （我自定义的）

    删除整行： cmd + D  （也是我自定义的）

    代码格式化对齐：Alt + Shift + F >> ctrl + i

    触发建议：ctrl + \


## 调试
    1、点击左边栏的调试与运行logo。
    2、添加运行与配置，添加node.js的配置，然后会自动在工程目录的隐藏文件夹.vscode下生成luanch.json文件。
    3、在luanch.json文件中，编辑你要调试的js文件的路径、名称等信息，然后在调试的logo里，运行该luanch.josn文件里配置的js程序即可。
    4、往后你每添加一个调试程序(js文件)，都会自动在luanch.josn文件里增添相关的信息，你编辑即可。
        然后你就可以打断点那些调试了。
    5、调试的后台在 集成终端 窗口，在“调试控制台”tab选项中，然后就可以查看你的调试信息，断点操作，具体的调试后台命令我也不知道。


## vscode的插件:
    1、vscode的插件是指vscode软件在本地的插件，有的一些是项目的插件，例如vue项目也有自己的eslint插件，这个插件是用来检验代码规范的。
    2、ESLint：是一个语法规则和代码风格的检查工具，可以用来保证写出语法正确、风格统一的代码。
                也就是你可以在ESLint的配置文件中定义哪些代码的书写方式是不规范的，然后在编辑器中就小弹窗提醒了。
            ESLint不仅是vscode的插件，也可以是项目的插件，它本来就是一个js的库，默认情况下，ESLint(包括vscode的eslint扩展) 会在所有父级目录里寻找配置文件，一直到根目录。如果发现配置文件中有 “root”: true，它就会停止在父级目录中寻找。

        ！！！注意注意注意：先去看官网，先去看官网，先去看官网。

        1.通过npm init @eslint/config命令，可以在根目录创建 .eslintrc.js 文件，这个是eslint的配置文件，但是由于mjs与ejs的原因，你需要把npm init @eslint/config命令创建的eslintrc.js 文件改为eslintrc.cjs 文件，你跑一遍npx eslint xxx.js 看报错就知道了。
        2.vscode的eslint插件，也要先去看插件的安装步骤，看英文描述。
        3.步骤：
                在vscode安装eslint扩展插件 --》根目录 npm intall eslint --》执行npm init @eslint/config生成.eslintrc.js文件 --》把.eslintrc.js文件改为.eslintrc.cjs文件 --》具体变化看官网，先按照官网流程走一遍再说。
        4.去官网看怎么安装，配置@babel/eslint-parser，这个主要是用来兼容commonjs与es语法的检测，也就是用这个解析器作为eslint的解析器，因为eslint可以自配置解析器。


## vscode的配置文件：

    1、package.json 文件，这个是npm的管理第三方包的配置文件，同时也是管理整个项目运行环境的文件。
        这个json里的type="module"，那么会默认项目下所有 JS 文件为 ESM，type只能设置一个值，也可以设置所有js文件为commonJS文件。
        如果报错：文件是 CommonJS 模块; 它可能会转换为 ES 模块。ts(80001）
                那么就是你设置了type="module"，然后你的js文件又使用了commonJS的语法，所以就会报错，因为需要使用es6的语法才可以。
            解决：在js文件中改为使用es6的语法，或者把文件后缀名改为.cjs，表示这是一个commonJS语法的js文件。

    2、.eslintrc.js文件，这个是eslint插件的配置文件，用来检查语法错误和小弹窗给出建议的，默认这个文件不会创建，需要你手动创建。
        然后你可以在.eslintrc.js文件中自定义配置语法规则，规则代码怎么写才算规范。

    3、babel.config.cjs文件，这个是你安装babel插件的时候生成的配置文件，babel插件主要用于es语法去兼容commonJS的语法，
        Babel会在以下情况下转换ES6+代码：
            1.在构建过程中：如果您使用Webpack、Gulp或其他构建工具来打包和压缩JavaScript代码，则可以配置这些工具以使用Babel进行转换。
            2.在运行时：如果您使用Node.js或浏览器环境来运行JavaScript代码，则可以使用@babel/polyfill库来提供对ES6+功能的支持。
            3.在VS Code中，您可以安装“Babel JavaScript”插件，并启用其自动保存功能，以便在保存文件时自动转换ES6+代码。(或者在编辑时提示)


## npm命令：
    1、npm是node.js管理整个工程的终端工具，同时也是插件，用例管理node.js的第三方包。
    npm insatll     //根据package.json安装插件
    npm install 插件    //安装插件
    npm ls //查看当前项目安装了多少插件(node包)。
    npm uninstall xx插件    //卸载xx插件。
    npm uninstall xx插件 --legacy-peer-deps //--legacy-peer-deps表示忽略依赖冲突
    npm cache clean --force     //实际上是清理 _chcache文件夹
    npm install --force //一个模块不管是否安装过，npm 都要强制重新安装

## linux命令：
    sudo chown -R 目录路径  //更改某个目录或文件关联的用户名和用户组，可以用来提高权限，-R表示包括所有子目录。
            当npm命令权限不够的时候可以执行sudo chown -R 501:20 "/Users/ctch/.npm" //20是关联组id
    
    chmod -R 777 目录路径   //用来修改某个目录或文件的访问权限。-R遍历所有子目录均生效。777是用户权限代码，具体百度。
