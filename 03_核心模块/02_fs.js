const { log } = require("node:console");
const fs = require("node:fs/promises");
const path = require("node:path");
/* 
    fs.readFile() 读取文件
    fs.appendFile() 创建新文件，或将数据添加到已有文件中
    fs.mkdir() 创建目录
    fs.rmdir() 删除目录
    fs.rm() 删除文件
    fs.rename() 重命名
    fs.copyFile() 复制文件
*/
// 如果文件不存在，则在指定目录创建一个文件再添加内容，如果存在，则直接在原文件中添加内容
// fs.appendFile(path.resolve(__dirname,"./hello123.txt"),"\n超哥讲的真不错").then(
//     (r)=>{
//         //console.log(r);  //undefined,由于是添加内容，所以没有返回值
//         console.log("添加成功");
//     }
// )
// 复制一个文件到指定目录
// C:/Users/DZH/Desktop/狗头.jpg
// fs.readFile("C:/Users/DZH/Desktop/狗头.jpg")
//   .then((buffer) => {
//     return fs.appendFile(path.resolve(__dirname, "./dog.jpg"), buffer);
//   })
//   .then(() => {
//     console.log("操作结束");
//   });
