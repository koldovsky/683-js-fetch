(function() {
    
    const clockContainer = document.querySelector('.clock');

    function updateClock() {
        clockContainer.innerHTML = new Date().toLocaleTimeString();
    }

    setInterval(updateClock, 1000);
})();