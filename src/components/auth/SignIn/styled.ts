import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #152039;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const SImage = styled.Image`
  width: 350px;
  height: 190px;
`;

export const InputArea = styled.View`
  width: 100%;
  padding: 0px 40px;
`;

export const ContainerButton = styled.View`
  margin-top: 20px;
`;

export const styles = StyleSheet.create({
  input: {
    height: 50,
    marginTop: 15,
    backgroundColor: '#E4E3E8',
    paddingStart: 15,
    fontSize: 16,  
  },
});
