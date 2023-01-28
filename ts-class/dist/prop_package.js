"use strict";
// 属性封装
(() => {
    class Person {
        constructor(name, age) {
            this.name = name;
            this._age = age;
        }
        // 等价于上面的声明属性和构造函数
        // constructor(private name: string, private _age:number) {}
        // private的属性可以通过暴露的方法进行修改
        getName() {
            return this.name;
        }
        setName(value) {
            this.name = value;
        }
        // getAge() {
        //     return this.age
        // }
        // setAge(value: number) {
        //     if (value < 1) return
        //     this.age = value
        // }
        // TS中自带getter和setter方法
        get age() {
            return this._age;
        }
        set age(value) {
            if (value < 1)
                return;
            this._age = value;
        }
    }
    const per = new Person('小明', 7);
    console.log(per);
});
