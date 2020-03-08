import React from 'react';
import { StatusBar, YellowBox } from 'react-native';
import { ApolloProvider } from '@apollo/react-hooks';

import client from './src/services/apollo';
import Todo from './src';

YellowBox.ignoreWarnings(['Warning: componentWill']);

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ApolloProvider client={client}>
        <Todo />
      </ApolloProvider>
    </>
  );
}
