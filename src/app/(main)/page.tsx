/** @format */

'use client';
import { useCopyToClipboard } from 'react-use';
import { CheckCheck, Copy } from 'lucide-react';
import { toast } from 'sonner';

const CLONE_TEXT = 'git clone https://github.com/BinarySenseiii/next-clean.git';

export default function HomePage() {
  const [{ value }, copyToClipboard] = useCopyToClipboard();
  const hasCopiedText = Boolean(value);

  const handleCopy = () => {
    copyToClipboard(CLONE_TEXT);
    toast.success('Clone URL copied to clipboard!');
  };

  return (
    <div className='flex min-h-dvh items-center justify-center bg-black'>
      <div
        className='flex cursor-pointer items-center justify-center gap-2 text-white'
        onClick={handleCopy}
      >
        <span>{CLONE_TEXT}</span>
        <i>{hasCopiedText ? <CheckCheck /> : <Copy />}</i>
      </div>
    </div>
  );
}
