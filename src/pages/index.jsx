function Index() {
    return {

    };
}

export default Index;












<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Je m'appelle Tom Fourneaux, suis un jeune développeur web de 18ans étudiant à la Normandie Web School (NWS) de Rouen en Bachelor Chef de Projets digitaux. Je suis passionné par le développement web"/>
    <meta name="author" content="Tom Fourneaux" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://use.typekit.net/hkg5fnp.css">
    <link rel="icon" href="assets/img/favicon/petit_logo.png">
    <link rel="stylesheet" href="assets/style/styles.css">
    <link rel="stylesheet" href="assets/style/style-index.css">
    <title>Tom Fourneaux Portfolio</title>
    <script src="assets/script/script.js" defer></script>
</head>
<body>
    <header>
        <a href="index.html" class="logo_portfolio">
            <img src="assets/img/logo.png" alt="logo horizontal Fourneaux Tom"/>
        </a>
        <nav class="navig">
            <a href="index.html">Accueil</a>
            <a href="competences.html">Compétences</a>
            <a href="projets.html">Projets</a>
            <a href="charte_graphique.html">Charte Graphique</a>
            <a href="cv.html">CV</a>
            <a href="me_contater.html">Contact</a>
        </nav>
        <a class="menu">
            <span class="burger-icon">
                <span></span>
                <span></span>
                <span></span>
            </span>
            <span class="close-menu">×</span>
        </a>
    </header>
    <main>
        <section class="me">
            <div class="debut-presta">
                    <img src="assets/img/tom.jpg" alt="photo de profil Tom FOURNEAUX">
                    <h1>Tom Fourneaux</h1>
                    <p class="presentation">Etudiant et passionné de codage, voici mon portfolio</p>
                    <a href="me_contater.html" class="a_button">Contactez moi</a>
            </div>
                <h2>A PROPOS DE MOI</h2>
                <p class="presentation">Je suis un jeune développeur web de 18 ans étudiant à la Normandie Web School (NWS) de Rouen en Bachelor Chef de Projets digitaux. Je suis passionné par le développement web et, actuellement, je me forme aux technologies telles que HTML, CSS, JavaScript, etc... tout en découvrant des frameworks comme React. Mon objectif est d’acquérir une expertise technique tout en améliorant mes compétences en gestion de projets et en collaboration au sein d’équipes de développement. Je suis actuellement en recherche d'un stage ou d'une alternance dans le développement web. Pour plus de précision, mon cv est disponible</p>
                <div class="buttons">
                    <a href="cv.html" class="a_button">Mon CV</a>
                    <a href="competences.html" class="a_button">Compétences</a>
                </div>
        </section>
        <section class="xp">
            <h2>PROJETS</h2>
            <div class="4carte">
                <div class="carte">
                    <img src="assets/img/logo_des_projets/petit_logo.png" alt="Portfolio Tom Fourneaux">
                    <div class="text">
                        <h3>Portfolio</h3>
                        <p>Projet consistant à créer un portfolio.</p>
                        <a href="#" class="a_button_projet">Voir plus</a>
                    </div>
                </div>

                <div class="carte">
                    <img src="assets/img/logo_des_projets/logo-club-eco-st-sever.png" alt="Club Eco Saint Sever">
                    <div class="text">
                        <h3>Club Eco Saint Sever</h3>
                        <p>Projet qui consistait à créer une identité visuelle pour le Club Eco de Saint Sever.</p>
                        <a href="#" class="a_button_projet">Voir plus</a> 
                    </div>
                </div>
            </div>
            <a href="projets.html" class="a_button">Mes projets</a>
        </section>
    </main>
    <footer>
        <nav>
            <a href="https://github.com/tomfrx12" class="logo">
                <img src="assets/img/img_reseaux/github.png" alt="Logo de Github">
            </a>
            <a href="https://www.linkedin.com/in/tom-fourneaux-078644332/" class="logo">
                <img src="assets/img/img_reseaux/linkedin.png" alt="Logo de LinkedIn">
            </a>
            <a href="https://www.instagram.com/fourneauxtom/" class="logo">
                <img src="assets/img/img_reseaux/instagram.png" alt="Logo de Instagram">
            </a>
        </nav>
        <p>Copyright © 2025 tom-fourneaux<br/>
            <a href="mentions_legales.html" class="mentions_legales">Mentions légales</a>
        </p>
    </footer>
</body>
</html>
