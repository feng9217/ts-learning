"use strict";
class Cat {
    // 构造函数 在对象创建时调用
    constructor(name, age) {
        // 在实例方法中 this就表示当前的实例
        console.log(this);
        this.name = name;
        this.age = age;
    }
    miao() {
        console.log(this.name + 'miaomiaomiao');
    }
}
// const big_baby = new Cat('米酥', 4)
// const little_baby = new Cat('媚娘', 3.5)
// console.log(big_baby, little_baby)
// little_baby.miao()
