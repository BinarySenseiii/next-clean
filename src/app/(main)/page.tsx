/** @format */

'use client'
import {useCopyToClipboard} from 'react-use'
import {CheckCheck, Copy} from 'lucide-react'
import {toast} from 'sonner'

const CLONE_TEXT = 'git clone https://github.com/BinarySenseiii/next-clean.git'

export default function HomePage() {
  const [{value}, copyToClipboard] = useCopyToClipboard()
  const hasCopiedText = Boolean(value)

  const handleCopy = () => {
    copyToClipboard(CLONE_TEXT)
    toast.success('Clone URL copied to clipboard!')
  }

  return (
    <div className="flex min-h-dvh items-center justify-center">
      <div
        className="flex card cursor-pointer gap-4 items-center justify-center"
        onClick={handleCopy}
      >
        <span className="text-vivid-orange">{CLONE_TEXT}</span>
        <i className="text-vivid-orange text-sm">{hasCopiedText ? <CheckCheck /> : <Copy />}</i>
      </div>
    </div>
  )
}
