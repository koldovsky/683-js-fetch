(async function(){
    const response = await fetch('https://war.ukrzen.in.ua/alerts/api/alerts/active.json');
    const alerts = await response.json();
    const alertsContainer = document.querySelector('.alerts');
    for (const alert of alerts.alerts) {
        alertsContainer.innerHTML += '<br>' + alert.location_title;
    }
})();