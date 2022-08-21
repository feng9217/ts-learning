// 可以直接使用字面声明类型

let a: 10; // 类似于常量 值不能改变

let b: "male" | "female"

let c: boolean | string

let d: any // any 表示任意类型 一个变量设为any后相当于对该变量关闭了ts的类型检测
// 同: let d

let e: unknown

let s: string
e = 'hello'
// s = e 如果e是 any 则会把s也带成any 如果是 unknown 则不会改变s的类型
s = e as string // 类型断言 s = <string>e

// {} 用来指定对象中可以包含哪些属性 语法: {属性名: 属性值}
// ?: 表示可选属性
// 可包含([propName: string])任意字符串的属性名为 (any)任意类型的属性
// 以下声明为 f 必须包含一个name属性 age属性可选 还能有任意属性
let f: {name: string, age?: number, [propName: string]: any}

// 设置函数结构的类型
let g: (a: number, b: number) => number
g = function(n1: number, n2: number) {
    return n1 + n2
}

// 限制数组中存储的数据类型
let h: string[]
h = ['a', 'b', 'z']
let i: Array<number>

// 元组就是固定长度的数组
let j: [string, string]

// enum 枚举
let k: {name: string, gender: 0 | 1}
k = {
    name: '靓仔',
    gender: 1 // 0和1判断
}
// 可以优化成
enum Gender{
    Female = 0,
    Male = 1
}
let L: {name: string, gender: Gender}

let m: string | number // 可定义成string或者number
let n: { name: string } & { age: number } // 要满足两个属性

// 类型别名
type myType = string
let o: myType // 此时和string同等
type customType = 1 | 2 | 3 | 4
let p: customType

let q: String
q = '查看  tsc -w 后是否有监视效果'