Seminaire 06 - Outils

[Chloe Rapin]

# Journal de Bord - Projet de Chloé

## 7 novembre 2024 au 26 décembre 2024

## Semaine 7

### 0. Temps éstimé

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
| Checkbox        | 1h...            | 2h...           | je n'y arrive pas, je mélange tous les quiz et j'ai plus que le trivia et plus le mien de quiz            |
| réponse         | 1h               | 1h30min         | Ce qui est attendu est clairement formulé et expliqué dans la marche à suivre, faire attention de bien    |
|                 |                  |                 | vérifier les majuscules ou ce qu'on à écrit pour nos valeurs, pour que la comparaiosn marche bien         |
| score           | 1h               |                 |                                                                                                           |
| états et bouton | 1h               | 2h45            | étape très longue et assez fastidieuse, j'ai du faire beaucoup de recherche et m'aider des solutions, car |
|                 |                  |                 | je n'avais jamais les choses justes...donc je ne suis èas sûre d'avoir réellemnt compris comment faire... |
| réponses immuab | 10min            | 2min            |                                                                                                           |
|                 |                  |                 |                                                                                                           |

# 2. Difficultés rencontrées et solutions trouvées

| **Problème**        | **Description**                                                                    | **Solution**      |
| ------------------- | ---------------------------------------------------------------------------------- | ----------------- |
| Problème 1: 1.12.24 | Afficher le score uniquement si toutes les questions ont été soumises et corrigées | je n'y arrive pas |
| Problème 2          |                                                                                    |                   |
|                     |                                                                                    |                   |

# 4. Suite du projet

| **Suite**       | **Description**                                                                                                                               |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| contact 1h      | j'ai repris le code du formulaire qu'on avait fait pour l'aventure et je l'ai réutilisé pour ma page de contact, qui s'appele ContactView,vue |
| parametre 10min | j'ai juste créé une page ParametreView.vue pour mettre le titre parametre                                                                     |
|                 |                                                                                                                                               |

option + shift + F pour formater le tableau

Le rôle des fichiers suivants :
main.ts
main.css : code css pour modifer tous ce qui est des couleurs/police de notre page
App.vue: icône navabar
router/index.ts
AboutView.vue
HomeView.vue
QuizForm.vue: code html de base

# Dans le fichier QuizForm.vue :

## Quelles sont les similarités et les différences entre ref et computed ?

ce sont tous les deux des "variables", sauf que computed est mis à jour automatiquement selon d'autres "variables"
--> ref est une variable qu'on met à jour nous-mêmes, alors que computed se met à jour automatiquement en fonction d'autres "variables".

## Que se passe-t-il lorsqu'on clique sur le bouton "Terminer" ?

il verifie chaque réponse entrée par l'utilisateur et calcul le nombre de réponse juste et renvoie une réponse dépendant du nombre de réponses justes

## Qu'est-ce qu'un v-model ?

ça permet de stocker une variable qui peut changer, comme dans mon quiz ou ça peut être cheval/pattes/capitale

## À quoi sert le :class="{ disabled: !filled }" ?

:disabled permet de cibler un élément désactivé --> permet d'éviter d'activer le bouton tant que pas toutes les cases ont été cochées

# Comment rendre la propriété placeholder optionnelle ?

required: Définit si l'accessoire est nécessaire.
En mettant required: false, alors la propriété devient optionnelle ce qui évite que Vue déclenche une erreur si la prop n'est pas fournie lors de l'éxecution

# Le composant QuestionRadio doit recevoir les propriétés suivantes :

v-model : la valeur de la réponse (bi-directionnel, car on veut pouvoir modifier la réponse depuis le composant parent lorsqu'on clique sur le bouton "Réinitialiser" et récupérer la réponse depuis le composant parent pour calculer le score).

id : un identifiant unique pour le groupe de boutons radio.

text : le texte de la question.

options : un tableau d'objets pour les options de réponse. Chaque objet doit avoir une propriété value pour la valeur de la réponse et une propriété text pour le texte affiché de l'option.

# À quoi sert l'option immediate: true dans le watch ?

Permet de forcer l'exécution immédiate de l'affichage de la réponse, car tant que l'utilisateur ne sélectionne pas de réponse on ne voit pas true ou false pour chaque question

# Que se passe-t-il si on l'enlève ou si on met immediate: false ?

pas immédiat il attend que l'utilisateur choisisse des réponses avant d'afficher les réponses (true ou false)

# Porposer une autre manière de calculer le score et comparer les deux méthodes

il y aurai la manière avec la fonction submit comme on avait fait au début (avec les conditon if)

# Comment pourrait-on réécrire la ligne suivante sans l'opérateur ternaire (avec des if et else) ?

    ### model.value =
    ### value.value === props.answer ? QuestionState.Correct : QuestionState.Wrong;

if
