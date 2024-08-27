import { Button, type ButtonProps, type ElementProps } from '@mantine/core'
import React from 'react'

interface CustomButtonProps
  extends ButtonProps,
    ElementProps<'button', keyof ButtonProps> {}

const CustomButton: React.FC<CustomButtonProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>
}
export default CustomButton
