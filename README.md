# ArgentBank

Projet 13 de la formation OpenClassrooms "Développeur Front End".
ArgentBank est une application bancaire.

<p align="center">
    <img width="400" src="/src/assets/images/argentBankLogo.png" alt="logo ArgentBank">
</p>

## Objectif

L'objectif de ce projet est : **Utilisez une API pour un compte utilisateur bancaire avec React**.
Ma mission sur ce projet était la création d'une application web permettant aux clients de se connecter et de gérer leurs comptes et leur profil.

## Réalisation 

* Création de l’application web complète et responsive avec React.
* Utilisation Redux pour gérer le state de l'ensemble de l'application.
* Création d'un fichier YAML pour la description de l'API
* Modification de l'API pour ajouter les transactions des comptes utilisateurs 
* Use cases : 
    * L'utilisateur peut visiter la page d'accueil
    * L'utilisateur peut se connecter au système
    * L'utilisateur peut se déconnecter du système
    * L'utilisateur ne peut voir les informations relatives à son propre profil qu'après s'être connecté avec succès
    * L'utilisateur peut modifier le profil et conserver les données dans la base de données. 

## Fabriqué avec

* [React](https://fr.reactjs.org/) - bibliothèque Javascript
* [Redux](https://redux.js.org/) - Conteneur d'état
* [React-Router](https://reactrouter.com/) - bibliothèque de gestion des routes pour React 
* [Sass](https://sass-lang.com/) -  préprocesseur CSS (front-end)
* [NPM](https://www.npmjs.com/) -  Gestionnaire de packages
* [VSCode](https://code.visualstudio.com/) - Editeur de textes

## Installation

Utilisez le gestionnaire de packages [git](https://github.com/) pour télécharger l'application ArgentBank.

```bash
$ git clone git@github.com:loicantoniak/LoicAntoniak_13_01072022.git
```

## Usage

```bash
$ cd argent_bank/
$ npm install
$ npm start
```

Exécute l'application en mode développement. Ouvrez http://localhost:3000 pour l'afficher dans le navigateur.

La page se rechargera si vous apportez des modifications. Vous verrez également toutes les erreurs dans la console.

Pour obtenir une version de production faites :

```bash
$ npm build
```

## API

Le [projet](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API) contenant tout le code source pour exécuter l'API pour argentBank.

Démo live : https://loicantoniak.github.io/LoicAntoniak_13_01072022/

## Compétences évaluées  

- Implémenter un gestionnaire d'état dans une application React
- Intéragir avec une API
- Modéliser une API
- S'authentifier à une API

## Auteur

* **Loïc Antoniak** _alias_ [@loicantoniak](https://github.com/loicantoniak)

## Licence 

Il s'agit d'un projet dans le cadre de la formation [Développeur Front-End](https://openclassrooms.com/fr/paths/314-developpeur-front-end) d'OpenClassrooms. Les documents sont librement réutilisables, mais les images / logo et tout les éléments issus de l'énoncé ne m'appartiennent pas.
