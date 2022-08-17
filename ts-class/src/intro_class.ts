class Person{
    // 定义实例属性
    // 需要实例化才能访问 console.log(man.name)
    name: string = '孙悟饭'
    // 在属性前使用 static 关键词可以定义静态属性/类属性
    // 可以直接通过类访问 console.log(Person.age)
    static age: number = 8
    // readonly 静态只读属性(static readonly)
    readonly mankind: string = '赛亚人'

    sayHello() {
        console.log('hello')
    }
    // 同属性static
    static sayHi() {
        console.log('hi')
    }
}

const man = new Person()

// console.log(man.name, Person.age)
// man.sayHello()