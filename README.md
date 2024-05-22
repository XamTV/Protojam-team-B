Protojam-team-B
===============

Vue d'ensemble
--------------

Protojam-team-B est un dépôt de projet créé par PersonaliTREE, initialement forké de WildCodeSchool-2024-02/Protojam-team-B. Ce dépôt contient le code source d'une application web, principalement utilisant PHP, JavaScript, SCSS, Twig, Docker et des scripts Shell.

Structure des dossiers
----------------------

-   **client/** : Contient le code frontend, y compris les fichiers JavaScript et SCSS.
-   **server/** : Contient le code backend, principalement des fichiers PHP.
-   **.github/workflows/** : Fichiers de configuration pour GitHub Actions.
-   **.husky/** : Configuration pour Husky, utilisé pour les hooks Git.
-   **Dockerfile** : Fichier de configuration Docker pour la construction de l'application.
-   **docker-compose.yml** : Fichier Docker Compose pour configurer l'environnement de développement.

Fonctionnalités
---------------

L'application web, intitulée **PersonaliTREE**, est conçue pour offrir une expérience utilisateur unique avec les fonctionnalités suivantes :

-   **Personnalisation du profil utilisateur** : Les utilisateurs peuvent créer et personnaliser leurs profils.
-   **Le test de personnalité de Niavlys** : Entrez dans l'univers captivant de "PersonaliTREE", conçu pour révéler l'essence de votre être à travers le prisme de la nature. Inspiré par la majesté et la complexité des arbres, ce projet offre une exploration unique de votre essence intérieure, vous invitant à vous connecter à la sagesse et à la beauté des arbres. À travers ce quiz, vous entreprendrez un voyage introspectif, où chaque réponse vous rapprochera de la compréhension de vous-même. "PersonaliTREE" est une invitation à la réflexion profonde et à la découverte de soi, reliant la nature et l'humain.

Installation et configuration
-----------------------------

Pour configurer le projet localement, suivez ces étapes :

1.  **Cloner le dépôt :**

    bash

    Copier le code

    `git clone https://github.com/XamTV/Protojam-team-B.git
    cd Protojam-team-B`

2.  **Installer les dépendances :**

    -   Pour le backend :

        bash

        Copier le code

        `composer install`

    -   Pour le frontend :

        bash

        Copier le code

        `npm install`

3.  **Exécuter l'application avec Docker :**

    bash

    Copier le code

    `docker-compose up --build`

Utilisation
-----------

1.  Accédez à l'URL de l'application fournie par Docker.
2.  Créez un compte ou connectez-vous si vous en avez déjà un.
3.  Explorez et personnalisez votre profil en ajoutant des informations pertinentes.
4.  Réalisez le test de personnalité pour découvrir des aspects uniques de votre être intérieur.

Licence
-------

Ce projet est sous licence MIT. Voir le fichier <LICENSE.md> pour plus de détails.

Contact
-------

Pour toute question ou problème, veuillez ouvrir une issue dans le dépôt.

Visitez l'application en direct [ici](https://664750554cfe09000872f721--personalitree.netlify.app/).
