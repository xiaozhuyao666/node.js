const PROMISE_STATE = {
  PENDING: 0,
  FULFILLED: 1,
  REJECT: 2,
};
class TestPromise {
  #result;
  #callbacks = [];
  #state = PROMISE_STATE.PENDING;
  constructor(executor) {
    executor(this.#resolve, this.#reject); //此时executor是传入的回调函数，要调用回调函数
    //构造函数中的this就是当前创建的实例，这里就是使用回调函数的实参调用私有函数#resolve和#reject
  }
  #resolve = (value) => {
    if (this.#state !== PROMISE_STATE.PENDING) return;
    this.#result = value;
    this.#state = PROMISE_STATE.FULFILLED;
    queueMicrotask(() => {
      this.#callbacks.forEach((cb) => {
        cb();
      });
    });
  };
  #reject() {}
  then(onFulfilled, onRejected) {
    return new TestPromise((resolve, reject) => {
      if (this.#state === PROMISE_STATE.PENDING) {
        this.#callbacks.push(() => {
          resolve(onFulfilled(this.#result));
        });
      } else if (this.#state === PROMISE_STATE.FULFILLED) {
        queueMicrotask(() => {
          resolve(onFulfilled(this.#result));
        });
      }
    });
  }
}
// 这个回调函数是类中构造函数的实参
const tp = new TestPromise((resolve, reject) => {
  resolve("孙悟空");
});
// console.log(tp);
// let r = tp.then((result) => {
//   console.log(result);
// });
// console.log(r);
tp.then((result) => {
    console.log("读取数据1", result);
    return "猪八戒";
  }).then((result)=>{
    console.log("读取数据2", result);
    return "沙和尚"
  }).then((result)=>{
    console.log("读取数据3", result);
  })
