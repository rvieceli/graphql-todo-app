import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View``;

export const Header = styled(LinearGradient).attrs({
  colors: ['#008c45', '#fff', '#cd212a'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  height: 50px;
  width: 100%;

  background: #f99;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;
`;

export const Button = styled.TouchableOpacity``;
