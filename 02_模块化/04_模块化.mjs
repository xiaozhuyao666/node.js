/* 
    默认情况下，node中的模块化标准是CommonJS
        要想使用ES的模块化，可以采用以下两种方案
            1.使用mjs作为扩展名
            2修改package.json，将模块化规范设置为ES模块
                当我们设置"type":"module" 当前项目下所有的js文件都默认为ES module
*/
// console.log(module);
// 打印module报错：module is not defined in ES module scope，说明这个模块化中没有module，此时说明它是一个ES模块



//导入m4模块,ES模块不能省略扩展名(官方标准)
// import "./m4.mjs"
// import {a,b,c} from "./m4.mjs";
// console.log(a,b,c);
// 解构赋值的方法使用as给变量a添加别名；
// import {a as hello,b,c} from "./m4.mjs";
// console.log(hello);
// 导入m4模块的所有导出的模块，使用as作为别名
// 开发时要尽量避免import * 情况，因为在网页上线时需要使用webpack打包工具，
//导入所有（包括用不到的模块），打包时会默认打包所有导入的模块，会增加内存消耗，降低加载性能
// import * as m4 from "./m4.mjs"
// console.log(m4);
// console.log(m4.c);
// 导入模块的默认导出，可以随意命名 
// 也可以同时导出多个，但默认导出不能写在{}里，其他的导出内容要写在{}里
import s,{a,b,c} from "./m4.mjs";
// console.log(s,a);
// 通过ES模块化导入的内容都是常量，不能修改
// ES模块都是运行在严格模块下的
// ES模块化，在浏览器中同样支持，但是通常我们不会直接使用
// 通常都会结合打包工具使用
console.log(c);
// c时一个对象，虽然导入的时候是常量，但对象的内容能够修改
c.name = "沙和尚";
console.log(c);
