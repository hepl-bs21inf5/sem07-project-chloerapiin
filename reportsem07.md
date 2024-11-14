Seminaire 06 - Outils

[Chloe Rapin]

# Journal de Bord - Projet de Chloé

## 7 novembre 2024 au 26 décembre 2024

## Semaine 7

### 0. Temps éstimé

| **Tâches**     | **Temps estimé** | **Temps passé** | **Commentaire**                                                                                        |
| -------------- | ---------------- | --------------- | ------------------------------------------------------------------------------------------------------ |
| vue.js         | 15min            | 1h              | problème pour trouver les dossiers cachés, ce qui m'a fait perdre du temps                             |
| bootstrap      | 30min            | 45min           | Bootstrap ne s'était pas installer                                                                     |
| quiz           | -                | -               |                                                                                                        |
| 3 quiz         | 20min            | 33min           | comprendre les éléments du code à changer pour faire une nouvelle question avec des nouvelles réponses |
| 4 choix de rep | 5min             | 7min            |                                                                                                        |
| ajouter score  | 5min             | 20min           | rappel des condition, if a ajouter dans la fonction submit                                             |
| ajouter reset  | 1h               | 2h              | problème à cause de l'indentation et de faire attention à fermer l'accolade accolade                   |
| QuestionRadio  | 1h               | 50min           |                                                                                                        |
| Questiontext   | 1h               | 1h40 +          |                                                                                                        |

# 1. Tâches réalisées

| **Tâche** | **Description**          |
| --------- | ------------------------ |
| vue.js    | installation de vue.js   |
| Bootstrap | instalation de bootstrap |
| Tâche 3   |                          |
| ...       | ...                      |

# 2. Difficultés rencontrées et solutions trouvées

| **Problème** | **Description** | **Solution** |
| ------------ | --------------- | ------------ |
| Problème 1   |                 |              |
| Problème 2   |                 |              |
| ...          | ...             | ...          |

# 3. Explications et réflexions sur le code

| **Questions sur le code** | **Aspects** | **Détails** |
| ------------------------- | ----------- | ----------- |
|                           |             |             |
|                           |             |             |
|                           |             |             |
|                           |             |             |
|                           |             |             |

# 4. Suite du projet

| **Objectif pour la semaine prochaine** | **Description** |
| -------------------------------------- | --------------- |
|                                        |                 |
|                                        |                 |
|                                        |                 |

| **Suite du projet** | **Description** |
| ------------------- | --------------- |
|                     |                 |
|                     |                 |
|                     |                 |

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

il s'agit des élèment de la class, donc computed c'est la clé et ref la valeur... ?

## Que se passe-t-il lorsqu'on clique sur le bouton "Terminer" ?

il verifie chaque réponse entrée par l'utilisateur et calcul le nombre de réponse juste et renvoie une réponse dépendant du nombre de réponses justes

## Qu'est-ce qu'un v-model ?

## À quoi sert le :class="{ disabled: !filled }" ?

# Le composant QuestionRadio doit recevoir les propriétés suivantes :

v-model : la valeur de la réponse (bi-directionnel, car on veut pouvoir modifier la réponse depuis le composant parent lorsqu'on clique sur le bouton "Réinitialiser" et récupérer la réponse depuis le composant parent pour calculer le score).
id : un identifiant unique pour le groupe de boutons radio.
text : le texte de la question.
options : un tableau d'objets pour les options de réponse. Chaque objet doit avoir une propriété value pour la valeur de la réponse et une propriété text pour le texte affiché de l'option.
