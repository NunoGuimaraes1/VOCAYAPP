const button = document.getElementById('notificationsBtn');
button.addEventListener('click', () => {
  Notification.requestPermission().then((result) => {
    if (result === 'granted') {
      randomNotification();
    }
  });
  console.log("oi")
})

function oi(){
    console.log("oi")
}






// document.getElementById("notificationsText").addEventListener("click", (e) => {
//     Notification.requestPermission(function (status) {
//         console.log("Notification Permission Status:", status)
//     })
// })

// function sendNoti(){
//     const options = {
//         actions: [
//             {
//             action: 'archive',
//             title: 'Archive'
//             }
//         ]
//     }
//     new Notification("Hello World", options)
// }

// sendNoti()

// self.addEventListener("notificationclick", function(e) {
//     let notification = e.notifications
//     let action = e.action;

//     if(action === 'archive'){
//         notification.close()
//     }
// })