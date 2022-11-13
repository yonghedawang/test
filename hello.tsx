const hello1: string = "Hello world!";
console.log(hello1);

class Site {

    //用于标识方法返回值的类型，表示该方法没有返回值。
    name(): void {  
        console.log("void 用于标识方法返回值的类型，表示该方法没有返回值。");
        //return 0; 加了void return 就会报错
    }
}

const obj = new Site();//var let const 均有输出，const是常量
obj.name();