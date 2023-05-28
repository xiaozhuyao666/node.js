/*
    进程和线程：
        -进程（厂房）：程序运行的环境
        -线程（工人）：线程实际进行运算的东西
    同步：
        -通常情况下代码都是自上向下一行一行执行的
        -前边的代码不执行，后边的代码也不会执行
        -同步的代码执行会出现阻塞的情况
        -一行代码执行慢会影响到整个程序的执行
    解决同步问题：
        - java python
            -通过多线程解决同步问题
            -缺点：
                -对电脑配置要求比较高，必须能够支持多线程同时运行
                -对代码编写要求比较高，必须编写程序管理这些多线程
        - node.js
            -通过异步方式来解决
            -异步：
                -一段代码的执行不会影响到其他的代码
                -只要是异步方法一定需要一个回调函数
                优点：
                    -不会阻塞其他代码的执行
                    -需要通过回到函数来返回结果
                缺点：
                    -异步的代码无法通过return来设置返回值
                基于回调函数的异步带来的问题：
                    1.代码的可读性差
                    2.可调式性差
                    -解决问题：
                        -需要一个东西，可以代替回调函数来给我们返回结果
                        -Promise横空出世：
                            -Promise是一个可以用来存储数据的对象
                                Promise存储数据的方式比较特殊，这种特殊方式是的Promise可以用来存储异步调用的数据
    现实生活：
        -点菜
        -厨师做菜
        -吃
*/
// console.log("哈哈");
// console.log("嘻嘻");
// console.log("嘿嘿");
function sum(a, b,cb) {
//   const begin = Date.now();
//   while (Date.now() - begin < 10000) {}
//     return a + b;
    setTimeout(() => {
        //return a + b;
      cb(a + b);
    }, 1000);
}
console.log("11111");
// 求123+456的结果与7，8，9，10的相加结果
const result = sum(123, 456, (result) => {
    sum(result,7,(result)=>{
        sum(result,8,(result)=>{
            sum(result,9,(result)=>{
                sum(result,10,(result)=>{
                    console.log(result);
                });
            });
        });
    });
//   console.log(result);
});
// 利用回调函数作为sum函数的参数，在sum函数有结果是通过回调函数传回来
//const result = sum(123, 456);
// console.log(result);
console.log("22222");
