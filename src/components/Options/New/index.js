import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useMutation } from '@apollo/react-hooks';
import PropTypes from 'prop-types';

import { CREATE_TODO, GET_TODOS } from '../../../services/queries';
import { Container, Input } from './styles';

export default function New({ handleClose }) {
  const [description, setDescription] = useState('');
  const [createTodo] = useMutation(CREATE_TODO, {
    update(cache, { data: { createTodo: newTodo } }) {
      const { todos } = cache.readQuery({ query: GET_TODOS });
      cache.writeQuery({
        query: GET_TODOS,
        data: { todos: todos.concat([newTodo]) },
      });
    },
  });

  function handleSubmit() {
    if (!description) {
      handleClose();
    }

    createTodo({ variables: { description } });
    handleClose();
  }

  return (
    <Container>
      <MaterialIcons
        name="border-color"
        size={20}
        color="#ccc"
        style={{ marginBottom: 30 }}
      />
      <Input
        editable
        value={description}
        onChangeText={setDescription}
        placeholder="Add new task"
        placeholderTextColor="#ccc"
        autoFocus
        returnKeyType="done"
        onSubmitEditing={handleSubmit}
      />
    </Container>
  );
}

New.propTypes = {
  handleClose: PropTypes.func.isRequired,
};
