/*
在大多数面向对象的编程语言（如 C、C# 和 Java）中，有一种数据类型我们称为枚举 — 简称为 enum。Java 枚举是一种特殊的 Java 类，用于定义常量集合。然而，JavaScript 没有 enum 数据类型，但幸运的是，它们现在在 TypeScript 2.4 版本中可用。

枚举是一组可以采用数字或字符串形式的命名常量。与 TypeScript 中可用的某些类型不同，枚举是经过预处理的，不会在编译时或运行时进行测试。


*/
//window.alert("enum");
//数字枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var blue = Color.Blue;
console.log("Color", Color);
console.log("Color.0", Color['0']);
console.log(blue); // 输出 2
//字符串枚举
var State;
(function (State) {
    State["on"] = "ON";
    State["off"] = "OFF";
})(State || (State = {}));
console.log(State);
console.log(State.on);
var StringState;
(function (StringState) {
    StringState["success"] = "\u6210\u529F";
    StringState["fail"] = "\u5931\u8D25";
})(StringState || (StringState = {}));
console.log('字符串枚举');
console.log(StringState); // { success: '成功', fail: '失败' }
console.log(0 /* Month.Jan */); // 0
//计算枚举
var Weekend;
(function (Weekend) {
    Weekend[Weekend["Friday"] = 3] = "Friday";
    Weekend[Weekend["Saturday"] = getDate('TGIF')] = "Saturday";
    Weekend[Weekend["Sunday"] = Weekend.Friday * Weekend.Saturday * 40] = "Sunday";
})(Weekend || (Weekend = {}));
function getDate(day) {
    if (day === 'TGIF') {
        return 3;
    }
}
console.log('计算枚举');
console.log(Weekend.Saturday); // 3
console.log(Weekend.Sunday); // 120
/*
异构枚举
TypeScript 还允许混合字符串和数字，称为异构枚举值：
*/
var WeekendYigou;
(function (WeekendYigou) {
    WeekendYigou[WeekendYigou["Day0"] = 0] = "Day0";
    WeekendYigou["Friday"] = "FRIDAY";
    WeekendYigou["Saturday"] = "0";
    WeekendYigou[WeekendYigou["Sunday"] = 2] = "Sunday";
})(WeekendYigou || (WeekendYigou = {}));
console.log("\n异构枚举\n");
console.log(WeekendYigou);
/*
{
  '1': 'Saturday',
  '2': 'Sunday',
  Friday: 'FRIDAY',
  Saturday: 1,
  Sunday: 2
}
*/ 
