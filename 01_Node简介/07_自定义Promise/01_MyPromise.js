/* 
    定义类的思路：
        1.先把功能都分析清楚了，再动手
        2.写一点想一点，走一步看一步
*/
const PROMISE_STATE = {
  PENDING:0,
  FULFILLED:1,
  REJECTED:2
}
class MyPromise {
  // 创建一个变量用来存储Promise的结果
  #result;
  // 创建一个变量来记录Promise的状态
  #state = PROMISE_STATE.PENDING; //pending 0 fulfilled 1 rejected 2

  constructor(executor) {
    //解决this是undefined的方法2：(此时使用普通的函数声明即可)
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
    this.#state = PROMISE_STATE.FULFILLED; //1 表示数据填充成功
  }
  //   解决this是undefined的方法1：
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
    if (this.#state === PROMISE_STATE.FULFILLED) {
      onFulfilled(this.#result);
      //console.log(this);
    }
  }
}
const mp = new MyPromise((resolve, reject) => {
  //   console.log("回调函数执行了");
  // resolve("孙悟空");
  // resolve("猪八戒");  //测试多个resolve的值会不会改变
  setTimeout(() => {
    resolve("孙悟空");
  }, 1000);
});
// console.log(mp);
mp.then((result) => {
  console.log("读取数据", result);
});
