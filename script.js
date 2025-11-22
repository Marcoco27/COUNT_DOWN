// Date cible : 15 Juillet 2027
const targetDate = new Date('July 15, 2027 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Si le compte à rebours est terminé
    if (distance < 0) {
        document.getElementById('countdown').classList.add('hidden');
        document.getElementById('message').classList.remove('hidden');
        return;
    }

    // Calculs du temps
    // Note: Le calcul précis des "Mois" est complexe car les mois ont des durées variables.
    // Ici, nous utilisons une approximation standard (1 mois = 30.44 jours) pour l'affichage,
    // ou nous calculons le reste mathématiquement.

    const _second = 1000;
    const _minute = _second * 60;
    const _hour = _minute * 60;
    const _day = _hour * 24;
    const _month = _day * 30.44; // Moyenne approximative

    const months = Math.floor(distance / _month);
    const days = Math.floor((distance % _month) / _day);
    const hours = Math.floor((distance % _day) / _hour);
    const minutes = Math.floor((distance % _hour) / _minute);
    const seconds = Math.floor((distance % _minute) / _second);

    // Mise à jour du DOM (HTML)
    document.getElementById('months').innerText = months;
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

// Mettre à jour chaque seconde
setInterval(updateCountdown, 1000);

// Lancer une première fois immédiatement pour éviter le délai d'une seconde à l'affichage
updateCountdown();
