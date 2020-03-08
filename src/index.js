import React from 'react';
import { SafeAreaView } from 'react-native';

import { TodoList, Options } from './components';

// import { Container } from './styles';

export default function Todo() {
  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <Options />
      <TodoList />
    </SafeAreaView>
  );
}
