/* TypeScript 遵循强类型，如果将不同的类型赋值给变量会编译错误，如下实例：
var num:number = "hello"     // 这个代码会编译错误
 */
var yourname='老将';
console.log(typeof(yourname));

//类型断言（Type Assertion）
//类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型。

var str = '1' 
var str2:number=<any>str.length;
