/*
在大多数面向对象的编程语言（如 C、C# 和 Java）中，有一种数据类型我们称为枚举 — 简称为 enum。Java 枚举是一种特殊的 Java 类，用于定义常量集合。然而，JavaScript 没有 enum 数据类型，但幸运的是，它们现在在 TypeScript 2.4 版本中可用。

枚举是一组可以采用数字或字符串形式的命名常量。与 TypeScript 中可用的某些类型不同，枚举是经过预处理的，不会在编译时或运行时进行测试。


*/
//window.alert("enum");
//数字枚举
enum Color { Red, Green, Blue };
let blue: Color = Color.Blue;
console.log("Color", Color);
console.log("Color.0", Color['0'])
console.log(blue);    // 输出 2

//字符串枚举
enum State {
    on = 'ON',
    off = 'OFF'
}
console.log(State);
console.log(State.on);


enum StringState {
    success = '成功',
    fail = '失败'
}
console.log('字符串枚举');
console.log(StringState) // { success: '成功', fail: '失败' }

//常量枚举
//常量枚举其实就是在 enum关键字前使用 const 修饰符。它会在编译阶段被移除。
const enum Month {
    Jan,
    Feb,
    Mar
}

console.log(Month.Jan) // 0


//计算枚举
enum Weekend {
    Friday = 3,
    Saturday = getDate('TGIF'),
    Sunday = Friday * Saturday * 40
}

function getDate(day: string): number {
    if (day === 'TGIF') {
        return 3
    }
}
console.log('计算枚举');
console.log(Weekend.Saturday); // 3
console.log(Weekend.Sunday); // 120

/*
异构枚举
TypeScript 还允许混合字符串和数字，称为异构枚举值：
*/
enum WeekendYigou {
    Day0 ,
    Friday = 'FRIDAY',
    Saturday = '0',
    Sunday = 2
  }
  console.log("\n异构枚举\n");
  console.log(WeekendYigou)
  
  /*
  {
    '1': 'Saturday',
    '2': 'Sunday',
    Friday: 'FRIDAY',
    Saturday: 1,
    Sunday: 2
  }
  */