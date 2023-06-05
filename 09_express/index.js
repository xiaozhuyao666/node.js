// 引入相关包
const express = require("express");
const path = require("path");
// 创建实例
const app = express();
const STUDENT_ARR = [
  {
    name: "孙悟空",
    age: "18",
    gender: "男",
    address: "花果山",
  },
  {
    name: "猪八戒",
    age: "28",
    gender: "男",
    address: "高老庄",
  },
  {
    name: "沙和尚",
    age: "38",
    gender: "男",
    address: "流沙河",
  },
];
let name = "猪八戒";
// 配置express，将ejs设置为默认的模板引擎
app.set("view engine", "ejs");
// 解决使用调试控制台运行路径错误的问题:配置模板的路径,第一个参数表示的是配置的名字，第二个参数是配置的路径
app.set("views", path.resolve(__dirname, "views"));
// 配置静态资源
app.use(express.static(path.resolve(__dirname, "./public")));
// 配置请求体解析
app.use(express.urlencoded({ extended: true }));
// 创建路由
app.get("/hello", (req, res) => {
  res.send("成功连接");
});
app.get("/students", (req, res) => {
  // 希望用户在访问students路由时，可以给用户返回一个显示有学生信息的页面
  /* 
        html页面属于静态页面，创建的时候什么样子，用户看到的就是什么样子，
        不会自动跟随服务器中数据的变化而变化
        希望有一个东西，它长得像一个网页，但它里面可以嵌入变量。
            这个东西在node中被称为模板。
        在node有很多模板引擎，都各具特色，但推荐使用ejs
        特点：  
            1.语法就是html的语法
            2.跟jsp很像
        ejs是node中的一款模板引擎，使用步骤：
            1.安装ejs
            2.配置express的模板引擎为ejs
              app.set("view engine", "ejs");
            3.配置模板路径
              解决使用调试控制台运行路径错误的问题:配置模板的路径,第一个参数表示的是配置的名字，第二个参数是配置的路径
              app.set("views", path.resolve(__dirname, "views"));
            
        注意：模板引擎需要被express渲染后才能使用
    */
  //    res.render()用来渲染一个模板引擎，并将其返回给浏览器,扩展名可省略
  // 第一个参数是指定模板的名字，可以将一个对象作为render的第二参数传递，这样模板中就可以访问到对象中的数据
  /* 
    使用<%= %>输出可以防止xss攻击，因为它可以对传入的特殊符号进行转义， "<" &lt; ">"&gt;输入的是什么最终显示的就是什么
    <%- %>输出不会对传入的数据进行转义。
    <%= %>在ejs中输出内容时，会自动对字符串中的特殊符号进行转义
      这个设计主要是为了避免xss攻击
    <% %> 可以在其中直接编写js代码，js代码会在服务其中执行
  */
  res.render("students.ejs", { name });
});
app.get("/set_name", (req, res) => {
  name = req.query.name;
  res.send("修改成功");
});
// 可以在所有路由的后边配置错误检测中间件
app.use((req, res) => {
  // 只要中间件一执行，说明上面的地址都没有匹配
  res.status(404);
  res.send("<h1>你访问的地址已经飞到外太空了</h1>");
});
// 启动服务器
app.listen(3000, () => {
  console.log("服务器已启动~");
});
