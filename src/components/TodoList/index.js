import React from 'react';
import { ActivityIndicator } from 'react-native';

import { useQuery } from '@apollo/react-hooks';

import { GET_TODOS } from '../../services/queries';
import { Container, List, Separator } from './styles';
import Todo from '../Todo';

export default function TodoList() {
  const { loading: queryLoading, error, data } = useQuery(GET_TODOS);

  return (
    <Container>
      {queryLoading || error ? (
        <ActivityIndicator size="large" />
      ) : (
        <List
          data={data.todos}
          renderItem={({ item }) => <Todo {...item} />}
          keyExtractor={item => String(item.id)}
          ItemSeparatorComponent={() => <Separator />}
        />
      )}
    </Container>
  );
}
