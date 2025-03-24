/** @format */

'use client'
import { useCopyToClipboard } from 'react-use'
import { CheckCheck, Copy } from 'lucide-react'
import { toast } from 'sonner'

import { useCount, useCountActions } from '~/store/count-store'

const CLONE_TEXT = 'git clone https://github.com/BinarySenseiii/next-clean.git'

function HomePage() {
   const [{ value }, copyToClipboard] = useCopyToClipboard()
   const { updateIncrementCount } = useCountActions()
   const count = useCount()
   const hasCopiedText = Boolean(value)

   const handleCopy = () => {
      copyToClipboard(CLONE_TEXT)
      updateIncrementCount(count + 1)
      toast.success('Clone URL copied to clipboard!')
   }

   return (
      <div className="flex min-h-dvh items-center justify-center">
         <div className="space-y-4">
            <span className="text-white block italic">Cloned {count} times</span>
            <div className="flex card cursor-pointer gap-4 items-center justify-center" onClick={handleCopy}>
               <span className="text-vivid-orange italic">{CLONE_TEXT}</span>
               <button className="text-vivid-orange text-sm">{hasCopiedText ? <CheckCheck /> : <Copy />}</button>
            </div>
         </div>
      </div>
   )
}

export default HomePage
