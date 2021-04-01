# ReactGallery

ReactGallery es una aplicacion movil desarrollada en ReactNative en la que se aplican tecnicas de Scroll Infinito, consulta de datos, persistencia de datos, funciones generadoras, funciones asincronas y navegacion

## Dependencias

el sistema utiliza las siguientes dependencias

```json
{
 "dependencies": {
    "@react-native-async-storage/async-storage": "^1.14.1",
    "@react-navigation/native": "^5.9.3",
    "@react-navigation/stack": "^5.14.3",
    "@types/react-redux": "^7.1.16",
    "axios": "^0.21.1",
    "native-base": "^2.15.2",
    "react": "17.0.1",
    "react-native": "0.64.0",
    "react-native-gesture-handler": "^1.10.3",
    "react-native-safe-area-context": "^3.2.0",
    "react-redux": "^7.2.3",
    "redux": "^4.0.5",
    "redux-persist": "^6.0.0",
    "redux-saga": "^1.1.3"
  },
  "devDependencies": {
    "@babel/core": "^7.12.9",
    "@babel/runtime": "^7.12.5",
    "@react-native-community/eslint-config": "^2.0.0",
    "@types/jest": "^26.0.20",
    "@types/react-native": "^0.64.0",
    "@types/react-test-renderer": "^16.9.2",
    "babel-jest": "^26.6.3",
    "eslint": "^7.14.0",
    "jest": "^26.6.3",
    "metro-react-native-babel-preset": "^0.64.0",
    "react-test-renderer": "17.0.1",
    "typescript": "^3.8.3"
  }
}
```

## Ejecucion del proyecto para pruebas

Para ejecutar el proyecto en forma de prueba se ejecutan los siguientes comandos en consolas separadas, con la finalidad de levantar el metro bundle y levantar la aplicacion en un dispositivo android

``` bash
yarn start
```

``` bash
yarn android
```
