# Readme

## Lancement de l'application

1. Téléchargez l'application Expo Go sur mobile
2. Faites `npm install` dans le terminal
3. Connectez votre mobile et votre laptop sur le même wifi
4. Faites: `make start` dans le terminal
5. Vous devez appuyer sur `s`pour switcher vers Expo Go
6. Ouvrez Expo Go et scannez le QR code la première fois (sinon retrouvez le projet direct dans l'app)

---

## Documentation d'Expo

Expo est un framework basé sur React Native permettant d'accélérer le développement Cross Platform.

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).

## Architecture

![alt text](architecture.png)

```
.
├── app
│   ├── _layout.tsx
│   ├── storeProvider.tsx
│   ├── index.tsx    //Route '/'
│   ├── exemple     //Route '/exemple'
│       ├── index.tsx
│       ├── style.css
│
├── assets      //mettre ici tous les médias (images, icônes...)
|
├── constants      //les datas en dures qui ne bougent jamais, style des enums
│
├── components      //mettre ici tous les gros composants (un dashboard par exemple ou un menu)
│   ├── exemple
│       ├── exemple.tsx
│       ├── style.css
│   ├── ui      //Petits composants réutilisables dans les gros composants (un bouton ou un texte par exemple)
│       ├── button.tsx
│       ├── style.css
|
├── services      //les calls api
|
├── models      //les types
|
├── domain      //logique métier de l'application, c-a-d class avec méthodes (un utilisateur, une sonde, un potager)
|
├── store      // gestions du store
│   ├── actions // déclencher les actions
│   ├── selectors // récupérer les datas du store
│   ├── reducers // déclaration d'un élément dans le store
│   ├── hooks.tsx // ne pas toucher
│   ├── store.tsx // partage dans le store
```
