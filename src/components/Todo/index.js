import React, { useMemo } from 'react';
import { ActivityIndicator } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { formatRelative } from 'date-fns';
import PropTypes from 'prop-types';

import { useMutation } from '@apollo/react-hooks';

import { COMPLETE_TODO, DELETE_TODO, GET_TODOS } from '../../services/queries';
import {
  Container,
  Description,
  RightView,
  RightTitle,
  Details,
  Time,
  CompleteView,
  PriorityButton,
  PriorityText,
} from './styles';

const RightActions = ({ onPress }) => {
  return (
    <RightView onPress={onPress}>
      <RightTitle>Tap to delete</RightTitle>
      <Ionicons name="md-trash" size={25} color="#fff" />
    </RightView>
  );
};

export default function Todo({
  id,
  description,
  completed,
  priority,
  createdAt,
}) {
  const [deleteTodo] = useMutation(DELETE_TODO, {
    update(cache) {
      const { todos } = cache.readQuery({ query: GET_TODOS });
      cache.writeQuery({
        query: GET_TODOS,
        data: { todos: todos.filter(todo => todo.id !== id) },
      });
    },
  });

  const [completeTodo, { loading: completeLoading }] = useMutation(
    COMPLETE_TODO
  );

  const dateFormatted = useMemo(
    () =>
      formatRelative(new Date(+createdAt), new Date(), {
        addSuffix: true,
      }),
    [createdAt]
  );

  return (
    <Swipeable
      useNativeAnimations
      renderRightActions={() => (
        <RightActions onPress={() => deleteTodo({ variables: { id } })} />
      )}
    >
      <Container>
        <CompleteView>
          <>
            {completeLoading ? (
              <ActivityIndicator color="#cd212a" size="small" />
            ) : (
              <>
                {completed ? (
                  <Ionicons
                    name="md-checkmark-circle"
                    size={25}
                    color="#008c45"
                  />
                ) : (
                  <PriorityButton
                    onPress={() => completeTodo({ variables: { id } })}
                  >
                    <MaterialIcons
                      name="priority-high"
                      size={15}
                      color="#fff"
                    />
                    <PriorityText>{priority}</PriorityText>
                  </PriorityButton>
                )}
              </>
            )}
          </>
        </CompleteView>
        <Details>
          <Description numberOfLines={1}>{description}</Description>
          <Time>{dateFormatted}</Time>
        </Details>
      </Container>
    </Swipeable>
  );
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  priority: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
};

RightActions.propTypes = {
  onPress: PropTypes.func.isRequired,
};
