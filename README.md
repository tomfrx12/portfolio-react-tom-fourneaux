# Tom Fourneaux - Portfolio

Portfolio personnel de Tom Fourneaux, développeur web et étudiant en Bachelor Chef de Projets Digitaux à la Normandie Web School de Rouen.

Le site présente mon parcours, mes compétences et mes projets, avec une interface responsive, un mode sombre et une page de contact fonctionnant avec EmailJS.

## Aperçu

Site en ligne : [tom-fourneaux.fr](https://tom-fourneaux.fr)

![Capture d'écran du portfolio](/public/autres/screenshot/screenshot-portfolio.png)

## Fonctionnalités

- Présentation du parcours et des compétences
- Galerie de projets avec liens vers les dépôts GitHub et les démonstrations
- Mode clair et mode sombre
- Animations d'interface avec Framer Motion
- Formulaire de contact avec EmailJS

## Technologies

- React 19
- Vite 7
- Tailwind CSS 4
- React Router 7
- Framer Motion
- EmailJS
- Docker et Node.js 22 Alpine pour la production

## Pages principales

| Page | URL |
| --- | --- |
| Accueil | `/` |
| Compétences | `/competences` |
| Projets | `/projets` |
| Contact | `/me_contacter` |
| Mentions légales | `/mentions_legales` |

## Installation locale

### Prérequis

- Node.js 22 ou une version compatible
- npm

### Démarrage

```bash
git clone https://github.com/tomfrx12/portfolio-react-tom-fourneaux.git
cd portfolio-react-tom-fourneaux
npm install
npm run dev
```

Le serveur de développement est disponible à l'adresse [http://localhost:5173](http://localhost:5173).

### Variables d'environnement

Le formulaire de contact utilise EmailJS. Pour l'activer, créez un fichier `.env` à la racine du projet :

```env
VITE_SERVICE_ID=votre_service_id
VITE_TEMPLATE_ID=votre_template_id
VITE_PUBLIC_KEY=votre_cle_publique
```

Les variables `VITE_*` sont intégrées au bundle côté client. N'y placez donc jamais de clé secrète.

## Scripts npm

| Commande | Description |
| --- | --- |
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Génère le build de production dans `dist` |
| `npm run preview` | Sert localement le build de production |
| `npm run lint` | Vérifie le code avec ESLint |

## Docker

Le `Dockerfile` utilise une construction en deux étapes :

1. Une image `node:22-alpine` installe les dépendances et construit l'application.
2. Une image `node:22-alpine` minimale installe `serve` et expose le dossier `dist` sur le port 80.

Construire et lancer l'image localement :

```bash
docker build -t portfolio-tom-fourneaux .
docker run --rm -p 8080:80 portfolio-tom-fourneaux
```

Le site est ensuite accessible à l'adresse [http://localhost:8080](http://localhost:8080).

En production, le conteneur peut être placé derrière un reverse proxy comme Traefik avec un nom de domaine et HTTPS.

## Auteur

**Tom Fourneaux**

- Site : [tom-fourneaux.fr](https://tom-fourneaux.fr)
- LinkedIn : [Tom Fourneaux](https://www.linkedin.com/in/tom-fourneaux-4a8b31384/)
- GitHub : [@tomfrx12](https://github.com/tomfrx12)