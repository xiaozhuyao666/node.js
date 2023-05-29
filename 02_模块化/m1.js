let a = 20;
let b = 30;
// console.log("我是m1模块");
/* 
    在定义模块时，模块中的内容默认是不能被外部看到的
        可以通过exports来设置向外部暴露的内容
            访问exports的方式有两种：
                exports
                module.exports
                -当我们在其他模块中引入当前模块时，require函数返回的就是exports
                -可以将希望暴露给外部模块的内容设置为exports的属性
*/
// console.log(module.exports); //{}
// console.log(exports); //{}
// console.log(module.exports === exports); //true
// 根据自己的需求随意编写代码
// 可以根据exports一个一个的导出值
// exports.a = "孙悟空";
// exports.b = "猪八戒";
// exports.c = "唐僧";
// exports.d = {name:"白骨精"}
// exports.e = function fn(){
//     console.log("函数执行了");
// }
// 也可以直接通过module.exports同时导出多个值
// 对象.属性  该对象的时候所有指向该对象的都会受到影响
module.exports = {
    a:"哈哈",
    b:[1,3,5,7],
    c:()=>{
        console.log("函数执行了");
    }
}
// 不能这样写，因为此时exports时变量，当我们修改变量时，只会影响变量自己，对别的变量不会产生影响
// exports = {
//     a:"哈哈",
//     b:[1,3,5,7],
//     c:()=>{
//         console.log("函数执行了");
//     }
// }