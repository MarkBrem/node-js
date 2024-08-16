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



