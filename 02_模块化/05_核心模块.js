// console.log(module);
// 报错：module is not defined in ES module scope  因为package.json type设置为module

//核心模块：是node中自带的模块，可以在node中直接使用
// window 是浏览器的宿主对象，node中是没有的
// global 是node中的全局对象，作用类似于window
// ES标准下，全局对象的标准名应该是globalThis
// console.log(globalThis);
/* 
    核心模块
        process
            -表示当前的node进程
            -通过该对象可以获取进程的信息，或者对进程做各种操作
            -如何使用：
                1.如何获取对象：
                    process是一个全局的变量可以直接使用
                2.对获取的对象进行操作
                    process.exit()
                        -结束当前进程，终止node
                    process.nextTick(callback[...args])
                        -将函数插入到tick队列中
                        -tick队列中的代码会在下一次事件循环之前进行
                            会在微任务队列和宏任务队列任务执行之前执行
                        -tick队列是在早期没有微任务队列时设计出来代替的，相当于老版的微任务队列（node独有，浏览器中是没有的）
                    (在CommonJS中)
                    调用栈
                    tick队列
                    微任务队列
                    宏任务队列
                    (在ES中)
                    调用栈
                    微任务队列
                    tick队列
                    宏任务队列
                    
*/
// console.log(11111);
//  终止进程，括号里面可以是一个值，作为状态码，通常用不上
// process.exit(0);
// console.log(22222);
// console.log(33333);

// 在宏任务队列中
setTimeout(() => {
  console.log(1);
});

// 将函数插入到tick队列中（会在微任务队列和宏任务队列任务执行之前执行）
process.nextTick(() => {
  console.log(3);
});

// 在微任务队列中
queueMicrotask(() => {
  console.log(2);
});

// 在调用栈里
console.log(4);
// console.log(process);
// console.log(module);
