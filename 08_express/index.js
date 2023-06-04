const express = require("express");
const path = require("path");
const app = express();
// 创建一个数组用来存储用户信息
const USERS = [
  {
    username: "admin",
    password: "123456",
    nickname: "超级管理员",
  },
  {
    username: "sunwukong",
    password: "654321",
    nickname: "齐天大圣",
  },
];
// 配置静态资源的路径
// public <=> http://localhost:3000
app.use(express.static(path.resolve(__dirname, "./public")));
// 引入解析请求体的中间件
app.use(express.urlencoded());
app.post("/login", (req, res) => {
  // 通过req.body来获取post请求的参数（请求体中的参数）
  //   默认情况下express不会自动解析请求体，需要通过中间件来为其增加功能
  // console.log(req.body);
  // res.send("<h1>post请求已收到</h1>");
  const username = req.body.username;
  const password = req.body.password;
  // 获取到用户名和密码后，需要根据用户名到用户信息的数组中查找用户
  /* for (const USER of USERS) {
    // console.log(USER);
    if (USER.username === username) {
      // 此时说明用户存在，接下来检查用户的密码
      if (USER.password === password) {
        // 信息正确，登录成功
        res.send(`<h1>登陆成功，欢迎回来，${USER.nickname}</h1>`);
        return;
      }
    }
  }
  res.send(`<h1>登陆失败，请重试</h1>`); */
  const loginUser = USERS.find((item) => {
    return item.username === username && item.password === password;
  });
  // console.log(loginUser);
  if (loginUser) {
    res.send(`<h1>登陆成功，欢迎回来，${loginUser.nickname}</h1>`);
  } else {
    res.send(`<h1>登陆失败，请重试</h1>`);
  }
  /* if (username === "admin" && password === "123456") {
    res.send("<h1>登陆成功</h1>");
  } else {
    res.send("<h1>登陆失败，请重试</h1>");
  } */
});
app.use("/register", (req, res) => {
  // 获取用户输入的数据
  // console.log(req.body);
  const { username, password, repwd, nickname } = req.body;
  // console.log(username, password, repwd, nickname);
  // 验证数据是否正确，略...
  // 只验证用户名是否存在
  const USER = USERS.find((item) => {
    return item.username === username || item.nickname === nickname;
  });
  // console.log(USER);
  if (!USER) {
    // 进入判断说明用户名不存在
    USERS.push({
      username,
      password,
      nickname,
    });
    res.send("<h1>恭喜你，注册成功</h1>");
  } else {
    if (USER.username === username) {
      res.send("<h1>用户名已存在</h1>");
    } else {
      res.send("<h1>昵称已存在</h1>");
    }
  }
  // res.send("测试");
});
app.listen(3000, () => {
  console.log("服务器启动");
});

// 当我们使用表单提交数据时，一定是优先使用post请求，只有当post不能使用时，才会选择get请求。
