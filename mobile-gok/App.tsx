import React from 'react';
import { StatusBar } from 'react-native';
import { AuthProvider } from "./src/context/auth";

import { Routes } from './src/routes';


export default function App(){
  
  return(
    <>
      <AuthProvider>
        <StatusBar 
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <Routes />
      </AuthProvider>
    </>
  );
}