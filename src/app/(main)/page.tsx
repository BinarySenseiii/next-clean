/** @format */

'use client'
import { useCopyToClipboard } from 'react-use'
import { CheckCheck, Copy } from 'lucide-react'
import { toast } from 'sonner'

import { useCount, useCountActions } from '~/store/count-store'

const CLONE_TEXT = 'git clone https://github.com/BinarySenseiii/next-clean.git'

function HomePage() {
   const [{ value }, copyToClipboard] = useCopyToClipboard()
   const { setIncreementCount } = useCountActions()
   const count = useCount()
   const hasCopiedText = Boolean(value)

   const handleCopy = () => {
      copyToClipboard(CLONE_TEXT)
      setIncreementCount(count + 1)
      toast.success('Clone URL copied to clipboard!')
   }

   return (
      <div className="flex min-h-dvh items-center justify-center">
         <div className="space-y-4">
            <div className="flex card cursor-pointer gap-4 items-center justify-center" onClick={handleCopy}>
               <span className="text-vivid-orange">{CLONE_TEXT}</span>
               <i className="text-vivid-orange text-sm">{hasCopiedText ? <CheckCheck /> : <Copy />}</i>
            </div>
         </div>

         <div className="mt-4 flex items-center justify-center space-x-4">
            <div className="text-sm text-white">Cloned {count} times</div>
         </div>
      </div>
   )
}

export default HomePage
