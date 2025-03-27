/** @format */

'use client'
import { CheckCheck, Copy } from 'lucide-react'
import { toast } from 'sonner'

import { useCopyToClipboard } from '~/hooks'
import { useCount, useCountActions } from '~/store/count-store'

const CLONE_TEXT = 'git clone https://github.com/BinarySenseiii/next-clean.git'

function HomePage() {
   const [copy, isCopied] = useCopyToClipboard()
   const { updateIncrementCount } = useCountActions()
   const count = useCount()

   const handleCopy = () => {
      copy(CLONE_TEXT)
      updateIncrementCount(count + 1)
      toast.success('Clone URL copied to clipboard!')
   }

   return (
      <div className="flex min-h-dvh items-center justify-center">
         <div className="space-y-4">
            <span className="text-white block italic">Copied {count} times</span>
            <div className="flex card cursor-pointer gap-4 items-center justify-center" onClick={handleCopy}>
               <span className="text-vivid-orange italic">{CLONE_TEXT}</span>
               <button className="text-vivid-orange text-sm" disabled={isCopied}>
                  {isCopied ? <CheckCheck /> : <Copy />}
               </button>
            </div>
         </div>
      </div>
   )
}

export default HomePage
