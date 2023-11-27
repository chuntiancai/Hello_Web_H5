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
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser"
    },
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
    "rules": {
      'vue/multi-word-component-names': "off", //关闭驼峰命名的校验。
      "no-mixed-spaces-and-tabs":0  //tab键符和空格符号可以混合
    }
}
