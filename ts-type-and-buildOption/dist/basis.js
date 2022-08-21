// 生命一个变量 同时制定它的类型为number
var a1;
// 在以后使用过程中 a的值 只能是数字
a1 = 10;
a1 = 30;
// a = 'yeah'
// let b: boolean = true;
var b1 = false; // 声明和赋值同时进行 则ts会自动对变量进行类型检测
// b = 'hello'
var c1;
function sum(a, b) {
    return a + b;
}
console.log(sum(a1 = 123, c1 = 456));
