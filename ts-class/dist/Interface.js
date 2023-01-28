"use strict";
// 接口
// 主要是用来定义一个类(对象)的结构
(() => {
    const obj = {
        // const obj: myInterface = {
        name: 'sss',
        age: 23
    };
    // 定义类时, 可以使类去实现一个接口
    // 定义了一个规范 满足在特点场景中各类能正常使用
    class myClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('hi');
        }
    }
})();
