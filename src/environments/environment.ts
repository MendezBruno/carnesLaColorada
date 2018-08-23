// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: 'AIzaSyCEH5CWZ0IlVb1vYS92vP3PmHN9uLis1Ao',
    authDomain: 'carniceria-app.firebaseapp.com',
    databaseURL: 'https://carniceria-app.firebaseio.com',
    projectId: 'carniceria-app',
    storageBucket: 'carniceria-app.appspot.com',
    messagingSenderId: '1011498024113'
  }
};
