import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Mensagens } from './src/screens/Mensagens';
//import { Routers } from './src/routes';

export default function App() {

  return (
    <>
      <StatusBar style="auto" />
      <Mensagens/>
      {/* <Routers /> */}
    </>
  );
}
