# Hand Coded : site 3D et back-office

Le site public reprend le moteur 3D du site Fat-Man Collective de 2008 (ActionScript 3 / Papervision3D), porté en Three.js. Tout son contenu vient d'un seul fichier, `content/content.json`.

Le back-office (`/admin/`) sert à modifier ce fichier et à envoyer les images et les modèles 3D. Il n'y a pas de PHP ni de serveur : le dépôt GitHub fait office de serveur.

À chaque clic sur « Publier », le back-office fait un commit dans le dépôt, puis GitHub Pages remet le site en ligne.

## Voir le site sur ton ordinateur

Double-clique sur `index.html` : le site s'ouvre dans le navigateur, sans serveur. Il montre le contenu enregistré dans le dossier.

Une limite en local : les cartes 3D affichent leur version typographique, et pas les images du dossier `media/`, car le navigateur interdit de lire les images du disque dans une scène 3D. Les fiches ouvertes, elles, montrent toutes les images. En ligne, tout s'affiche.

`admin/index.html` s'ouvre aussi depuis le disque. Son mode démo marche entièrement. En mode GitHub, l'aperçu montre alors la version enregistrée dans le dossier, sans le brouillon : pour travailler, ouvre-le plutôt en ligne.

## Mise en place (une fois)

1. **Mettre les fichiers dans le dépôt.** Copie tout le contenu de ce dossier à la racine du dépôt de ton site, y compris le fichier caché `.nojekyll`, puis pousse.
2. **Activer GitHub Pages.** Dans le dépôt : Settings › Pages › « Deploy from a branch », branche `main`, dossier `/ (root)`.
3. **Créer le jeton d'accès.** Va dans GitHub › Settings › Developer settings › [Fine-grained tokens](https://github.com/settings/personal-access-tokens/new) et crée-en un avec :
   - Repository access : « Only select repositories », puis le dépôt du site ;
   - Permissions › Repository › **Contents : Read and write**, et rien d'autre ;
   - une date d'expiration (tu en recréeras un à l'échéance).
4. **Te connecter.** Ouvre `https://<ton-compte>.github.io/<dépôt>/admin/`. Le compte et le dépôt se remplissent tout seuls quand c'est possible. Colle le jeton, et coche « Rester connectée » si l'ordinateur est le tien.

Option : tu peux préremplir le compte, le dépôt et la branche dans `admin/config.json`. Ne mets jamais le jeton dans ce fichier : il serait public.

Si le site vit dans un sous-dossier du dépôt (par exemple `docs/`), indique-le dans « Options avancées › Dossier du site ».

## Utilisation

- **Sections.** Chaque section du menu est un objet 3D entouré de cartes. Pour chacune, tu choisis :
  - l'objet 3D ;
  - la disposition des cartes : Carrousel, Arc, Éventail, Carte du monde, Spirale ou Mur ;
  - le type de carte : Image, Portrait, Texte ou Lieu ;
  - l'ouverture : fiche 2D en bandeau, ou carte qui vient vers la caméra ;
  - les tags de tri, le tag affiché à l'ouverture et le nombre de cartes par page.

  Glisse les sections pour changer l'ordre du menu.
- **Contenus.**
  - Textes en anglais et en français, texte riche (gras, italique, liens, listes, intertitres), vignette et dos de carte, images et vidéos de la fiche.
  - Tags, équipe (reliée aux portraits), crédits, position sur la carte du monde.
  - « Auteur de l'œuvre » et « Crédit photo » (sous chaque image) : chaque vignette des cartes 3D porte une petite signature « Œuvre · Auteur · Photo X » (crédit de la première image). Sans auteur, l'image est signée du nom du studio. Le réglage se coupe dans Réglages › Apparence.
  - « + Ajouter un lien » accepte une vidéo YouTube ou Vimeo, ou une image en ligne. Sur le site, les vidéos attendent un toucher pour se lancer : on peut faire défiler le bandeau par-dessus.
  - Les contenus incomplets portent le badge « à compléter ».
  - Glisse les lignes pour changer l'ordre des cartes.
- **Réseau (section Contact).** Sur une section en style « Carte », l'option « Réseau » place un point pour chaque lieu d'intervention sur la carte du monde, avec un arc qui part du bureau.
  - Les lieux se renseignent dans chaque contenu, bloc « Lieux d'intervention ». Le back-office repère les villes citées dans le champ « Lieu » ; un clic suffit pour les ajouter.
  - Pour une ville absente de la liste, choisis « Autre lieu » et donne ses coordonnées.
  - Sur le site, le survol d'un point affiche la ville et les projets qui s'y sont passés.
- **Modèles 3D.**
  - Pour importer, sélectionne ensemble le fichier `.dae` (Collada) et ses textures JPG ou PNG.
  - Une texture absente est remplacée par du blanc ; le message te dit laquelle.
  - Réglages possibles : taille (échelle de 2008 ou hauteur fixe), rotation, rendu des faces sans texture.
- **Médias.** La liste des fichiers du dépôt et de ce qui les utilise. Tu peux y supprimer ceux qui ne servent plus.
  - Les images reprises de l'ancien site restent hébergées chez Squarespace. « Rapatrier dans le dépôt » les copie dans media/. Si le serveur d'origine refuse, télécharge-les et renvoie-les depuis la fiche du contenu.
- **Typographie.** Réglages › Typographie règle chaque texte du site : signature, menu, interface, fiches (titre, sous-titre, texte, intertitres, date, mentions, noms), contact, accueil, cartes 3D et lettres du logo rond. Pour chacun : police, taille, interligne, graisse, espacement, italique, majuscules, avec un aperçu. Par défaut, c'est la typographie d'origine ; « Rétablir » y revient. Polices au choix : celles du système, celles hébergées avec le site (Gelasio, Montserrat, Wire One) ou n'importe quelle police Google Fonts par son nom.
- **Réglages.** Nom, logo, couleur d'accent, mode négatif à l'arrivée (le site s'inverse, les photos et vidéos des contenus gardent leurs couleurs ; les visiteurs basculent négatif / positif en cliquant sur le logo), langues, signature, page d'accueil (le « bullshit slogan » du site Fat-Man : invitation, exemple, slogans du bandeau LED ; les slogans tapés par un visiteur défilent sur son écran), bureaux, réseaux.
- **Showreel.** Réglages › Showreel : colle le lien YouTube, Vimeo ou MP4. Un bouton « Showreel » sous le logo, visible partout (accueil compris), fait glisser un écran au premier plan. La vidéo part son coupé ; le bouton jaune active le son. Échap, la croix ou un clic à côté referment l'écran et mettent la vidéo en pause.
- **Liens clients.** Ajoute `?tag=` à l'adresse du site pour choisir le tag affiché en premier : `hand-coded.net/?tag=sound`. L'identifiant ou le nom du tag marchent, dans n'importe quelle langue (`?tag=son`, `?tag=sonido`). Sans paramètre, c'est le tag réglé dans la section (Sélection). `#work/sound` fait la même chose en sautant l'accueil. Dans Sections, « Liens à envoyer » copie le lien de chaque tag.
- **Bullshit slogans.** Entrée (ou ENTER) valide le slogan tapé et fait entrer dans le site, même champ vide. Pour garder tous les slogans validés par les visiteurs, relie le site à une feuille Google : suis les étapes en tête de `tools/slogans-google-sheet.gs`, puis colle l'adresse dans Réglages › Accueil › Collecte des slogans. « Afficher les slogans reçus » les liste, et « + Bandeau » en ajoute un au bandeau LED.
- **Historique.** Les dernières publications. Une ancienne version se recharge dans le brouillon, puis tu la republies.

**Langues.** Le site est en anglais, français, catalan et espagnol. Il s'ouvre dans la langue du navigateur du visiteur, qui peut en changer en bas à gauche. Réglages › Langues du site active ou retire une langue ; le back-office affiche un champ par langue activée.

**Aperçu** montre le site avec les modifications non publiées, en taille bureau, tablette ou mobile.

**Publier** (ou Ctrl+S) envoie tout en un seul commit. Le site est à jour 1 à 2 minutes après.

Tant que tu n'as pas publié, le brouillon reste dans le navigateur : textes, images ajoutées, suppressions. Tu le retrouves si tu fermes l'onglet.

Si quelqu'un publie depuis un autre poste entre-temps, le back-office te prévient avant d'écraser.

## Limites à connaître

- **Images.** Elles sont réduites avant l'envoi : 1400 px pour les vignettes, 1000 px de haut pour les images de fiche.
- **Vidéos.** Formats MP4 ou WebM. Vise moins de 20 Mo par vidéo. GitHub refuse les fichiers de plus de 100 Mo.
- **Dépôt.** Un dépôt GitHub Pages devrait rester sous 1 Go. Pour beaucoup de vidéos lourdes, héberge-les ailleurs et colle leur adresse.
- **Jeton.** Il donne le droit d'écrire dans ce dépôt seulement. Il ne quitte ton navigateur que pour api.github.com.
- **Ordinateur partagé.** Ne coche pas « Rester connectée » : le jeton s'efface à la fermeture de l'onglet.

## Démo sans GitHub

Sur la page de connexion, « Essayer sans GitHub » ouvre le back-office en mode démo. Tout ce que tu y publies reste dans ce navigateur.

La page autonome `hand-coded-backoffice-demo.html` fonctionne de la même façon, sans aucun fichier à côté.

## Fichiers

```
index.html              site public
admin/                  back-office (index.html, config.json)
assets/hc/site.js       moteur 3D (porté de StageView3D v10, novembre 2008), source
assets/hc/*.bundle.js   versions regroupées de site.js et admin.js, celles que les pages chargent
assets/hc/admin.js      back-office
assets/hc/store.js      partagé : contenu, traductions, assainissement HTML, accès GitHub
content/content.json    tout le contenu du site
content/content.js      sa copie pour l'ouverture en local (réécrite à chaque publication)
models/models.js        les modèles 3D embarqués, pour l'ouverture en local
models/                 modèles Collada d'origine, la lampe origami (models/lampe/) ; les modèles importés vont dans models/<nom>/
media/                  images et vidéos envoyées depuis le back-office
tools/                  slogans-google-sheet.gs, le script de collecte des slogans (feuille Google)
vendor/three/           Three.js r160 (licence MIT), servi localement
vendor/fonts/           polices Gelasio, Montserrat et Wire One (licence OFL), servies localement, au choix dans Réglages › Typographie
```
