# GTRSuite Tests Frontend

- [GTRSuite Tests Frontend](#gtrsuite-tests-frontend)
  - [Configuration du projet](#configuration-du-projet)
    - [Installation des dépendances](#installation-des-dépendances)
    - [Compilation et _hot-reloads_ pour le développement](#compilation-et-hot-reloads-pour-le-développement)
  - [Traductions](#traductions)
  - [Lint & Formatage](#lint--formatage)
    - [Lints and corrections](#lints-and-corrections)
    - [Formatage des fichiers et des styles](#formatage-des-fichiers-et-des-styles)
  - [Tests](#tests)
    - [Lancement de tests unitaires](#lancement-de-tests-unitaires)
    - [Lancement de tests end-to-end](#lancement-de-tests-end-to-end)

## Configuration du projet

Pour pouvoir travailler sur ce projet _forkez_ le repository sur votre propre compte Github.

### Installation des dépendances

```
yarn install
```

### Compilation et _hot-reloads_ pour le développement

```
yarn serve
```

## Traductions

Pour vérifier les traductions manquantes ou inutilisées, veuillez utiliser cette commande :

```bash
yarn translations
```

## Lint & Formatage

### Lints and corrections

```
yarn lint
```

### Formatage des fichiers et des styles

```
yarn format
```

## Tests

### Lancement de tests unitaires

```
yarn test:unit
```

### Lancement de tests end-to-end

```
yarn test:e2e
```
