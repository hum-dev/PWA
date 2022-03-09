if('serviceWorker' in navigator) {
    // Register the service worker
    navigator.serviceWorker.register('/sw.js').then(registration => {
        console.log('sw registered');
        console.log(registration);

    }).catch (error => {
        console.log('sw registration failed');
        console.log(error);
    })
}
// if ('serviceWorker' in navigator) {
//   // Register the service worker
//   navigator.serviceWorker.register('/sw.js', {
//     scope: '/',
//   });
// }
// self.addEventListener('install', function (event) {
//   console.log('WORKER: install event in progress.');
// });
