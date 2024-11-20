import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
//import { Routers } from './src/routes';

export default function App() {

  return (
    <>
      <StatusBar style="auto" />
      {/* <Routers /> */}
      <Home/>
    </>
  );
}
