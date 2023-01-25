import React from 'react'
import { TitleHeader } from './styled'

type TitleProps = {
  text: string
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return <TitleHeader>{text}</TitleHeader>
}
export default Title
