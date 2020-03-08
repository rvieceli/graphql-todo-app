// import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  height: 50px;
  width: 100%;
  padding: 5px 10px;

  background: #fff;

  border-left-width: 10px;
  border-left-color: #008c45;

  border-right-width: 10px;
  border-right-color: #cd212a;

  flex-direction: row;
  align-items: center;
`;

export const RightView = styled(RectButton)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-horizontal: 20px;
  background-color: #cd212a;
`;

export const RightTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-right: 10px;
`;

export const Description = styled.Text`
  color: #333;
`;

export const Details = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const CompleteView = styled.View`
  justify-content: center;
  align-items: center;

  height: 24px;
  width: 24px;

  elevation: 10;
`;

export const Time = styled.Text`
  color: #555;
  font-size: 10px;
`;

export const PriorityButton = styled.TouchableOpacity`
  height: 24px;
  width: 24px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: #cd212a;
  border-radius: 12px;

  shadow-color: #000;
  shadow-offset: 0 5px;
  shadow-opacity: 0.34;

  elevation: 10;
`;

export const PriorityText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #fff;

  position: relative;
  left: -4px;
`;
