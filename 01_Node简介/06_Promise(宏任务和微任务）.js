// Promise.resolve(100)  //立即执行
// setTimeout(()=>{
//     console.log(1);
// },0)
// console.log(2);
/* 
    JS是单线程的，它的运行是基于事件循环机制(event loop)
        -调用栈
            -栈
                栈是一种数据结构，后进先出
            -调用栈中，放的是要执行的代码
        -任务队列
            -队列
                -队列也是一种数据结构，先进先出
            -任务队列中，放的是将要执行的代码
            -当调用栈中的代码执行完毕后，队列中的代码才会按照顺序依次进入栈中去执行
            -在JS中任务队列有两种：
                一种是宏任务队列    （大部分代码都去宏任务队列中排队）
                一种是微任务队列    （Promise的回调函数（then，catch，finally））
            -整个流程：
                ①执行调用栈中的代码
                ②执行微任务队列中的所有任务
                ③执行宏任务队列中的所有任务
*/
// 定时器的作用是间隔一段时间后，将函数放到任务队列中
// setTimeout(()=>{
//     console.log(1);
// },0)
// /*
//     Promise的执行原理：
//         -Promise在执行时，then就相当于给Promise了回调函数
//             当Promise的状态从pending变为fulfilled时，
//                 then的回调函数会被放到任务队列中
// */
// Promise.resolve(1).then(()=>{
//     console.log(2);
// })
// // 全局作用域里面的代码都是在栈中
// console.log(3);
/* 
    queueMicrotask()  向微任务队列在添加一个任务
*/
// console.log(5);
// setTimeout(() => {
//   console.log(4);
// }, 0);
// Promise.resolve(10).then(() => {
//   console.log(3);
//   setTimeout(() => {
//     //微任务里面的宏任务
//     console.log(1);
//   });
// });
// queueMicrotask(() => {
//   console.log(2);
// });
// Promise.resolve(10).then(() => {
//   Promise.resolve(10).then(() => {
//     console.log(1);
//   });
// });
// queueMicrotask(() => {
//   console.log(2);
// });
// 先执行第一个then放在微任务队列，再执行queue在第一个then后面排队，第一个then里面又是一个微任务，放在queue后面排队





// 练习
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);
// 1735264