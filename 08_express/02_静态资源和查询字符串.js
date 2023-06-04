// 引入服务器
const { log } = require("console");
const express = require("express");
// 创建服务器的实例
const app = express();
// 引入路径
const path = require("path");
/* 
    目前，服务器代码修改后必须要重启一遍才能生效，
        我们希望有一种方式，可以自动监视代码的修改，
        代码修改以后可以自动重启服务器
    要实现这个功能，我们需要安装一个模块 nodemon
        使用方式：
            1.全局安装
                npm i nodemon -g
                yarn global add nodemon
                使用yarn global bin 查看yarn 全局安装的目录路径
                    -通过yarn进行全局安装时，默认yarn的目录并不在环境变量中
                    -需要手动将路径添加到环境变量中
                -启动：
                    nodemon //运行index.js
                    nodemon xxx.js  //运行指定的js 
            2.在项目中安装
                开发依赖（与项目无关）
                    npm i nodemon -D
                    yarn add nodemon -D
                
                    -启动(npx:执行node模块)
                        npx nodemon
*/
// use 中间件
/* 
    服务器中的代码对外部来说都是不可见的，
        所以我们写的html网页，浏览器无法直接访问，
        如果希望浏览器可以访问，则需要将页面所在的目录设置为静态资源目录
*/
// 设置static中间件以后，浏览器的访问时，会自动去public目录中寻找可用资源
app.use(express.static(path.resolve(__dirname, "./public")));
// 配置路由
// 由于设置的根目录会默认找index.html/index.js/index.css，且会向下（即子目录寻找），
// 并且中间件在路由前面，已经将public设置为静态目录，所以直接写根目录浏览器便可访问到index.html网页
app.get("/", (req, res) => {
  res.send("这是hello路由!");
  /* 
        希望用户返回根目录时，可以给用户返回一个网页
*/
  //   res.send(`
  //     <!doctype html>
  //     <html>
  //         <head>
  //             <meta charset ='utf-8'>
  //             <title>这是一个网页</title>
  //         </head>
  //         <body>
  //             <h1>这是网页的标题</h1>
  //         </body>
  //     </html>
  //     `);
});
app.get("/login", (req, res) => {
  // 获取到用户输入的用户名和密码
  //   req.query 表示查询字符串中的请求参数
  //   console.log(req.query);
  console.log(req.query.username);
  console.log(req.query.password);
  //   验证用户输入的用户名和密码是否正确
  if (req.query.username === "sunwukong" && req.query.password === "123123") {
    res.send("<h1>登录成功!</h1>");
  } else {
    res.send("<h1>用户名或密码错误，请重试!</h1>");
  }
  console.log("请求已经收到~");
  res.send("<h1>登陆成功！</h1>");
});
// 启动服务器
app.listen(3000, () => {
  console.log("服务器已启动~");
});
