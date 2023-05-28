const PROMISE_STATE = {
    PENDING:0,
    FULFILLED:1,
    REJECT:2
}
class TestPromise {
    #result
    #callbacks = [];
    #state = PROMISE_STATE.PENDING;
    constructor(executor){
        executor(this.#resolve,this.#reject);  //此时executor是传入的回调函数，要调用回调函数
        //构造函数中的this就是当前创建的实例，这里就是使用回调函数的实参调用私有函数#resolve和#reject
    }
    #resolve = (value)=>{
        if(this.#state === PROMISE_STATE.PENDING ){

        }
    }
    #reject(){

    }    
}
// 这个回调函数是类中构造函数的实参
const tp = new TestPromise((resolve,reject)=>{
    console.log(resolve);
})
console.log(tp);