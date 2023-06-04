// 引入模块
const express = require("express");
const path = require("path");
// 创建实例
const app = express();
// 设置中间件
app.use(express.static(path.resolve(__dirname, "./public")));
// 设置路由
app.get("/login", (req, res) => {
  console.log(req.query.username);
  console.log(req.query.password);
  //   验证密码和用户名是否匹配。使用req.query获取用户名和密码，username和password就是表单提交时的name属性值
  if (req.query.username === "sunwukong" && req.query.password === "123456") {
    res.send("登陆成功");
  } else {
    res.send("登陆失败，请重试");
  }
});
// 启动服务器
app.listen(3000, () => {
  console.log("服务器已经启动");
});
