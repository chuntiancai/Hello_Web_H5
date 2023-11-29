module.exports = {  
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-essential"
    ],
    "parser": "@babel/eslint-parser",
    "overrides": [
        //使用多个解析器
        {
            "files": ["*.ts", "*.tsx"],
            "parser": "@typescript-eslint/parser"
        },
        {
            "files": ["*.vue"],
            "parser": "vue-eslint-parser"
        },
        {   
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            // "parserOptions": {
            //     "sourceType": "script"
            // }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",    // 支持es6语法，但并不意味着同时支持新的 ES6 全局变量或类型（比如 Set 等新类型）
        "sourceType": "module",  	// 指定来源的类型，"script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
        "requireConfigFile": false,     //解析器是否需要配置文件
    },
    "plugins": [
        "@typescript-eslint",   //检查ts的语法的插件
        "vue"   //检查vue语法的插件
    ],
    "rules": {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',   //生产环境是否可以有console.log语句
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-empty':'warn',
        // 'eqeqeq':'warn',  // 要求使用 === 和 !== 
        // 'semi': ['error', 'always'] //强制分号结尾
    }
}

/**
 * "parserOptions": {
    "parser": "babel-eslint", // 解析器，默认使用Espree
    "ecmaVersion": 6, // 支持es6语法，但并不意味着同时支持新的 ES6 全局变量或类型（比如 Set 等新类型）
    "sourceType": "module",	// 指定来源的类型，"script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
    // 使用的额外的语言特性
    "ecmaFeatures": {
        "jsx": true, // 启用 JSX，JSX是一种JavaScript的扩展语法，用于在代码中编写类似HTML的结构化标记
        "globalReturn": true, // 允许在全局作用域下使用 return 语句
        "impliedStrict": true, // 启用全局 strict mode (如果 ecmaVersion 是 5 或更高)
        "experimentalObjectRestSpread": true,	// 启用实验性的 object rest/spread properties 支持。(重要：这是一个实验性的功能,在未来可能会有明显改变。 建议你写的规则 不要 依赖该功能，除非当它发生改变时你愿意承担维护成本。)
    } 
}, 
"env": {
    es6: true, // 启用 ES6 语法支持以及新的 ES6 全局变量或类型
    node: true, // Node.js 全局变量和 Node.js 作用域
    browser: true, // 浏览器全局变量
    jquery: true // jQuery 全局变量
},
rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 0,
    'no-irregular-whitespace': 'off'
}
 */
