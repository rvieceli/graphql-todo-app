import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import Modal from 'react-native-modal';

import New from './New';
import { Container, Header, Button } from './styles';

export default function Options() {
  const [showNewModal, setShowNewModal] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <Container>
      <Header>
        <Button onPress={() => setShowFilters(!showFilters)}>
          <MaterialIcons name="filter-list" size={30} color="#fff" />
        </Button>
        <Button onPress={() => setShowNewModal(true)}>
          <MaterialIcons name="add-circle" size={30} color="#fff" />
        </Button>
        <Modal
          isVisible={showNewModal}
          swipeDirection={['up', 'left', 'right', 'down']}
          style={{ justifyContent: 'flex-end', margin: 0 }}
        >
          <New handleClose={() => setShowNewModal(false)} />
        </Modal>
      </Header>
    </Container>
  );
}
