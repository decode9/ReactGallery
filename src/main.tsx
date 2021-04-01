/* Vista Principal de la aplicacion */
/* PROVEEDOR DE SAFE AREA y VISTA MAIN */
import React from 'react';
import Main from './screens/Main';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default () => (
  <SafeAreaProvider>
    <Main/>
  </SafeAreaProvider>
);
