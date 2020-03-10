import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './src/routes';

console.disableYellowBox = true;

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#EEE"/>
      <Routes />
    </>
  );
};
