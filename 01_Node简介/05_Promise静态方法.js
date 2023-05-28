/* 
    静态方法：
        Promise.resolve() 创建一个立即完成的Promise
        Promise.reject()  创建一个立即拒绝的Promise
        Promise.all([...])  同时返回多个Promise执行的结果
            其中有一个报错，就返回错误
        Promise.allSettled([...])  同时返回多个Promise执行的结果
            无论成功与否
            返回的是一个数组对象，里面存的是promise的状态，和值，如果是失败或者异常，返回的状态时rejected和reject的值
            {status: 'fulfilled', value: 579}
            {status: 'rejected', reason: '哈哈'}
        Promise.race([...])  返回执行最快的Promise（不考虑对错）
        Promise.any([...])  返回执行最快的完成的Promise（全都是错误或者异常时会返回错误）
*/
/* Promise.resolve(10);
// 等价于下面的new Promise
new Promise((resolve, reject) => {
  resolve(10);
}); */
// Promise.resolve(10).then((result)=>console.log(result));

const { log } = require("console");

// Promise.reject(10).catch((result)=>console.log(result));
function sum(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}
// Promise.all([sum(123, 456), sum(4, 5), sum(1, 2)]).then((r) => console.log(r));
// 有一个错误就返回错误
//Promise.all([sum(123, 456), sum(4, 5),Promise.reject("哈哈"), sum(1, 2)]).then((r) => console.log(r));

/* Promise.allSettled([
  sum(123, 456),
  sum(4, 5),
  Promise.reject("哈哈"),
  sum(1, 2),
]).then((r) => {
  console.log(r);
}); */

/* Promise.race([
    Promise.reject(1111),
    sum(123, 456),
    sum(4, 5),
    sum(1, 2),
]).then(r=>{
    console.log(r);
}).catch(r=>{
    console.log("异常",r);
})
 */


/* Promise.any([Promise.reject(1111), Promise.reject(2222), Promise.reject(3333)])
  .then((r) => {
    console.log(r);
  })
  .catch((r) => {
    console.log("异常", r);
  }); */

Promise.resolve().then(()=>{
    console.log(2222);
})
// console.log(2222);

setTimeout(()=>{
    console.log(1111);
})
// console.log(2222);