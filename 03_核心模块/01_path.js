/* 
    path
        -表示的路径
        -通过path可以获取各种路径
        -要使用path，需要先对其进行引入
        -方法：
            path.resolve([...paths])
                -用来生成一个绝对路径
                    相对路径： ./xxx  ../xxx   xxx
                    绝对路径：
                        -在本地计算机
                            C:\xxx
                        -在网络中
                            http://www.xxxxx/...
                            https://www.xxx/...
        -如果直接调用resolve，则返回当前的工作目录
        -在调试控制台执行：
            C:\Program Files\nodejs\node.exe .\03_包管理器\01_path.js
            C:\Users\DZH\Desktop\node

        -在终端执行：
            PS C:\Users\DZH\Desktop\node\03_包管理器> node .\01_path.js
            C:\Users\DZH\Desktop\node\03_包管理器
            -注意：通过不同的方式执行代码时，它的工作目录有可能是发生变化的。
        -如果将一个相对路径作为参数，则resolve会自动将其转换为绝对路径
            此时根据工作目录不同，它所产生的绝对路径也不同
        -一般会将一个绝对路径作为第一个参数，一个相对路径为第二个参数
            这样他会计算出最终的路径

*/
const path = require("node:path");
// console.log(path);
const result = path.resolve();
// console.log(result);
const result2 = path.resolve("./hello.js");
// console.log(result2);
// 调试控制台： C:\Users\DZH\Desktop\node\hello.js 终端：C:\Users\DZH\Desktop\node\03_包管理器\hello.js
const result3 = path.resolve(
  "C:/Users/DZH/Desktop/node/03_包管理器",
  "./hello.js"
);
// console.log(result3);
// C:\Users\DZH\Desktop\node\03_包管理器\hello.js
const result4 = path.resolve(
  "C:/Users/DZH/Desktop/node/03_包管理器",
  "../hello.js"
);
// console.log(result4);
// C:\Users\DZH\Desktop\node\hello.js
// 最终形态
// 以后在使用路径时，尽量通过path.resolve()来生成路径
const result5 = path.resolve(__dirname, "./hello.js");
// console.log(result5);
/* 
    fs (File System)
        -fs用来帮助node来操作磁盘中的文件
        -文件操作也就是所谓的IO操作，Input , Output
        -使用fa模块同样要先进行引用

        fs.readFileSync()是同步的读取文件的方法，会阻塞后边代码的执行
            当我们通过fs模块读取磁盘中的数据时，读取到的数据总会以Buffer(缓冲区)对象的形式返回
            Buffer是一个临时用来存储数据的缓冲区
        fs.readFile()是异步的读取文件的方法
            
*/
// const fs = require("node:fs");
// const { buffer } = require("stream/consumers");
// 在node中写代码时使用相对路径不安全，尽量使用绝对路径
// const buf = fs.readFileSync("./hello.txt");
// const buf = fs.readFileSync(path.resolve(__dirname, "./hello.txt"));
// 将数据转换为字符串输出
// console.log(buf.toString());

// fs.readFile()是异步的读取文件的方法
// fs.readFile(path.resolve(__dirname, "./hello.txt"), (err, buffer) => {
//   if (err) {
//     console.log("出错了");
//   } else {
//     console.log(buffer.toString());
//   }
// });

/* 
    Promise版本的方法
*/
const fs = require("node:fs/promises");
// fs.readFile(path.resolve(__dirname, "./hello.txt"))
//   .then((buffer) => {
//     console.log(buffer.toString());
//   })
//   .catch((err) => {
//     console.log("出错了");
//   });
async () => {
  try {
    const buffer = await fs.readFile(path.resolve(__dirname, "./hello.txt"));
    console.log(buffer.toString());
  } catch(err){
    console.log("出错了");
  }
};
