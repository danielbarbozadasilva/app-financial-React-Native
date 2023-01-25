import React from 'react'
import { CustomButton, CustomButtonText } from './styled'

type ButtonProps = {
  text: string
  onPress: any
}

const CustomButtonComponent: React.FC<ButtonProps> = ({ text, onPress }) => {
  return (
    <CustomButton onPress={onPress}>
      <CustomButtonText>{text}</CustomButtonText>
    </CustomButton>
  )
}

export default CustomButtonComponent
