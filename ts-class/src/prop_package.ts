// 属性封装
(() => {
    class Person {
        // TS可以在属性前添加属性的修饰符
        // public 修饰的属性可以在任意位置访问(修改) 默认值
        // private 私有属性 只能在类的内部惊醒访问(修改)
        // protected 受保护属性 只能在当前类和当前类的子类中访问(修改) private不能继承 protected能继承
        private name: string
        private _age: number

        constructor(name: string, age: number) {
            this.name = name
            this._age = age
        }

        // 等价于上面的声明属性和构造函数
        // constructor(private name: string, private _age:number) {}

        // private的属性可以通过暴露的方法进行修改
        getName() {
            return this.name
        }
        setName(value: string) {
            this.name = value
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
            return this._age
        }

        set age(value: number) {
            if (value < 1) return
            this._age = value
        }
    }

    const per = new Person('小明', 7)
    console.log(per)
})