"use strict";
// 立即执行函数 独立作用域 所以不会引发同目录下的冲突
(() => {
    class Animal {
        // 构造函数 在对象创建时调用
        constructor(name) {
            // 在实例方法中 this就表示当前的实例
            console.log(this);
            this.name = name;
        }
        sayHello() {
            console.log('叫');
        }
    }
    // animal是父类 cat是子类 子类继承父类
    // 使用继承后 子类会拥有父类所有的方法和属性
    class Dog extends Animal {
        constructor(name, age) {
            super(name); // 表示调用父类的构造函数
            this.age = age;
        }
        sayHello() {
            // 在类的方法中 super表示当前类的父类
            super.sayHello();
        }
    }
    const dog = new Dog('旺财', 6);
    console.log(dog);
    dog.sayHello();
})();
