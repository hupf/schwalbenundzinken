if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/schwalbenundzinken/sw.js', { scope: '/schwalbenundzinken/' })})}