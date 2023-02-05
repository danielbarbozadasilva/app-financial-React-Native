import React from 'react'
import { TitleHeader } from './styled'
import { TitleProps } from './types'

const Title: React.FC<TitleProps> = ({ text }) => {
  return <TitleHeader>{text}</TitleHeader>
}
export default Title
