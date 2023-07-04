# Kasa #

 Ce projet correspond au projet 7 de la formation développeur Web de OPENCLASSROOMS.

## Table des Matières

- [Introduction](#introduction)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Structure du Projet](#structure-du-projet)
- [Auteurs](#auteurs)
- [Exigences fonctionnelles](#exigences-fonctionnelles)
- [Outils et contraintes techniques](#outils-et-contraintes-techniques) 

## Introduction

Le projet a pour but démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma responsive (https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design-Kasa-FR?node-id=3%3A0).


## Installation

- Installation des dépendances : Cloner ce repository et lancer `yarn install` pour installer les dépendances.


## Utilisation

- Utiliser  `yarn start` pour lancer nodemon server.
- L'API est en écoute sur [http://localhost:3000](http://localhost:3000).

## Structure du Projet

- src/assets/               # Dossier contenant les images
- src/components/           # Dossier contenant les components
- src/pages                 # Contient les pages
- utils/hooks/              # Contient les hooks
- utils/router              # Contient le router  
- utils/style/loader        # Contient le 
- utils/style/sass          # Contient les fichiers sass
- utils/test                # Contient le composant nécessaire aux tests
- index.tsx                 # Entrée  

## Auteurs

- [GUIEBA Kévin](https://github.com/Kguie/)

## Exigences fonctionnelles ##

- Pour le défilement des photos dans la galerie (composant Gallery) :
    - Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image. 
    - Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image. 
    - S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" n'apparaissent pas.

- La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.

- Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page. 

- Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
    - Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.

### Outils et contraintes techniques ###

- Create React App.
- React Router.
- Styling:Sass optionnel, CSS à utiliser par défaut.
- Pas de librairie React externe.

- Découpage en composants modulaires et réutilisables .
- Un composant par fichier .
- Structure logique des différents fichiers .
- Utilisation des props entre les composants .
- Utilisation du state dans les composants quand c'est nécessaire .
- Gestion des événements .
- Listes : React permet de faire des choses vraiment intéressantes avec les listes, en itérant dessus, par exemple avec map. Il faut les utiliser autant que possible.
- Il est également recommandé, mais pas imposé, d’utiliser des composants fonctionnels plutôt que des composants classes.

- Les paramètres des routes sont gérés par React Router dans l'URL pour récupérer les informations de chaque logement.
- Il existe une page par route.
- La page 404 est renvoyée pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées.
- La logique du routeur est réunie dans un seul fichier.