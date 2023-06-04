/* 
    express 是node的服务器软件
        通过express可以快速地在node中搭建一个web服务器
    -使用步骤：
        1.创建并初始化项目
            yarn init -y
        2.安装express
            yarn add express
        3.创建index.js并编写代码 
    -端口号
        是总服务器根据端口号选择相应的服务器对访问者进行服务
*/
// 引入express
const express = require("express");
// 获取服务器的实例(对象)
const app = express(); //不用加new
// 启动服务器
// app.listen(端口号) 用来启动服务器
// 服务器启动后，我们便可以通过3000端口来访问了
// 协议名://ip地址:端口号/路径
// http://localhost:3000
// http://127.0.0.1:3000
app.listen(3000, () => {
  console.log("服务器启动~~~");
});

/* 
    如果还希望服务器可以正常访问，则需要为服务器设置路由
        路由可以根据不同的请求方式和请求地址来处理用户的请求
        app.METHOD(...)
            METHOD 可以是 get 或 post
    中间件
        -在express我们使用app.use来定义一个中间件
            中间件的作用和路由很像，用法很像
            但是路由不区分请求的方式，只看路径
            get和post请求都会从这里经过
            路径只匹配以它的当前路径以及下面的路径
    -和路由的区别
        1.会匹配所有请求
        2.路径设置的是父目录
    中间件的作用：
        当多个路由都要做同一件事时，可以设置一个中间件来做这件事，然后再决定是否让请求访问其他的路由器;
        例如：权限检查：路由a、b、c都要对发送过来的请求做权限检查，以便过滤掉没有权限的用户，此时便可以使用一个中间件
        专门用来做权限检查，让所有路由发送过来的请求都检查一遍，没有权限的则过滤掉，由权限的返回到发送过来的路由中。
*/
// next() 是回调函数的第三个参数，它是一个函数，调用函数后，可以触发后续的中间件
// next() 不能在相应处理完毕后调用
// app.use("/",(req, res, next) => {
//   console.log("111", Date.now());
//   res.send("<h1>111</h1>");
//   //   next(); //放行，传给下个中间件
// });
/* app.use((req, res,next) => {
  console.log("222", Date.now());
  //   res.send("<h1>222</h1>");
  next();//放行，传给下个中间件
});
app.use((req, res) => {
  console.log("333", Date.now());
  res.send("<h1>333</h1>");
}); */

// 在服务器中修改代码后，必须重启服务器，修改后的代码才能生效
// http://localhost:3000
// 路由的回调函数执行时，会接收到三个参数
// 第一个参数 request 第二个 response
// "/" 表示根目录，当有人向根目录发送get请求时调用回调函数
app.get("/", (req, res) => {
  console.log("有人访问我了~");
  // 在路由中，应该做两件事
  // 读取用户的请求(request)
  // req 表示的是用户的请求信息，通过req可以获取用户传递的数据
  //console.log(req); //打印用户的请求信息
  //console.log(req.url);  //打印用户的根目录
  // 根据用户的请求返回响应(response)
  // res表示的是服务器发送给客户端的响应信息
  // 通过res来向客户端返回数据
  //sendStatus() 向客户端发送响应状态码
  // status()  用来设置相应状态码，但并不发送给客户端
  // send() 设置并发送响应体
  // res.sendStatus(404);
  res.status(200);
  res.send("<h1>这是我的第一个服务器</h1>");
});
