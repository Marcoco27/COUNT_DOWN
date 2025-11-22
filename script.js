/* Reset de base */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #1e3c72, #2a5298);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    text-align: center;
}

.container {
    background: rgba(255, 255, 255, 0.1);
    padding: 2rem;
    border-radius: 15px;
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    max-width: 90%;
    width: 800px;
}

h1 {
    margin-bottom: 0.5rem;
    font-size: 2.5rem;
}

.subtitle {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.8;
}

.countdown-grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
}

.time-box {
    background: rgba(0, 0, 0, 0.2);
    padding: 1rem;
    border-radius: 10px;
    min-width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.time-box span:first-child {
    font-size: 2.5rem;
    font-weight: bold;
    color: #ffd700; /* Couleur or pour les chiffres */
}

.label {
    font-size: 0.9rem;
    text-transform: uppercase;
    margin-top: 5px;
}

.hidden {
    display: none;
}

/* Adaptation Mobile */
@media (max-width: 600px) {
    h1 { font-size: 1.8rem; }
    .time-box { min-width: 70px; padding: 0.5rem; }
    .time-box span:first-child { font-size: 1.5rem; }
    .label { font-size: 0.7rem; }
}
