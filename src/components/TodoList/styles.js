import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const List = styled(FlatList)`
  flex: 1;
`;

export const Separator = styled.View`
  width: 100%;
  height: ${StyleSheet.hairlineWidth}px;
  background: #ddd;
  border-left-width: 10px;
  border-left-color: #008c45;

  border-right-width: 10px;
  border-right-color: #cd212a;
`;
