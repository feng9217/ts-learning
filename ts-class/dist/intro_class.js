"use strict";
class Person {
    constructor() {
        // 定义实例属性
        // 需要实例化才能访问 console.log(man.name)
        this.name = '孙悟饭';
        // readonly 静态只读属性(static readonly)
        this.mankind = '赛亚人';
    }
    sayHello() {
        console.log('hello');
    }
    // 同属性static
    static sayHi() {
        console.log('hi');
    }
}
// 在属性前使用 static 关键词可以定义静态属性/类属性
// 可以直接通过类访问 console.log(Person.age)
Person.age = 8;
const man = new Person();
// console.log(man.name, Person.age)
// man.sayHello()
