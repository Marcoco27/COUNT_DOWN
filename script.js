// Date cible : 15 juillet 2027 à minuit
const targetDate = new Date('2027-07-15T00:00:00').getTime();

// Éléments DOM
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

// Fonction de mise à jour du compte à rebours
function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Si le compte à rebours est terminé
    if (distance < 0) {
        daysEl.textContent = '000';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
        return;
    }

    // Calculs
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mise à jour avec padding
    updateElement(daysEl, String(days).padStart(3, '0'));
    updateElement(hoursEl, String(hours).padStart(2, '0'));
    updateElement(minutesEl, String(minutes).padStart(2, '0'));
    updateElement(secondsEl, String(seconds).padStart(2, '0'));
}

// Fonction pour mettre à jour un élément avec animation subtile
function updateElement(element, value) {
    if (element.textContent !== value) {
        element.classList.add('updating');
        element.textContent = value;
        
        // Retirer la classe après l'animation
        setTimeout(() => {
            element.classList.remove('updating');
        }, 300);
    }
}

// Initialisation immédiate
updateCountdown();

// Mise à jour toutes les secondes
setInterval(updateCountdown, 1000);
