import React from 'react';
import {TitleHeader} from './styled';

type TitleProps = {
  text: string
}

const Title = ({ text }: TitleProps) => {
  return (
    <TitleHeader>{text}</TitleHeader>
  )
};
export default Title;
