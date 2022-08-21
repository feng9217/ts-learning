// 可以直接使用字面声明类型
var a; // 类似于常量 值不能改变
var b;
var c;
var d; // any 表示任意类型 一个变量设为any后相当于对该变量关闭了ts的类型检测
// 同: let d
var e;
var s;
e = 'hello';
// s = e 如果e是 any 则会把s也带成any 如果是 unknown 则不会改变s的类型
s = e; // 类型断言 s = <string>e
// {} 用来指定对象中可以包含哪些属性 语法: {属性名: 属性值}
// ?: 表示可选属性
// 可包含([propName: string])任意字符串的属性名为 (any)任意类型的属性
// 以下声明为 f 必须包含一个name属性 age属性可选 还能有任意属性
var f;
// 设置函数结构的类型
var g;
g = function (n1, n2) {
    return n1 + n2;
};
// 限制数组中存储的数据类型
var h;
h = ['a', 'b', 'z'];
var i;
// 元组就是固定长度的数组
var j;
// enum 枚举
var k;
k = {
    name: '靓仔',
    gender: 1 // 0和1判断
};
// 可以优化成
var Gender;
(function (Gender) {
    Gender[Gender["Female"] = 0] = "Female";
    Gender[Gender["Male"] = 1] = "Male";
})(Gender || (Gender = {}));
var L;
var m; // 可定义成string或者number
var n; // 要满足两个属性
var o; // 此时和string同等
var p;
var q;
q = '查看 tsc -w 后是否有监视效果';
