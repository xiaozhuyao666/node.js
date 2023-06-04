const express = require("express");
const path = require("path");
const app = express();
// 配置静态资源的路径
// public <=> http://localhost:3000
app.use(express.static(path.resolve(__dirname, "./public")));
// 引入解析请求体的中间件
app.use(express.urlencoded());
// 添加一个路由，可以读取get请求的参数
//  /login --> http://localhost:3000/login
app.get("/login", (req, res) => {
  // 获取用户发送的数据
  // 通过req.query来获取查询字符串中的数据
  if (req.query.username === "admin" && req.query.password === "123456") {
    res.send("<h1>登录成功</h1>");
  } else {
    res.send("<h1>登陆失败，请重试</h1>");
  }
});
// req.query查询字符串是按照对象的形式传参，req.params是按照一定顺序传参，类似于数组
// get请求发送参数的第二种方式
// /hello/:id 表示当用户访问 /hello/xxx 就会触发
// 在路径中以冒号命名的部分，我们称为param，在get请求中它可以被解析为请求参数
// param传参一般不会传递特别复杂的参数
app.get("/hello/:name", (req, res) => {
  // 约定优于配置
  //   使用这种路径的写法就相当于事先与浏览器达成约定，每一个参数都要按照路径约定好的顺序传入
  // 可以用过req.params属性来获取这些参数
  console.log(req.params);
  res.send("<h1>这是hello路由</h1>");
});
app.post("/login", (req, res) => {
  // 通过req.body来获取post请求的参数（请求体中的参数）
  //   默认情况下express不会自动解析请求体，需要通过中间件来为其增加功能
  // console.log(req.body);
  // res.send("<h1>post请求已收到</h1>");
  const username = req.body.username;
  const password = req.body.password;
  if (username === "admin" && password === "123456") {
    res.send("<h1>登陆成功</h1>");
  } else {
    res.send("<h1>登陆失败，请重试</h1>");
  }
});
app.listen(3000, () => {
  console.log("服务器启动");
});

// 当我们使用表单提交数据时，一定是优先使用post请求，只有当post不能使用时，才会选择get请求。
