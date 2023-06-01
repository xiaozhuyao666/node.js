const fs = require("node:fs/promises");
const path = require("node:path");
/* 
    fs.mkdir() 创建目录
    fs.rmdir() 删除目录
    fs.rm() 删除文件
    fs.rename() 重命名(剪切)
    fs.copyFile() 复制文件(复制)
*/
/* 
    mkdir可以接收一个配置对象作为第二个参数，
        通过这个对象可以对方法的功能进行配置
        recursive 默认值为false
            -设置true以后，会自动创建不存在的上一级目录(递归创建)
    rmdir,rm可以接收一个配置对象作为第二个参数，(但rmdir的这个递归参数将被移除，已被rm替代)
        通过这个对象可以对方法的功能进行配置
        recursive 默认值为false
            -设置true以后，会自动删除多层目录中指定的文件，不删除上一层目录(递归删除，慎用)
*/
// fs.mkdir(path.resolve(__dirname,"./hello/abc"),{recursive:true})
//     .then(()=>{
//         console.log("创建成功");
//     })
//     .catch(()=>{
//         console.log("创建失败");
//     })
// fs.rmdir(path.resolve(__dirname,"./hello/abc"),{recursive:true})
//     .then(()=>{
//         console.log("删除成功");
//     })
//     .catch(()=>{
//         console.log("删除失败");
//     })
// 可以直接给第一个路径选择其他的路径，并重命名文件，相当于剪切文件并重命名。
// fs.rename(
//     path.resolve(__dirname,"./dog.jpg"),
//     path.resolve(__dirname,"./smallDog.jpg")
// ).then(()=>{
//     console.log("重命名成功");
// })
// fs.rm(path.resolve(__dirname,"./hello/hello.js"))
//     .then(()=>{
//         console.log("删除成功");
//     })
//     .catch(()=>{
//         console.log("删除失败");
//     })
// 注意第二个复制到的路径也要加要复制的文件名
fs.copyFile(
    path.resolve(__dirname,"./hello.txt"),
    path.resolve(__dirname,"./hello/hello.txt"))
    .then(()=>{
        console.log("复制成功");
    })
    .catch(()=>{
        console.log("复制失败");
    })