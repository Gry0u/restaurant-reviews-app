//Register service worker
if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(reg => console.log("Registration ok"))
    .catch(err => console.log('Registration failed' + err))
}
