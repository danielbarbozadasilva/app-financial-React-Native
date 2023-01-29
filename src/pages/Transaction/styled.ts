import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
`;

export const PageBody = styled.View`
  background-color: #fff;
  border-top-left-radius: 50px;
  margin-top: -60px;
  min-height: 400px;
`;

export const FinancialTitle = styled.Text`
  font-weight: bold;
`

export const FinancialInfo = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin-bottom: 7px;
`;

export const FinancialText = styled.Text`
  margin: 1.5% auto;
  font-size: 16px;
`

export const CustomButton = styled.TouchableOpacity`
  height: 40px;
  background-color: #463f57;
  color: #f6f7fc;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

export const CustomButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
`;