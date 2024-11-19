import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Login } from './src/screens/Login';
import { Cadastrar } from './src/screens/Cadastrar';
//import { Routers } from './src/routes';

export default function App() {

  return (
    <>
      <StatusBar style="auto" />
      {/* <Cadastrar /> */}
      <Login />
      {/* <Routers /> */}
    </>
  );
}
