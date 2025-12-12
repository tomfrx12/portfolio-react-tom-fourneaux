# Tom Fourneaux - Portfolio

Bienvenue sur mon portfolio personnel ! Ce projet présente mes compétences, mes projets professionnels et mon parcours de développeur. Il est conçu avec React + Vite et TailwindCSS  entièrement conteneurisée et déployée sur un VPS avec Traefik.

## Aperçu

![Capture d'écran du Portfolio](/public/autres/screenshot/screenshot-portfolio.png) [tom-fourneaux.fr](https://tom-fourneaux.fr)

## Stack Technique

### Développement Frontend
* **React** (v18+) - Bibliothèque UI basée sur les composants.
* **Vite** - Outil de build nouvelle génération (extrêmement rapide).
* **Tailwind CSS** - Framework CSS utilitaire pour un design moderne et responsive.

### DevOps & Infrastructure
Ce projet est hébergé sur un **VPS Linux dédié** géré via Docker.

* **Docker** - Conteneurisation complète de l'application.
* **Nginx** - Serveur web léger utilisé pour servir le build statique.
* **Traefik** - Reverse Proxy gérant :
    * Le HTTPS automatique (certificats Let's Encrypt).
    * Le routage basé sur les noms de domaine.
    * La sécurité des entêtes.
* **Debian VPS** - Administration serveur Linux.

## Architecture du Projet

Le projet utilise un **Multi-Stage Docker Build** pour minimiser la taille de l'image finale :

1.  **Étape de Build :** Utilise `node:22-alpine` pour installer les dépendances et compiler le code React (`npm run build`).
2.  **Étape de Production :** Utilise `nginx:alpine` pour servir uniquement les fichiers statiques générés dans le dossier `dist`.

Cela garantit un conteneur de production extrêmement léger et sécurisé, sans embarquer les lourds `node_modules`.

## Installation (Local)

Pour lancer ce projet localement sur votre machine pour le développement :

1.  **Cloner le dépôt**
    ```bash
    git clone https://github.com/VOTRE-PSEUDO/portfolio.git
    cd portfolio
    ```

2.  **Installer les dépendances**
    ```bash
    npm install
    ```

3.  **Lancer le serveur de développement**
    ```bash
    npm run dev
    ```
    Ouvrez `http://localhost:5173` pour le voir dans votre navigateur.


## Déploiement en Production (VPS)

L'application tourne derrière un reverse proxy Traefik.

### Prérequis

- Docker et Docker Compose installés sur le VPS
- Traefik configuré et en cours d'exécution
- Nom de domaine configuré (DNS pointant vers le VPS)

### 1. Cloner le projet sur le VPS
```bash
git clone https://github.com/VOTRE-PSEUDO/portfolio.git
cd portfolio
```

### 2. Vérifier l'existence du réseau Docker partagé avec Traefik
```bash
docker network create web
```

### 3. Builder & lancer les conteneurs
```bash
docker compose up -d --build
```


## Auteur

**Tom Fourneaux**

- 🌐 Site : [https://tom-fourneaux.fr](https://tom-fourneaux.fr)
- 💼 LinkedIn : [Tom Fourneaux](https://www.linkedin.com/in/tom-fourneaux-4a8b31384/)
- 🐙 GitHub : [@tomfrx12](https://github.com/tomfrx12)