import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styled from 'styled-components/native';

export const CustomButton = styled.TouchableOpacity`
  height: 45px;
  background-color: #FF6341;
  color: #f6f7fc;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const CustomButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
`;