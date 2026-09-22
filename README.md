# ⏳ Compte à Rebours - 15 Juillet 2028

Ce projet est une page web simple et élégante affichant un compte à rebours dynamique jusqu'à la date cible du **15 juillet 2028**.

Le projet a été conçu pour être léger, performant et facile à maintenir en respectant les bonnes pratiques du développement web (séparation du code).

## 🔗 Démo en direct

Vous pouvez visualiser le site ici :
👉 **https://marcoco27.github.io/COUNT_DOWN/**

## 📂 Structure du Projet

Le code est réparti en trois fichiers distincts pour une meilleure lisibilité et maintenabilité :

*   **`index.html`** : Contient la structure sémantique de la page.
*   **`style.css`** : Gère le design, les couleurs et la mise en page responsive (adaptée aux mobiles).
*   **`script.js`** : Contient la logique de calcul du temps et la manipulation du DOM.

## 🚀 Fonctionnalités

*   **Affichage complet** : Calcule les Mois, Jours, Heures, Minutes et Secondes restants, avec des mois de calendrier à leur vraie longueur.
*   **Total en jours** : Affiche aussi le nombre de jours restants en tout, repris dans l'onglet du navigateur (« J-662 »).
*   **Responsive Design** : S'affiche parfaitement sur ordinateur, tablette et smartphone.
*   **Thème clair ou sombre** : Suit automatiquement le réglage du système du visiteur.
*   **Message de fin** : Affiche automatiquement « C'est aujourd'hui. » une fois la date atteinte.
*   **Design éditorial** : Fond papier, chiffres massifs, un seul accent orangé, aucune dépendance externe (pas de police ni de script chargé depuis un autre site).

## 🛠️ Installation et Utilisation locale

Si vous souhaitez tester ou modifier ce projet sur votre ordinateur :

1.  **Clonez le dépôt** :
    ```bash
    git clone https://github.com/Marcoco27/COUNT_DOWN.git
    ```
2.  **Ouvrez le fichier** :
    Double-cliquez simplement sur le fichier `index.html` pour l'ouvrir dans votre navigateur web préféré.

## ⚙️ Personnalisation

Pour changer la date de fin, ouvrez le fichier `script.js` et modifiez les deux premières constantes. Attention, JavaScript compte les mois à partir de 0 : janvier vaut 0, juillet vaut 6, décembre vaut 11.

```javascript
// Exemple pour changer la date au 1er janvier 2030
const TARGET = new Date(2030, 0, 1, 0, 0, 0);
const TARGET_LABEL = '1er janvier 2030';
```

Pensez aussi à mettre à jour la date affichée dans `index.html` (le titre et la balise `<time>`).
