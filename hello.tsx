const hello1: string = "Hello world!";
console.log(hello1);

class Site {
    name(): void {  //:void 可有可无
        console.log("看不懂，伟大写个void");
    }
}

const obj = new Site();//var let const 均有输出，const是常量
obj.name();