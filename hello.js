var hello1 = "Hello world!";
console.log(hello1);
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log("看不懂，伟大写个void");
    };
    return Site;
}());
var obj = new Site(); //var let const 均有输出，const是常量
obj.name();
