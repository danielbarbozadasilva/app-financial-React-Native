import React from 'react'
import { CustomButton, CustomButtonText } from './styled'
import { ButtonProps } from './types'

const CustomButtonComponent: React.FC<ButtonProps> = ({ text, onPress }) => {
  return (
    <CustomButton onPress={onPress}>
      <CustomButtonText>{text}</CustomButtonText>
    </CustomButton>
  )
}

export default CustomButtonComponent
