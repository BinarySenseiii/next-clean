import React from 'react'
import { CheckCircle, Info, AlertTriangle, XCircle } from 'lucide-react'
import { Toaster, type ToasterProps } from 'sonner'

const SoonerToaster = ({ ...props }: ToasterProps) => {
  return (
    <Toaster
      richColors
      position="bottom-right"
      toastOptions={{
        classNames: {
          content: 'text-sm font-sans',
        },
      }}
      icons={{
        success: <CheckCircle className="size-5" />,
        info: <Info className="size-5" />,
        warning: <AlertTriangle className="size-5" />,
        error: <XCircle className="size-5" />,
      }}
      {...props}
    />
  )
}

export default SoonerToaster
