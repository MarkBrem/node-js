// const refs = {
//     notification: document.querySelector('.js-alert'),
//     };

//     refs.notification.addEventListener('click', onNotificationClick);

//     showNotification();

//     const timeoutId = setTimeout(hideNotification, 3000)

//     function onNotificationClick() {
//     hideNotification();
//     clearTimeout(timeoutId)
//     }

//     function showNotification() {
//     refs.notification.classList.add('is-visible');

//     }

//     function hideNotification() {
//     refs.notification.classList.remove('is-visible');
//     console.log('Закрили модалку');
//     }

// let count = 0

// const subscribe = setInterval(()=>{
//     confirm('Підпишись')
//     if(confirm('Підпишись') === false){
//         count += 1
//     }else{
//         clearInterval(subscribe)
//     }
//     console.log(count);
//     if (count === 3) {
//         clearInterval(subscribe)
//     }
// }, 3000);

/**
 * Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду,
 * починаючи від from і закінчуючи to.
 * Зробіть два варіанти рішення.
 * 1. Використовуючи setInterval.
 * 2. Використовуючи вкладений setTimeout.
 */

// function printNumbers(from, to){
//     let start = from;

//     const timerId = setInterval(()=>{
//         console.log(start);
//         if (start === to) {
//             clearInterval(timerId)
//         }
//         start += 1
//     }, 500)
// }

// printNumbers(1, 6)

// function printNumbers(from, to){
//     let start = from;

//     function print() {
//         console.log(start);
//         if (start < to) {
//           setTimeout(print, 1000);
//         }
//         start += 1;
//       }

//       setTimeout(print, 500);
//     }

//     printNumbers(1, 6);

// 1. Створити функцію, яка повертає поточну дату та час.

// const date = function(){
//    console.log(new Date());
//    return new Date()
// }

// 2. Створити функцію, яка приймає дату та повертає рік.

// const year = function(date){
//    console.log(date.getFullYear());
// }
// year(date())

// function findDate(){
//    const today = new Date()
//    const year = today.getFullYear()
//    const month = today.getMonth() + 1
//    const date = today.getDate()
//    console.log(year, month, date);
// }
// findDate()
// const promise = new Promise((resolve, reject)=>{
//    resolve(10)
// })

// const promise = new Promise((resolve, reject) => {

//     resolve('Hello, world!')
// }
// )

// promise
//     .then(result => { console.log(result); })
//     .then(result => {console.log(result);})

//. Напишіть функцію, яка отримує масив чисел
// і повертає проміс, який виконується, якщо всі
//числа в масиві є парними.Якщо ж принаймні одне число
//непарне, проміс повинен бути відхилено з повідомленням
//"Є непарні числа".

// function arrChecking (arr) {
//     const everyNum = arr.every((num) => {
//      return   num % 2 === 0
//     })
//     return new Promise((resolve, reject) => {

//         if (everyNum) {
//             resolve('всі числа парні')
//         } else {
//             reject('Є непарні числа')

//         }
//     })
// }

// arrChecking([2, 4, 6])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// const promise1 =new Promise((resolve, reject) => {
//     setTimeout(resolve('проміс 1 виконаний'), 3000);
//   });

// const promise2 =new Promise((resolve, reject) => {
//     setTimeout(resolve('проміс 2 виконаний'), 2000);
//   });

// const promise3 =new Promise((resolve, reject) => {
//     setTimeout(resolve('проміс 3 виконаний'), 1000);
//   });

// Promise.all([promise1, promise2, promise3]) .then((response) => {
//    console.log(response);
// })
//
// .catch(error => console.log(error))

// Promise.race([promise1, promise2, promise3]).then((value) => {
//    console.log(value);
//  })
//  Promise.race([promise1, promise2]).then((value) => {
   //    console.log(value);
   //  });
//   .catch((error) => {
//     console.log(error);
//   });

// Promise.any([promise1(), promise2(), promise3()])
// .then((any)=>{console.log(any);})



// const promise1 = new Promise((resolve, reject) => {
//    setTimeout(resolve, 500, 'one');
//  });
 
//  const promise2 = new Promise((resolve, reject) => {
//    setTimeout(resolve, 100, 'two');
//  });
 
//  

// 
//       

// function raceTimeout(fetchDataPromise, timeout){
//    return new Promise((resolve, reject) => {
//       if (fetchDataPromise.status === 'FULLFILD') {
//          setTimeout(resolve(fetchDataPromise), timeout)
//       }else{
//          reject('Запит неуспішний')
//       }
//    })
// }

// const fetchDataPromise = fetch('https://api.example.com/data');
// const timeout = 5000;
// raceTimeout(fetchDataPromise, timeout)
// .then((data) => {console.log(data);})
// .catch((error => {console.log(error);})) 

const btn = document.querySelector('.js-btn')
const winer = document.querySelector('.winer')
const progress = document.querySelector('.prograst')

btn.addEventListener('click', ()=>{
   progress.textContent = `🤖 Заїзд розпочався, ставки не приймаються!`
   const promises = horses.map((horse)=>{
      return run(horse)
    })
    Promise.race(promises)
    .then(({horse, time})=>{
        winer.textContent =`🎉 Переможець ${horse}, финишував за ${time}мс часу`
    })

    Promise.all(promises)
 .then(answer => {progress.textContent = `📝 Заїзд закінчився, приймаються ставки.`
   setTimeout(()=>{winer.textContent = ''}, 4010)}
 )
})

console.log(`🤖 Заїзд розпочався, ставки не приймаються!`);
const horses = [
   'Secretariat',
   'Eclipse',
   'West Australian',
   'Flying Fox',
   'Seabiscuit',
 ];

 const promises = horses.map((horse)=>{
   return run(horse)
 })

 Promise.race(promises)
.then(({horse, time})=>{
    console.log(`%c🎉 Переможець ${horse}, финишував за ${time}мс часу`,'color: green');
})

function run(horse){
    return new Promise((resolve, reject)=>{
        const time = getRandomTime(3000, 4000)

        setTimeout(()=>{
            resolve({
                horse,
                time
            })
        },time)
    })
}

 function getRandomTime(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
 }

//  run(horses).then(win=>console.log(win)).catch(error=>{console.log(error);})

 Promise.all(promises)
 .then(answer => console.log(`📝 Заїзд закінчився, приймаються ставки.`))