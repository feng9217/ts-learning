// 立即执行函数 独立作用域 所以不会引发同目录下的冲突
(() => {
    class Animal{
        name: string
        age: number
        // 构造函数 在对象创建时调用
        constructor(name: string, age: number) {
            // 在实例方法中 this就表示当前的实例
            console.log(this)
            this.name = name
            this.age = age
        }
        sayHello() {
            console.log('叫')
        }
    }
    // animal是父类 cat是子类 子类继承父类
    // 使用继承后 子类会拥有父类所有的方法和属性
    class Cat extends Animal{
        sayHello() {
            console.log(this.name + 'miaomiaomiao')
        }
        miao() {
            console.log('老妈上钟啦')
        }
    }
    const big_baby = new Cat('米酥', 4)
    console.log(big_baby)
    big_baby.sayHello()
    big_baby.miao()
})()