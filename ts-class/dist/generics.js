"use strict";
// 泛型
// 定义函数或者类时 遇到类型不明确的 就可以使用泛型
// 不使用any是避免类型检查被跳过
(() => {
    // T就表示任意类型
    // 第一个参数和返回值类型相同
    function fn(a) {
        return a;
    }
    fn(10); // 不指定泛型 ts可以自动推断 但不是都能正确
    fn('hello'); // 指定泛型
    // 泛型可以指定多个
    function fn2(a, b) {
        console.log(b, '=====');
        return a;
    }
    fn2(123, 'hello');
    // 指定泛型范围 必须实现inter接口(必须要有length属性)
    // 泛型T必须是inter的实现类(子类)
    function fn3(a) {
        return a.length;
    }
    fn3('123');
    class myClass {
        constructor(name) {
            this.name = name;
        }
    }
    const mc = new myClass('孙悟空');
})();
