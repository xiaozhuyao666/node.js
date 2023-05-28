/* 
    定义类的思路：
        1.先把功能都分析清楚了，再动手
        2.写一点想一点，走一步看一步
*/
// 让then支持链式调用
const PROMISE_STATE = {
  PENDING: 0,
  FULFILLED: 1,
  REJECTED: 2,
};
class MyPromise {
  // 创建一个变量用来存储Promise的结果
  #result;
  // 创建一个变量来记录Promise的状态
  #state = PROMISE_STATE.PENDING; //pending 0 fulfilled 1 rejected 2
  // 创建一个变量来存储回调函数
  // 由于回调函数可能有多个，所以直接创建一个数组接收
  #callbacks = [];
  constructor(executor) {
    // 接收一个执行器作为参数
    executor(this.#resolve.bind(this), this.#reject.bind(this)); //调用回调函数
    // bind的作用就是把当前的this锁死，无论怎么调用都是当前的实例对象
    // 调用bind之后，会生成一个新的函数，这个新的函数就是用来绑定this的，但是这个函数并没有调用，
  }
  //   私有的resolve，用来存储成功的数据
  #resolve(value) {
    //放在原型对象中
    //console.log(this);  //是Undefined，下面的函数调用时直接调用的，类中的代码自动执行严格模式，
    //所以在严格模式下this就是undefined，如果通过xxx.resolve()调用this就是xxx
    //console.log("resolve被调用了，value是:", value);
    // 禁止值被修改
    // 如果#state!=0，说明值已经被修改，函数直接返回
    if (this.#state != PROMISE_STATE.PENDING) return;
    this.#result = value;
    this.#state = PROMISE_STATE.FULFILLED; // 表示数据填充成功
    // 当resolve执行时，说明数据已经进入到Promise，需要调用then的回调函数
    // resolve的回调函数，应该放入到微任务队列中执行，而不是直接调用
    queueMicrotask(() => {
      //如果callback为true则不调用callback函数，没有则调用callback函数传参
      // this.#callback && this.#callback(this.#result);
      this.#callbacks.forEach((cb) => {
        cb();
      });
    });
  }
  //   解决this是undefined的方法：
  // // 使用箭头函数，箭头函数本身没有this，所以此时的this就是传进来的实例对象mp
  //   #resolve = ()=>{  //放在对象自身中，有点浪费内存，但并不多（可以忽略）
  //     console.log(this);
  //   }
  //   私有的reject，用来存储拒绝的数据
  #reject(reason) {
    console.log(1);
  }
  // 添加一个用来读取数据的方法
  then(onFulfilled, onRejected) {
    /* 
        谁将成为then返回的新Promise中的数据？？？
            then中回调函数的返回值会成为新的Promise的数据
    */
    return new MyPromise((resolve, reject) => {
      if (this.#state === PROMISE_STATE.PENDING) {
        // 进入判断说明数据还没有进入Promise，resolve还没有被调用，将回调函数设置为callback的值
        // this.#callback = onFulfilled;
        this.#callbacks.push(() => {
          // 把onFulfilled的回调函数作为resolve的参数传入，作为新的Promise的值
          resolve(onFulfilled(this.#result));
        });
      } else if (this.#state === PROMISE_STATE.FULFILLED) {
        /* 
          目前来讲，then只能读取已经存储进Promise的数据，
            而不能读取异步存储的数据
        */
        // onFulfilled(this.#result);
        //console.log(this);
        /* 
          then的回调函数，应该放入到微任务队列中执行，而不是直接调用
        */
        queueMicrotask(() => {
          resolve(onFulfilled(this.#result));
        });
      }
    });
  }
}
const mp = new MyPromise((resolve, reject) => {
  //   console.log("回调函数执行了");
  //resolve("孙悟空");
  // resolve("猪八戒");  //测试多个resolve的值会不会改变
  setTimeout(() => {
    resolve("孙悟空");
  }, 1000);
});
// console.log(mp);
// mp.then((result) => {
//   console.log("读取数据1", result);
// });
// mp.then((result) => {
//   console.log("读取数据2", result);
// });
mp.then((result) => {
  console.log("读取数据1", result);
  return "猪八戒";
}).then((result)=>{
  console.log("读取数据2", result);
  return "沙和尚"
}).then((result)=>{
  console.log("读取数据3", result);
})
// const p = Promise.resolve(1);
// p.then((result)=>{console.log("第一次读",result)});
// p.then((result)=>{console.log("第二次读",result)});
