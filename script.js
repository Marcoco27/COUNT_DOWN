// Date cible : 15 juillet 2028 à minuit, heure locale du visiteur.
// Les mois se comptent à partir de 0 dans JavaScript : 6 = juillet.
const TARGET = new Date(2028, 6, 15, 0, 0, 0);
const TARGET_LABEL = '15 juillet 2028';

const els = {
    months: document.getElementById('months'),
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds'),
    totalDays: document.getElementById('total-days'),
    countdown: document.getElementById('countdown'),
    total: document.getElementById('total'),
    done: document.getElementById('done'),
};

// Ajoute n mois à une date sans déborder sur le mois suivant :
// 31 janvier + 1 mois donne le 28 (ou 29) février, pas le 3 mars.
function addMonths(date, n) {
    const d = new Date(date.getTime());
    const day = d.getDate();
    d.setDate(1);
    d.setMonth(d.getMonth() + n);
    const lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
    d.setDate(Math.min(day, lastDay));
    return d;
}

// Découpe l'écart en mois de calendrier entiers, puis le reste en jours,
// heures, minutes et secondes. Les mois ont donc leur vraie longueur.
function remaining(now, target) {
    let months = (target.getFullYear() - now.getFullYear()) * 12
               + (target.getMonth() - now.getMonth());
    if (addMonths(now, months) > target) {
        months -= 1;
    }
    const rest = Math.floor((target - addMonths(now, months)) / 1000);
    return {
        months,
        days: Math.floor(rest / 86400),
        hours: Math.floor(rest / 3600) % 24,
        minutes: Math.floor(rest / 60) % 60,
        seconds: rest % 60,
        totalDays: Math.ceil((target - now) / 86400000),
    };
}

function pad(n) {
    return String(n).padStart(2, '0');
}

function render() {
    const now = new Date();

    if (now >= TARGET) {
        els.countdown.hidden = true;
        els.total.hidden = true;
        els.done.hidden = false;
        document.title = TARGET_LABEL;
        clearInterval(timer);
        return;
    }

    const r = remaining(now, TARGET);

    els.months.textContent = r.months;
    els.days.textContent = r.days;
    els.hours.textContent = pad(r.hours);
    els.minutes.textContent = pad(r.minutes);
    els.totalDays.textContent = r.totalDays;

    const seconds = pad(r.seconds);
    if (els.seconds.textContent !== seconds) {
        els.seconds.textContent = seconds;
        // Retirer puis remettre la classe relance l'animation ;
        // la lecture d'offsetWidth force le navigateur à prendre acte du retrait.
        els.seconds.classList.remove('tick');
        void els.seconds.offsetWidth;
        els.seconds.classList.add('tick');
    }

    const title = `J-${r.totalDays} · ${TARGET_LABEL}`;
    if (document.title !== title) {
        document.title = title;
    }
}

const timer = setInterval(render, 1000);
render();
