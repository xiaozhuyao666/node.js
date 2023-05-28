// Promise是一个用来存储数据的对象
// 但是由于Promise存取方式的特殊，所以可以直接将异步调用的结果存储到Promise中
/* const promise = new Promise((resolve, reject) => {
  resolve("周一到周五晚上七点，不见不散");
});
promise.then(result=>{
    console.log(result);
},reason =>{
    console.log("出错了",reason);
})
 */
// promise用来解决回调地狱的问题，下面是回调地狱的简单例子
/* function sum(a, b, cb) {
  setTimeout(() => {
    cb(a + b);
  }, 1000);
}
const result = sum(123, 456, (res) => {
  console.log(res);
}); */
// 使用Promise解决回调地狱的问题
function sum(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}
// 回调地狱
/* sum(123,456).then(result=>{
    sum(result,7).then(result=>{
        sum(result,8).then(result=>{
            console.log(result);
        })
    })
}) */
//链式调用
// sum(123, 456)
//   .then((result) => result + 7)
//   .then((result) => result + 8)
//   .then((result) => console.log(result));
/* 
    Promise中的
        then  <=> then(return new Promise)
        catch
            -这三个方法都会返回一个新的Promise
                promise中会存储回调函数的返回值
        finally
            -finally的返回值，不会存储到新的Promise中
*/
// const promise = new Promise((resolve, reject) => {
//   resolve("周一到周五晚上七点，不见不散");
// });
/* const p2 = promise.then((result) => {
  console.log("回调函数的值", result);
  return "锄禾日当午";
});
const p3 = p2.then((result) => {
  console.log("p2的promise值",result); //此时p2又返回了一个新的promise
  return "汗滴禾下土";
});
p3.then((result) => {
  console.log("p3的promise值",result);  //p3返回的新的promise值就是汗滴禾下土
}); */
/* promise
  .then((result) => {
    console.log("回调函数的值", result);
    return "锄禾日当午";
  })
  .then((result) => {
    console.log("第二个then的值", result);
    return "汗滴禾下土";
  })
  .then((result) => {
    console.log("第三个then的值", result);
  }); */
// setTimeout(() => {
//   console.log(p2);
// }, 1000);
// const p3 = promise.catch();
// const p4 = promise.finally();
// console.log(p2+"\n"+p3+"\n"+p4);
/*  
  对promise进行异步调用时，
    后边的方法(then和catch)读取的上一步的执行结果
      如果上一步的执行结果不是当前想要的结果，则跳过当前的方法
  当promise出现异常时，而整个调用链没有出现catch,则向外抛出异常
*/
// catch
const promise = new Promise((resolve, reject) => {
  reject("周一到周五晚上七点，不见不散");
});
promise
  .then((result) => console.log("第一个then", result))
  .catch((result) => {
    throw new Error("报错了");
    console.log("异常处理", result);
    return "嘻嘻";
  }) //存储的是异常的值，如果没有异常，直接跳过
  .then((result) => console.log("第二个then", result))
  .catch((result) => {
    console.log("出错了", result);
  });
