// 接口
// 主要是用来定义一个类(对象)的结构
(() => {
    type myType = {
        name: string,
        age: number
    }

    // 和上面type的定义等效
    // 接口用来定义一个类结构, 用来定义一个类中应该包含哪些属性和方法
    // 同时接口也可以当成类型声明去使用
    // 和type不同 接口可以重复声明 且是concat关系不是覆盖关系
    // 且接口可以在定义的时候去限制类的结构

    interface myInterface {
        name: string
        age: number
    }

    const obj: myType = {
    // const obj: myInterface = {
        name: 'sss',
        age: 23
    }

    // 只定义结构 不考虑实际值/方法
    interface myInter {
        name: string
        sayHello(): void // 只能定义一个抽象方法, 不能有实际的值
    }
    
    // 定义类时, 可以使类去实现一个接口
    // 定义了一个规范 满足在特点场景中各类能正常使用
    class myClass implements myInter {
        name: string
        constructor(name: string) {
            this.name = name
        }
        sayHello(): void {
            console.log('hi')
        }
    }
})