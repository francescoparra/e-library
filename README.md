# E-Library

Quest'applicazione ci permetterà di accedere ad un applicazione web dove potremo ricercare dei libri e vederne le informazioni principali.

#Realizzazione

1. Directories
  -  Components: all'interno di essa troviamo i vari componenti che userò nelle pagine dell'applicazione.
  -  Images: all'interno di essa troviamo le varie immagini utilizzate all'interno dell'applicazione.
  -  Pages: all'interno di essa troviamo le pagine che andranno a comporre la mia applicazione.
  -  Style: all'interno di essa troviamo i fogli di stili che applicherò alle pagine e ai componenti.
2. React
  -  Possiamo notare che nell'app ho utilizzato React Router, React Hooks e axios.
  -  Le chiamate API vengono eseguite per i libri cercati dentro la home e verranno renderizzati poi nella BookCard tramite il passaggio di valori tra componenti, e per il signolo libro verà fatta una chiamata apposita tramite l'id, che ci fornirà le informazioni riguardanti lo specifico libro.
  -  Notiamo che ho apportato alcune personalizzazzioni, come ad esempio le virgole tra i vari autori e poi alcune piccole interazioni per dare una migliore UX tramite i componenti Advice e Loading.
3. SCSS
  - Applico gli stili ai componenti e alle pagine rendendole responsive.
 
# Conclusione

L'applicazione lavora in tutte le sue funzioni sia su desktop che nella sua versione mobile.  

Deploy eseguito su netlify: https://e-library-project.netlify.app/

## Test the APP here: https://e-library-project.netlify.app/

## Built with
To develop the app I used:
- React.js
- React Router
- React Hooks
- Axios

## API
The API used is the Google Books API.

API: https://developers.google.com/books/docs/overview



# Installation
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
