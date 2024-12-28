Seminaire 06 - Outils

[Chloe Rapin]

# Journal de Bord - Projet de Chloé

## Lien du site: https://hepl-bs21inf5.github.io/sem07-project-chloerapiin/

## 7 novembre 2024 au 26 décembre 2024

# 1. Temps éstimé

| **Tâches**      | **Temps estimé** | **Temps passé** | **Commentaire**                                                                                           |
| --------------- | ---------------- | --------------- | --------------------------------------------------------------------------------------------------------- |
| vue.js          | 15min            | 1h              | problème pour trouver les dossiers cachés, ce qui m'a fait perdre du temps                                |
| bootstrap       | 30min            | 45min           | Bootstrap ne s'était pas installer                                                                        |
| quiz            | -                | -               |                                                                                                           |
| 3 quiz          | 20min            | 33min           | comprendre les éléments du code à changer pour faire une nouvelle question avec des nouvelles réponses    |
| 4 choix de rep  | 5min             | 7min            |                                                                                                           |
| ajouter score   | 5min             | 20min           | rappel des condition, if a ajouter dans la fonction submit                                                |
| ajouter reset   | 1h               | 2h              | problème à cause de l'indentation et de faire attention à fermer l'accolade accolade                      |
| QuestionRadio   | 1h               | 50min           | Faire attention aux props                                                                                 |
| Questiontext    | 1h               | 1h40 +          | Pas facile de faire attention à tous les détails à ne pas oublier                                         |
|                 |                  |                 | pour faire fonctionner le code comme pour question RADIO                                                  |
| API             | 1h30             | 30min           | porblème avec le fichier triviaView --> il dit : Impossible de localiser le module                        |
| Checkbox        | 1h               | 2h              | je n'avais pas compris la logique d'écriture dans Quizform.vue, mais enfaite c'est comme questionradio    |
| réponse         | 1h               | 1h30min         | Ce qui est attendu est clairement formulé et expliqué dans la marche à suivre, faire attention de bien    |
|                 |                  |                 | vérifier les majuscules ou ce qu'on à écrit pour nos valeurs, pour que la comparaiosn marche bien         |
| score           | 1h               |                 |                                                                                                           |
| états et bouton | 1h               | 2h45            | étape très longue et assez fastidieuse, j'ai du faire beaucoup de recherche et m'aider des solutions, car |
|                 |                  |                 | je n'avais jamais les choses justes...donc je ne suis èas sûre d'avoir réellemnt compris comment faire... |
| réponses immuab | 10min            | 2min            |                                                                                                           |
| réponse detaill | 1h               | 1h              | C'est pratique pour les question texte libre, car sa permet de laisser l'utilisateur répondre librement   |
|                 |                  |                 | et on lui donne juste une réponse générale dans le answerdetails sans mettre de juste ou de faux          |
| style           | 20min            | 5min            | enfaite il faut juste copier et ensuite ça nous permet de mettre des couleurs pour les répnses si c'est   |
|                 |                  |                 | juste ou si c'est faux                                                                                    |
| déploiement     | 30min            | 2h              | J'ai eu un problème ou une deuxiè me branche c'est créer j'ai du alors reprendre un ancien commit et      |
|                 |                  |                 | recommencer le déploiement pour que cette fois cela marche et que je reste sur la branche main            |
|                 |                  |                 |                                                                                                           |
|                 |                  |                 |                                                                                                           |
|                 |                  |                 |                                                                                                           |
|                 |                  |                 |                                                                                                           |

# 2. Difficultés rencontrées et solutions trouvées

| **Problème**         | **Description**                                                                    | **Solution**     |
| -------------------- | ---------------------------------------------------------------------------------- | ---------------- |
| Problème 1: 1.12.24  | Afficher le score uniquement si toutes les questions ont été soumises et corrigées | problème de type |
| Problème 2: 28.12.24 | Afficher le score avec les questiontextlibre ca pose problème, car elle n'admette  |                  |
|                      | pas de juste et/ou de faux donc pas logique de calculer le score mais je n'arrive  |                  |
|                      | à les enlever dans le calcul du score                                              |                  |
|                      |                                                                                    |                  |
|                      |                                                                                    |                  |

| | pas de juste et/ou de faux donc pas logique de calculer le score mais je n'arrive | |

# 3. Suite du projet

| **Suite**        | **Description**                                                                                                                               |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| contact (1h)     | j'ai repris le code du formulaire qu'on avait fait pour l'aventure et je l'ai réutilisé pour ma page de contact, qui s'appele ContactView,vue |
| parametre(10min) | j'ai juste créé une page ParametreView.vue pour mettre le titre parametre                                                                     |
| + de question    | j'ai rajouter des questions en lien avec mon cours de théorie de l'apprentissage                                                              |
|                  |                                                                                                                                               |
|                  |                                                                                                                                               |
|                  |                                                                                                                                               |
|                  |                                                                                                                                               |
|                  |                                                                                                                                               |

option + shift + F pour formater le tableau
command + shift + V pour prévisualiser le rapport

# Questions sur le projet

## Le rôle des fichiers suivants :

- **main.ts**: dans ce document on import des fichiers CSS pour le style de l'application, comme les Bootstrap. Il y a aussi la fonction createApp qui crée notre application. C'est aussi ici qu'on gère pour voir et accéder aux différentes pages, ce qui permet de naviguer dans mon app

- **main.css** : dans ce fichier on définit l'apparence des boutons avec la classe".btn-primary" dans notre app.

- **App.vue**: le fichier est très important, car il contient la barre de navigation de notre app, cela permet de se déplacer dans les différentes pages, accueil, trivia, contact, etc. Grace a "RouterLink", on peut gérer la navigation vers les différentes pages et "RouterView", permet d'afficher le contenu des pages.

- **router/index.ts**: dans ce fichier on configure les chemins d'accès aux différentes pages de notre application en définissant les routes et en les associant aux chemins pour chaque composant.

- **AboutView.vue**:le fichier est un composant qui contient la page à propos de notre app. Cela permet d'afficher tous les infos que contient notre page about.

- **HomeView.vue**: dans ce fichier il s'agit aussi d'un composant qui est notre page d'accueil de notre app et sur laquel il y a notre quiz.

- **QuizForm.vue**: le fichier est également un composant qui gère notre quiz, avec les différents types de questions, checkbox, texte, radio, etc. Il calcule aussi le score, gère les états des questions(emptyfill, submit,...), il y les boutons, un pour soumettre le quiz et un pour réinitialiser son quiz

## Dans le fichier QuizForm.vue :

### Quelles sont les similarités et les différences entre ref et computed ?

Ce sont tous les deux des "variables", sauf que computed est mis à jour automatiquement selon d'autres "variables"

- ref est une variable qu'on met à jour nous-mêmes, alors que computed se met à jour automatiquement en fonction d'autres "variables".

### Que se passe-t-il lorsqu'on clique sur le bouton "Terminer" ?

il verifie chaque réponse entrée par l'utilisateur et calcul le nombre de réponse juste et renvoie une réponse dépendant du nombre de réponses justes

### Qu'est-ce qu'un v-model ?

Ca permet de stocker une variable qui peut changer, comme dans mon quiz ou ça peut être cheval/pattes/capitale

### À quoi sert le :class="{ disabled: !filled }" ?

:disabled permet de cibler un élément désactivé

- permet d'éviter d'activer le bouton tant que pas toutes les cases ont été cochées

## Quelle est la différence entre un prop et un modèle (v-model)?

- Un prop : c'est toute les données d'un composant (exemple : texte, les options, la réponse correcte, etc.)
- un v-model : c'est ce qui lie les valeurs de l'utilisateur et les données du composant de base

Je ne suis pas trop sûre de mes réponses si je mélange les données du composant avce les réponses de l'utilisateur ... ?

## Comment rendre la propriété placeholder optionnelle ?

required: Définit si l'accessoire est nécessaire.

En mettant required: false, la propriété devient optionnelle. Même avant l'exécution, l'erreur est déjà signalée, ce qui empêche Vue de générer une erreur si la prop n'est pas donnée lors de l'exécution.

## Le composant QuestionRadio doit recevoir les propriétés suivantes :

- v-model : la valeur de la réponse (bi-directionnel, car on veut pouvoir modifier la réponse depuis le composant parent lorsqu'on clique sur le bouton "Réinitialiser" et récupérer la réponse depuis le composant parent pour calculer le score).

- id : un identifiant unique pour le groupe de boutons radio.

- text : le texte de la question.

- options : un tableau d'objets pour les options de réponse. Chaque objet doit avoir une propriété value pour la valeur de la réponse et une propriété text pour le texte affiché de l'option.

## À quoi sert l'option immediate: true dans le watch ?

Permet de forcer l'exécution immédiate de l'affichage de la réponse, car tant que l'utilisateur ne sélectionne pas de réponse on ne voit pas true ou false pour chaque question

### Que se passe-t-il si on l'enlève ou si on met immediate: false ?

pas immédiat il attend que l'utilisateur choisisse des réponses avant d'afficher les réponses (true ou false)

## Porposer une autre manière de calculer le score et comparer les deux méthodes

**1er méthode** :

```TS
    const score = computed<number>(
    () => correctAnswers.value.filter(value => value).length,
    )
    /*correctAnswers.value est un tableau qui contient les réponses true or false
    filter(value=>value): méthode qui permet de filter le tableau et dans resortir que les trues
    length : calcul le nombre de réponses correctes*/
```

- **+** cette méthode est plus courte et concise

* **-** elle a besoin de créer un tableau avec les valeurs true, elle marche seulement pour des réponses booléens

**2e méthode** :

```TS
function submit(event: Event): void {
    event.preventDefault()
    let score: number = 0
    if (cheval.value === 'blanc') {
        score += 1
    }
    if (chat.value === '4') {
        score += 1
    }
    alert(`Votre score est de ${score} sur 2`)
}
/*dans cette méthode, on calcul le score en fonction des réponses données pour chaque question et si elles sont juste alors on ajoute 1 à notre score*/
```

- **+** :plus compréhensible dans son fonctionnement, se fait quand on clique sur terminer

* **-** :plus longue, on doit à chaque fois faire appel à la fonction submit (terminer) pour calculer le score

## Comment pourrait-on réécrire la ligne suivante sans l'opérateur ternaire (avec des if et else) ?

```TS
"model.value" = ""
"value.value" === "props.answer ? QuestionState.Correct : QuestionState.Wrong";

...

if (newModel === QuestionState.Submit) {

    if (value.value === props.answer) { /*si la valeur    entrée est correct(= à props.answer)*/
    model.value = QuestionState.Correct;/*alors on assigne questionState.Correct à model value*/
    }
    else { /*Si la réponse est incorrecte*/
        model.value = QuestionState.Wrong; /*alors on assigne questionState.Wrong à model value*/
    }
}
```

### Aide

    if: si newModele est égale a questionstate ca veut dire que la réponse à été rentrée
    --> on vérifier alors si value.value(la valeur entrée par l'utilisateur)est égale à props.answer(la bonne réponse)
    --> si oui alors on met à jour model.value à questionstate.correct (la bonne réponse)
    --> sinon on met à jour sous questionstate.wrong (mauvaise réponse)

    else if : sinon si newModel est égale à questionstate.empty (pas de réponse)alors cela réinitialise la valeur a null
     sa permet de répondre à une seule question si l'on veut sans être dérangé par les questions auxquelles on n'a pas répondu
    watch(
    model,
    (newModel) => {
        if (newModel === QuestionState.Submit) {
        model.value = value.value === props.answer ? QuestionState.Correct : QuestionState.Wrong
        } else if (newModel === QuestionState.Empty){
        value.value = null
        }
    },
    );

## Comment pourrait-on réécrire autrement la logique du watch sur value ?

```TS
    watch(
        model,
        (newModel) => {
            if (newModel === QuestionState.Submit) {
                if (value.value == props.answer){ #si la valeur entrée est correct(= à props.answer)alors
                    model.value == QuestionState.Correct #alors on assigne questionState.Correct à model.value
                } else { #sinon
                    model.value == QuestionState.Wrong #on assigne question.Wrong à model.value
    }
            } else if (newModel === QuestionState.Empty){ #si l'utilisateur ne donne pas de réponse alors newModel est égale à QuestionState.Empty
                value.value = null # donc la valeur est null
            }
        },
    );
```

# Questions

## Ajouter ce computed dans QuestionRadio.vue :

```TS
    const answerText = computed<string>(
    () =>
        props.options.find((option) => option.value === props.answer)?.text ??
        props.answer,
    );
```

Remplacer {{ props.answer }} par {{ answerText }} dans le template.

Expliquer pourquoi on a fait ce changement ainsi que le code du computed.

- on fait ce changement

## Question du mardi 17 décembre du prof : comment êtes-vous arrivée à cette solution ?

J'ai remodifié le code pour bien le comprendre et j'ai rajouté des commentaires :

```TS
    watch(
    value,
    (newValues) => {
        if (model.value !== QuestionState.Submit) {           // si l'utilisateur sélectionne une/des réponses
        model.value = QuestionState.Fill                    //l'état de la question est fill = remplie
        }
        else if (newValues.length === null) {                  //si aucune réponse n'est selectionné alors le tableau avec les réponses est vide
        model.value = QuestionState.Empty                    //l'état de la question est empty = vide
        }
    },
    { immediate: true },
    )



    watch(model, (newModel) => {
    if (newModel === QuestionState.Submit) {                                      //si l'utilisateur soumet la question
        const isCorrect =                                                           // vérification de si les réponses sont correcte
        props.answer.length === value.value.length &&                             // vérifie si le nombre de réponse soumises égale au nombre de réponses justes
        props.answer.every((val) => value.value.includes(val))                    // Vérifie que chaque réponse juste là
        model.value = isCorrect ? QuestionState.Correct : QuestionState.Wrong       //si les réponse sont justes alors on définit l'état correct
                                                                                    //si les réponses sont fausses alors on définit l'état incorrect
    } else if (newModel === QuestionState.Empty) {                                //sinon si l'utilisateur ne rentre pas de réponse alors on mets l'état empty = vide
        value.value = []
    }
    })
```

# Expliquer votre démarche pour les améliorations que vous avez choisies :

1. J'ai ajouter le fichier avec le composant questionSelect.
2.Création d'un nouveau sytle CSS pour les commentaires (answerDetail).

### Pourquoi avez-vous choisi ces améliorations ?

1. il permet de rendre mon fichier plus aérer à la place d'avoir que des questionRadio.
2. ça permet de bien comprendre que c'est un nouveau commentaire ajouter après la soumission du quiz.

### Comment les avez-vous implémentées ?

1. j'ai repris tous le script de QuestionRadio et j'ai changé le template (il y a des commentaires directement dans le code).
2. J'ai ajouté dans le style à la fin de chaque document Question...

### Quels problèmes avez-vous rencontrés ?

1. j'ai du aller chercher sur internet pour trouver comment écrire le code dans le template
   source : https://fr.vuejs.org/guide/essentials/forms.html#select
   source : https://getbootstrap.com/docs/5.3/forms/select/#default
   Je me suis également aidé de blackbox.ai pour bien structurer mon code.
2. pas de problème 

### Quelles améliorations pourriez-vous encore apporter ?
+ J'aurais voulu pouvoir mettre mes questiontextlibre à part et faire un quiz avec un score et des question qui admettent des justes et des faux et faire une 2e partie avec mes questiontextlibre.--> j'ai essaié à plusieurs reprise mais il y avait toujours un problème avec les questionstate et quand je modifiais le v-model pour qu'elles sortent des état avec questionstate et bien ça ne marchait plus. J'ai donc préféré supprimer mes questiontextlibre et favoriser un quiz qui marche bien avec un score juste etc.
--> J'ai même essayer de mettre que les 14 premières question(juste/faux) on les ajoutait au score si questionstate correct sinon pas et pour les 6 autres question(questiontextlibre) que si les questionstate etait fill (remplis) alors ça ajoutait de toute facon +1 au score mais le code ne marchais plus et mes 6 dernières question ne marchait plus avec le bouton submit
+ Ajouter les bouton de terminer et réinitialiser pour le quiz trivia, avec les fonction, etc.
+ Création du vrai page de paramètre
+ création de plusieurs page de quiz en rapport à différents cours pour m'aider à réviser et à m'entrainer



