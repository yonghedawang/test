/* Any 类型
任意值是 TypeScript 针对编程时类型不明确的变量使用的一种数据类型，它常用于以下三种情况。

1、变量的值会动态改变时，比如来自用户的输入，任意值类型可以让这些变量跳过编译阶段的类型检查，示例代码如下： */
//let x: any = 1;    // 数字类型
var x = 1;
x = 'I am who I am'; // 字符串类型
x = false; // 布尔类型
console.log(x);
// 改写现有代码时，任意值允许在编译时可选择地包含或移除类型检查，示例代码如下：
// let x: any = 4;
// x.ifItExists();    // 正确，ifItExists方法在运行时可能存在，但这里并不会检查
// x.toFixed();    // 正确
// 定义存储各种类型数据的数组时，示例代码如下：
// let arrayList: any[] = [1, false, 'fine'];
// arrayList[1] = 100;
