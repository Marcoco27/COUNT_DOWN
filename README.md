# ⏳ Compte à Rebours - 15 Juillet 2027

Ce projet est une page web simple et élégante affichant un compte à rebours dynamique jusqu'à la date cible du **15 juillet 2027**.

Le projet a été conçu pour être léger, performant et facile à maintenir en respectant les bonnes pratiques du développement web (séparation du code).

## 🔗 Démo en direct

Vous pouvez visualiser le site ici :
👉 **[Insérez votre lien GitHub Pages ici]**
*(Exemple : https://votre-pseudo.github.io/nom-du-repo/)*

## 📂 Structure du Projet

Le code a été restructuré en trois fichiers distincts pour une meilleure lisibilité et maintenabilité :

*   **`index.html`** : Contient la structure sémantique de la page.
*   **`style.css`** : Gère le design, les dégradés et la mise en page responsive (adaptée aux mobiles).
*   **`script.js`** : Contient la logique de calcul du temps et la manipulation du DOM.

## 🚀 Fonctionnalités

*   **Affichage complet** : Calcule les Mois, Jours, Heures, Minutes et Secondes restants.
*   **Responsive Design** : S'affiche parfaitement sur ordinateur, tablette et smartphone grâce à l'utilisation de Flexbox.
*   **Message de fin** : Affiche automatiquement un message "L'événement est arrivé !" une fois la date atteinte.
*   **Design moderne** : Utilisation d'effets de transparence (Glassmorphism) et de dégradés.

## 🛠️ Installation et Utilisation locale

Si vous souhaitez tester ou modifier ce projet sur votre ordinateur :

1.  **Clonez le dépôt** :
    ```bash
    git clone https://github.com/VOTRE-PSEUDO/NOM-DU-REPO.git
    ```
2.  **Ouvrez le fichier** :
    Double-cliquez simplement sur le fichier `index.html` pour l'ouvrir dans votre navigateur web préféré.

## ⚙️ Personnalisation

Pour changer la date de fin, ouvrez le fichier `script.js` et modifiez la première ligne :

```javascript
// Exemple pour changer la date au 1er Janvier 2030
const targetDate = new Date('January 1, 2030 00:00:00').getTime();
