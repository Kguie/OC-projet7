# Kasa #

## Objectif du projet ##

Démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma responsive (https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design-Kasa-FR?node-id=3%3A0).

## Exigences fonctionnelles ##

● Pour le défilement des photos dans la galerie (composant Gallery) :
    ● Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image. 
    ● Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image. 
    ● S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" n'apparaissent pas.

● La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.

● Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page. 

● Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
    ● Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.

### Outils et contraintes techniques ###

● Create React App.
● React Router.
● Styling:Sass optionnel, CSS à utiliser par défaut.
● Pas de librairie React externe.

● Découpage en composants modulaires et réutilisables .
● Un composant par fichier .
● Structure logique des différents fichiers .
● Utilisation des props entre les composants .
● Utilisation du state dans les composants quand c'est nécessaire .
● Gestion des événements .
● Listes : React permet de faire des choses vraiment intéressantes avec les listes, en itérant dessus, par exemple avec map. Il faut les utiliser autant que possible.
● Il est également recommandé, mais pas imposé, d’utiliser des composants fonctionnels plutôt que des composants classes.

● Les paramètres des routes sont gérés par React Router dans l'URL pour récupérer les informations de chaque logement.
● Il existe une page par route.
● La page 404 est renvoyée pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées.
● La logique du routeur est réunie dans un seul fichier.

### Back end ###

La partie backend  a été réalisée, vous pourrez trouvez [ici le repository ](https://github.com/Kguie/kasa-backend.git).

### Front-end installation ###

Cloner ce repository et lancer `yarn install` pour installer les dépendances.

### Front-end utilisation ###

Utiliser  `yarn start` pour lancer l'application
Ouvrir [http://localhost:3000](http://localhost:3000) pour le  voir dans le navigateur.