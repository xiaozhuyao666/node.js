const PROMISE_STATE = {
  PENDING: 0,
  FULFILLED: 1,
  REJECTED: 2,
};
class TestPromise {
  #result;
  #state = PROMISE_STATE.PENDING;
  #callbacks = [];
  constructor(executor) {
    // 调用回调函数
    executor(this.#resolve, this.#reject);
  }
  // 用来存储成功数据
  #resolve = (value) => {
    if (this.#state != PROMISE_STATE.PENDING) return;
    this.#result = value;
    this.#state = PROMISE_STATE.FULFILLED;
    queueMicrotask(() => {
      this.#callbacks.forEach((cb) => {
        cb();
      });
    });
  };
  // 用来存储拒绝数据
  #reject = () => {};
  // then方法
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
const tp = new TestPromise((resolve, reject) => {
  resolve("哈哈");
});
// console.log(tp);
tp.then((result, reason) => {
    console.log(result);
    return "嘻嘻";
}).then((result,reason)=>{
    console.log(result);
    return "嘿嘿";
}).then((result,reason)=>{
    console.log(result);
});
