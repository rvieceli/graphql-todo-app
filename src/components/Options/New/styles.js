import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  background-color: #fff;
  padding: 30px 10px;
  elevation: 4;

  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  margin-bottom: 30px;
  margin-left: 10px;
  color: #333;
  width: 100%;
`;
