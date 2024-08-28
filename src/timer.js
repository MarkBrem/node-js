// const refs = {
//     startBtn: document.querySelector('button[data-action-start]'),
//     stopBtn: document.querySelector('button[data-action-stop]'),
//     clockface: document.querySelector('.js-clockface'),
// };



// const timer = {
//     timerInterval:null,
//     start(){
//         const startTime = Date.now()
//         this.timerInterval = setInterval(()=>{
//             const currentTime = Date.now()
//             const deltaTime = currentTime - startTime
        

//         const time = getTimeComponents(deltaTime)
        
//         updateClockface(time)
//         refs.startBtn.disabled = true
//         }, 1000)
//     },
//     stop(){
//         clearInterval(this.timerInterval)
//         refs.startBtn.disabled = false
//     }
// }

// function pad(value) {
//     return String(value).padStart(2, '0');
//   }


// function getTimeComponents(time) {
//     const hours = pad(
//       Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//     );
//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//     return { hours, mins, secs };
//   }

// function updateClockface({ hours, mins, secs }) {
//     refs.clockface.textContent = `${hours}:${mins}:${secs}`;
//   }

// refs.startBtn.addEventListener('click', ()=>{timer.start()})
// refs.stopBtn.addEventListener('click', ()=>{timer.stop()})