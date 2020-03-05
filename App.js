import React from 'react';
import { StatusBar, Text, View } from 'react-native';

import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#42af61" />
      <Routes/>
    </>
  );
};
