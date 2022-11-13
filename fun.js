/* 可选参数和默认参数
可选参数
在 TypeScript 函数里，如果我们定义了参数，则我们必须传入这些参数，除非将这些参数设置为可选，可选参数使用问号标识 ？。 */
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result1 = buildName("Bob"); // 正确
//let result2 = buildName("Bob", "Adams", "Sr.");  // 错误，参数太多了
var result3 = buildName("Bob", "Adams"); // 正确
/* 剩余参数
剩余参数可以传入0-N个参数
有一种情况，我们不知道要向函数传入多少个参数，这时候我们就可以使用剩余参数来定义。

剩余参数语法允许我们将一个不确定数量的参数作为一个数组传入。
*/
function buildName2(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    console.log(restOfName); //restOfName 是一个数组
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName2("Joseph", "Samuel", "Lucas", "MacKinzie");
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("和为：", sum);
}
addNumbers();
addNumbers(1);
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);
/*
匿名函数
匿名函数是一个没有函数名的函数。

匿名函数在程序运行时动态声明，除了没有函数名外，其他的与标准函数一样。

我们可以将匿名函数赋值给一个变量，这种表达式就成为函数表达式。
*/
var msg = function () {
    console.log("无参数匿名函数");
};
msg();
//有参数匿名函数
var add = function (n1, n2) {
    return n1 + n2;
};
console.log(add(1, 8));
/* 匿名函数自调用 */
(function () {
    console.log("匿名函数自调用");
})();
/*
构造函数
TypeScript 也支持使用 JavaScript 内置的构造函数 Function() 来定义函数：
构造函数不知道什么时候用
*/
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
console.log(x);
/*
Lambda 函数
Lambda 函数也称之为箭头函数。

箭头函数表达式的语法比函数表达式更短。
*/
var foo = function (x) { return 10 + x; };
console.log(foo(100)); //输出结果为 110
var foo2 = function (x) {
    x = 10 + x;
    console.log(x);
};
foo2(100);
var func = function (x) {
    if (typeof x == "number") {
        console.log(x + " 是一个数字");
    }
    else if (typeof x == "string") {
        console.log(x + " 是一个字符串");
    }
};
func(12);
func("Tom");
/* 单个参数 () 是可选的：*/
var display = function (x) {
    console.log("输出为 " + x);
};
display(12);
// 无参数时可以设置空括号：
var disp = function () {
    console.log("Function invoked");
};
disp();
function disp2(x, y) {
    console.log(x);
    console.log(y);
}
disp2("abc");
disp2(1, "xyz");
