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
 

setTimeout(()=>{confirm('Підпишись')}, 5000)

let count = 0

setInterval(()=>{
    confirm('Підпишись')
    count += 1;
    console.log(count);
}, 3000);

