import React from 'react'
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle,
  FaTimesCircle,
} from 'react-icons/fa'
import { Toaster, type ToasterProps } from 'sonner'

const SoonerToaster = ({ ...props }: ToasterProps) => {
  return (
    <Toaster
      richColors
      position="top-right"
      toastOptions={{
        classNames: {
          content: 'text-sm font-sans',
        },
      }}
      icons={{
        success: <FaCheckCircle className="size-5" />,
        info: <FaInfoCircle className="size-5" />,
        warning: <FaExclamationTriangle className="size-5" />,
        error: <FaTimesCircle className="size-5" />,
      }}
      {...props}
    />
  )
}

export default SoonerToaster
