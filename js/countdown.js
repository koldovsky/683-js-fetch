(function() {

    const countdownContainer = document.querySelector('.countdown');
    const startTime = new Date();
    const limitSecs = 10;

    function updateCountdown() {
        const currentTime = new Date();
        const intervalSecs = Math.round((currentTime - startTime) / 1000);
        const leftSecs = limitSecs - intervalSecs;
        countdownContainer.innerHTML = leftSecs;
        // if (leftSecs <= 0) {
        //     document.body.innerHTML = '';
        // }
    }

    setInterval(updateCountdown, 1000);
})();