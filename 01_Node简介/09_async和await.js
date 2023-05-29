/* 
    nodejs文档：
        https://nodejs.dev/en/
    async:（异步的）
        通过async可以快速地创建异步函数：
            异步函数的返回值会自动封装到一个Promise中返回
        在async声明的异步函数中，我们可以使用await关键字来调用异步函数
*/
// 使用传统Promise创建异步函数
// function fn() {
//   return Promise.resolve(10);
// }
// fn().then((r) => {
//   console.log(r);
// });
// 使用async创建异步函数，两者功能等价，返回的也是一个Promise
// async function fn2() {
//   return 10;
// }
// fn2().then((r) => {
//   console.log(r);
// });
function sum(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
}
/* 
    Promise解决了异步调用中回调函数的问题,
        虽然链式调用解决了回调地狱，但是链式调用太多以后还是不太好看
        想以同步的方式调用异步的代码
*/
async function fn3() {
  //   sum(123, 456)
  //   .then((r) => sum(r,7))
  //   .then((r)=>sum(r,8))
  //   .then((r)=>console.log(r));
  //当我们通过哟await调用异步函数时，它会暂停代码的运行
  //直到异步代码有结果时，才会将结果返回
  //注意 await只能用于 async 声明的异步函数中，或者ES模块的顶级作用域中
  //await会阻塞代码，但只是阻塞这个异步函数内部的代码，不会影响外部的代码
  //当await在等待结果时，它所在的这个异步函数就会被进程挂起，不会影响外部代码的执行。
  //   console.log(result);
  //   console.log(123);
  //   console.log(456);
  //   console.log(789);
  //由于async中没有处理异常的方法，所以要使用try{}catch{}来处理异常
  try {
    let result = await sum(123, 456);
    result = await sum(result, 8);
    result = await sum(result, 9);
    console.log(result);
  } catch (Error) {
    console.log("异常");
  }
}
// fn3();
//console.log("全局中的输出");
// 如果async声明的函数中没有写await，那么它里面的代码就会依次执行(与普通同步函数没有什么区别，只是会返回一个Promise)
/* async function fn4() {
  console.log(1);
  console.log(2);
  console.log(3);
}
// fn4();
function fn5() {
  return new Promise(resolve => {
    console.log(1);
    console.log(2);
    console.log(3);
    resolve();
  });
}
fn5(); 
//fn4与fn5等价
*/
// async function fn6() {
//   console.log(1);
//   /* 
//         当我们使用await调用函数后，当前函数后边的所有代码
//             会在当前函数执行完毕后，被放入到微任务队列中
//     */
//   await console.log(2);
//   // await后边的所有代码都会被放入到微任务队列中执行
//   console.log(3);
// }
// fn6();
// console.log(4);
/* function fn7() {
  return new Promise((resolve) => {
    console.log(1);
    //   加了await
    // 每增加一个await相当于把它后面的代码在普通同步函数中加个then
    console.log(2);
    resolve();
  }).then((r) => console.log(3));
}
fn7();
console.log(4); */
// await只能在async函数中或者ES模块中才能生效
// async function fn8(){
//     await console.log(123);
// }
// fn8();
// 立即执行函数
(async() =>{
  await console.log("哈哈");
})();